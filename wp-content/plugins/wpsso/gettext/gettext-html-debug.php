<?php die( 'These aren\'t the droids you\'re looking for.' );
// 
// Extract of translatable strings from html/debug.html.
// 
_x( 'Table of Contents', 'html header', 'wpsso' );
_x( 'The Query Monitor Plugin', 'html header', 'wpsso' );
_x( 'JavaScript and jQuery Errors', 'html header', 'wpsso' );
_x( 'HTTP Error Code 5xx', 'html header', 'wpsso' );
_x( 'Performance or Layout Issues', 'html header', 'wpsso' );
_x( 'WordPress and PHP Error Messages', 'html header', 'wpsso' );
_x( 'HTML Debug Messages', 'html header', 'wpsso' );
_x( 'The WPSSO Core plugin and its add-ons follow all recommended WordPress coding practices, but on occasion it may break <em>other</em> themes or plugins that do not. This troubleshooting guide will help you identify and mitigate some common issues.', 'html paragraph', 'wpsso' );
_x( 'If you are having issues with your WordPress site, related to WPSSO or not, and haven\'t used the <a href="https://wordpress.org/plugins/query-monitor/">Query Monitor plugin</a> yet, we recommend that you install and activate this very useful plugin. The Query Monitor plugin will report any PHP or database query issues, both on the front and back-end. It may not catch all PHP errors (like ajax queries or scheduled tasks, for example), so you may also want to also <a href="#php-error-messages">define the WordPress WP_DEBUG constant as suggested below</a> to enable the WordPress error log (which is not enabled by default).', 'html paragraph', 'wpsso' );
_x( 'Since the advent of page builders and the new block editor in WordPress v5, JavaScript and jQuery errors have become more common and are not easily diagnosed using standard WordPress debugging methods (like defining the WordPress WP_DEBUG constant and using the Query Monitor plugin).', 'html paragraph', 'wpsso' );
_x( 'To view JavaScript and jQuery related errors, you must enable your web browser\'s console, and how you do that depends on the web browser you use (<a href="https://www.google.com/search?q=open+the+browser+javascript+console">see this Google search result for more information on that</a>). It\'s definitely worth enabling your web browser\'s console to make sure there are no JavaScript and jQuery errors. If there are, you can select the error and <a href="https://surniaulula.com/support/">copy-paste the error text into a new support ticket</a> (<em>please do not submit screenshots as text in an image is not text</em>). ;-) JavaScript and jQuery errors are probably not caused by WPSSO Core or its add-ons, but we\'re happy to help you diagnose the issue and propose a solution.', 'html paragraph', 'wpsso' );
_x( 'A web server may display an HTTP 5xx error page (500, 502, etc.) with a generic error message. This error message is generic on purpose - the actual details of the error can be found in the web server\'s error log. The most common cause of an HTTP 5xx error are from lack of available memory when PHP is executing - for example, when creating thumbnails from large images, executing a bloated plugin, executing a badly coded recursive filter, etc. If you are seeing an HTTP 5xx error message, you can get the error details from the web server\'s error log. This will tell you what caused the HTTP 5xx error code.', 'html paragraph', 'wpsso' );
_x( 'Some older versions of PHP are known to have bugs in their ImageMagick library, or PHP may have timed-out when trying to create several thumbnail images in a row (<a href="https://wpsso.com/docs/plugins/wpsso/faqs/how-can-i-fix-an-http-error-when-uploading-images/">see this FAQ for details</a>), or PHP may have run out of memory (<a href="https://wpsso.com/docs/plugins/wpsso/faqs/how-can-i-fix-a-php-fatal-out-of-memory-error/">see this FAQ for details</a>), or WPSSO may be triggering a bug in your theme or another plugin (try disabling WPSSO\'s use of the WordPress content filter as suggested below).', 'html paragraph', 'wpsso' );
_x( 'Related FAQ: <a href="https://wpsso.com/docs/plugins/wpsso/faqs/why-are-some-html-elements-missing-misaligned-different/">Why are some HTML elements missing or misaligned?</a>', 'html paragraph', 'wpsso' );
_x( 'WordPress allows themes and plugins to hook hundreds of different filters to manage the Post / Page content (some of these filters are called by WordPress to expand shortcodes, for example). WordPress generally calls a filter (like \'the_content\') once to expand text for a given post within the loop or a single webpage. As a consequence, some authors mistakenly assume that a filter they have created will only be executed once for a given post, and only within the webpage body or specific area. WordPress filters are available to any theme or plugin that needs to expand text (title, excerpt, content, etc.), and in any context (header, loop, widget, admin, etc.). WPSSO uses \'the_content\' filter to locate media elements within the content and to provide complete and accurate description meta tags.', 'html paragraph', 'wpsso' );
_x( 'See the "<a href="https://make.wordpress.org/plugins/2017/10/03/is-your-filter-going-to-break-the-layout/">Is your filter going to break the layout?</a>" post on the Make WordPress Plugins blog for additional information on the use (and common misuse) of \'the_content\' filter by developers.', 'html paragraph', 'wpsso' );
_x( 'Under the <em>SSO &gt; Advanced Settings &gt; Plugin Settings &gt; Integration</em> tab, you can uncheck the "Use Filtered Content" and "Use Filtered Excerpt" options to see if your problem is related to a WordPress filter hook. If disabling these options fixes the problem, <strong>you should determine which theme or plugin is at fault and report the issue with to theme or plugin authors</strong>. Using the WordPress <code>apply_filters()</code> function should not create timeout or layout issues.', 'html paragraph', 'wpsso' );
_x( 'If you disable the content filter, <em>and your Post / Page content relies on shortcodes for its text</em>, then you may find that WPSSO cannot create accurate descriptions for its meta tags and Schema markup. WPSSO looks for custom descriptions and excerpts before falling back to using the content text. If the the "Use Filtered Content" option is disabled, and the content relies on shortcodes for its text, then you may have to enter custom descriptions and excerpts for those Posts / Pages.', 'html paragraph', 'wpsso' );
_x( 'Enabling the PHP and WordPress debug log (aka WP_DEBUG) is a common practice and very useful. Your theme and/or badly coded plugins may be generating hundreds of PHP and WordPress errors, and you would never know unless you enabled the WordPress debug log. To enable the WordPress debug log, without displaying those errors to your visitors, add the following to your <code>wp-config.php</code> file. <em>Make sure you do not already have a <code>define()</code> for <code>WP_DEBUG</code>, <code>WP_DEBUG_LOG</code>, or <code>WP_DEBUG_DISPLAY</code> in your <code>wp-config.php</code> file</em> (as PHP constants can only be defined once). If you do, you can safely remove them and replace those lines with the following:', 'html paragraph', 'wpsso' );
_x( 'You can turn on/off the WordPress debug log by changing <code>WP_DEBUG</code>\'s value from <code>true</code> to <code>false</code>.', 'html paragraph', 'wpsso' );
_x( 'The default location of the <code>debug.log</code> file can be changed by specifying a file path for the <code>WP_DEBUG_LOG</code> value.', 'html paragraph', 'wpsso' );
_x( 'Any WordPress or PHP error messages will be saved to the <code>wordpress/wp-content/debug.log</code> file by default. If you have several badly coded and/or old themes and plugins that generate a lot of errors, make sure you clear the contents / rotate this file regularly, as it could grow large enough to fill a filesystem. In all cases, you should endeavour to resolve all warnings and errors in the debug.log file.', 'html paragraph', 'wpsso' );
_x( 'In some instances, WPSSO support may request that you enable the "Add HTML Debug Messages" and "Disable Cache for Debugging" options under the <em>SSO &gt; Advanced Settings &gt; Plugin Settings &gt; Plugin Admin</em> tab to investigate an issue specific to your site (ie. that cannot be reproduced on a test site). After enabling the "Add HTML Debug Messages" and "Disable Cache for Debugging" options, the WPSSO Core plugin and its add-ons will include debug messages as HTML comments in your webpages. If you use an optimization plugin or service to remove HTML comments from your webpages (a feature that can also be part of a caching plugin or service), you will need to disabled that feature. Once WPSSO support has investigated the issue, you can disable the "Add HTML Debug Messages" and "Disable Cache for Debugging" options and re-enable any HTML optimization features.', 'html paragraph', 'wpsso' );
_x( '<a href="#query-monitor-plugin">The Query Monitor Plugin</a>', 'html list item', 'wpsso' );
_x( '<a href="#javascript-and-jquery-errors">JavaScript and jQuery Errors</a>', 'html list item', 'wpsso' );
_x( '<a href="#http-error-code-5xx">HTTP Error Code 5xx</a>', 'html list item', 'wpsso' );
_x( '<a href="#performance-or-layout-issues">Performance or Layout Issues</a>', 'html list item', 'wpsso' );
_x( '<a href="#php-error-messages">WordPress and PHP Error Messages</a>', 'html list item', 'wpsso' );
_x( '<a href="#html-debug-messages">HTML Debug Messages</a>', 'html list item', 'wpsso' );