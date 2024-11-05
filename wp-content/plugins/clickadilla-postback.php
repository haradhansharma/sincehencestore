<?php
/*
Plugin Name: Clickadilla Postback
Description: Captures URL parameters and sends a postback request to Clickadilla.
Version: 1.0
Author: Your Name
*/

// Create menu item for settings page
add_action('admin_menu', 'clickadilla_postback_menu');
function clickadilla_postback_menu() {
    add_options_page(
        'Clickadilla Postback Settings', 
        'Clickadilla Postback', 
        'manage_options', 
        'clickadilla-postback', 
        'clickadilla_postback_settings_page'
    );
}

// Register settings
add_action('admin_init', 'clickadilla_postback_settings_init');
function clickadilla_postback_settings_init() {
    register_setting('clickadilla_postback', 'clickadilla_postback_url');
    
    add_settings_section(
        'clickadilla_postback_section', 
        'Postback URL Settings', 
        'clickadilla_postback_section_callback', 
        'clickadilla-postback'
    );
    
    add_settings_field(
        'clickadilla_postback_url', 
        'Postback URL', 
        'clickadilla_postback_url_callback', 
        'clickadilla-postback', 
        'clickadilla_postback_section'
    );
}

function clickadilla_postback_section_callback() {
    echo '<p>Enter the postback URL provided by Clickadilla.</p>';
}

function clickadilla_postback_url_callback() {
    $url = get_option('clickadilla_postback_url');
    echo '<input type="text" name="clickadilla_postback_url" value="' . esc_attr($url) . '" style="width: 100%;">';
}

// Settings page display
function clickadilla_postback_settings_page() {
    ?>
    <div class="wrap">
        <h1>Clickadilla Postback Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('clickadilla_postback');
            do_settings_sections('clickadilla-postback');
            submit_button();
            ?>
        </form>
    </div>
    <?php
}

// Register custom post type for conversions
add_action('init', 'create_conversions_post_type', 5);
function create_conversions_post_type() {
    register_post_type('conversions',
        array(
            'labels'      => array(
                'name'          => __('Conversions', 'textdomain'),
                'singular_name' => __('Conversion', 'textdomain'),
            ),
            'public'      => true,
            'has_archive' => true,
            'supports'    => array('title'),
        )
    );
}

// Capture URL parameters and handle postback and data saving
add_action('template_redirect', 'clickadilla_capture_and_post');
function clickadilla_capture_and_post() {
    if (!is_admin()) {
        $url_token = isset($_GET['token']) ? sanitize_text_field($_GET['token']) : '';
        $campaign_id = isset($_GET['campaign_id']) ? sanitize_text_field($_GET['campaign_id']) : '';
        $click_id = isset($_GET['click_id']) ? sanitize_text_field($_GET['click_id']) : '';
        $payout = isset($_GET['payout']) ? sanitize_text_field($_GET['payout']) : '';
        $site = isset($_GET['site']) ? sanitize_text_field($_GET['site']) : '';
        $price = isset($_GET['price']) ? sanitize_text_field($_GET['price']) : '';
        $pm = isset($_GET['pm']) ? sanitize_text_field($_GET['pm']) : '';
        $country = isset($_GET['country']) ? sanitize_text_field($_GET['country']) : '';

        $postback_url = get_option('clickadilla_postback_url');

        if ($postback_url) {
            // Extract token from the saved postback URL
            $parsed_url = parse_url($postback_url);
            parse_str($parsed_url['query'], $query_params);
            $saved_token = isset($query_params['token']) ? $query_params['token'] : '';

            // Check if URL token matches saved token
            if ($url_token && $url_token !== $saved_token) {
                return;
            }

            // Replace placeholders in postback URL
            $postback_url = str_replace(
                array('[CAMPAIGN_ID]', '[PRICING_MODEL]', '[CLICK_ID]', '[PAYOUT]'),
                array(urlencode($campaign_id), urlencode($pm), urlencode($click_id), urlencode($payout)),
                $postback_url
            );

            // Store data for asynchronous processing
            $data = array(
                'token' => $saved_token,
                'campaign_id' => $campaign_id,
                'pm' => $pm,
                'click_id' => $click_id,
                'payout' => $payout,
                'site' => $site,
                'price' => $price,
                'country' => $country,
                'postback_url' => $postback_url
            );
            
            // Generate a unique key for the transient
            $unique_key = 'clickadilla_post_data_' . uniqid();
            set_transient($unique_key, $data, 60);

            // Trigger async request to process data
            wp_remote_post(admin_url('admin-ajax.php?action=clickadilla_process_data'), array(
                'blocking' => false,
                'body' => array(
                    'data_key' => $unique_key,
                    'nonce' => wp_create_nonce('clickadilla_nonce')
                ),
            ));
        }
    }
}

// AJAX handler to process data asynchronously
add_action('wp_ajax_clickadilla_process_data', 'clickadilla_process_data');
add_action('wp_ajax_nopriv_clickadilla_process_data', 'clickadilla_process_data');
function clickadilla_process_data() {
    // Verify nonce
    if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'clickadilla_nonce')) {
        wp_die('Invalid nonce');
    }

    if (isset($_POST['data_key'])) {
        $data_key = sanitize_text_field($_POST['data_key']);
        $data = get_transient($data_key);
        
        if ($data) {
            // Send the postback request
            $response = wp_remote_post($data['postback_url'], array(
                'method' => 'POST',
                'body' => array(
                    'token' => $data['token'],
                    'campaign_id' => $data['campaign_id'],
                    'pm' => $data['pm'],
                    'click_id' => $data['click_id'],
                    'payout' => $data['payout'],
                ),
            ));

            // Handle any errors from the request
            if (is_wp_error($response)) {
                // Log the error or handle it as needed
            } else {
                // Save data to custom post type
                $title = 'Conversion - ' . current_time('mysql');
                $post_id = wp_insert_post(array(
                    'post_title'  => $title,
                    'post_type'   => 'conversions',
                    'post_status' => 'publish',
                ));

                // Save post meta
                $meta_data = array(
                    'campaign_id' => $data['campaign_id'],
                    'click_id' => $data['click_id'],
                    'payout' => $data['payout'],
                    'site' => $data['site'],
                    'price' => $data['price'],
                    'pm' => $data['pm'],
                    'country' => $data['country'],
                );

                foreach ($meta_data as $key => $value) {
                    add_post_meta($post_id, $key, sanitize_text_field($value), true);
                }

                // Delete the transient after processing
                delete_transient($data_key);
            }
        }
    }
    wp_die();
}
