<?php
define( 'WP_CACHE', true );








































/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'yzwigndt_sincehencestore' );

/** Database username */
define( 'DB_USER', 'yzwigndt_sincehencestore' );

/** Database password */
define( 'DB_PASSWORD', 'y@)6p]IS9Zad][92' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9jxmm2z2rqqa3czliz92ptsdqlejw0go6lfcidmlz6p70pencyvmcsbxncfgtgq7' );
define( 'SECURE_AUTH_KEY',  'w2sc3cnfoh4iconjk5bk0uunsonpyrd2k3970l49zf7rbzqma2r28o0fkvqv4fem' );
define( 'LOGGED_IN_KEY',    'p3rsm0bnfyzvpbefhlxz7mgdzxym3nz2lr6yiietpcvzbxp36owvniut9aectdpd' );
define( 'NONCE_KEY',        'ylepxtvaeybf95rakvezvjf2vn7k2uzjcwzw8nsknqzuj5i2hj6jmmled96v357o' );
define( 'AUTH_SALT',        'aldynau88wxxg4ype3kp90aqfbh19gblyzjyleuxdzmfajrfvxw5ish1wscctekb' );
define( 'SECURE_AUTH_SALT', 'qepyjba174tqbgscyx2kzvpz4cy8iuj3steptjctmskernpjslmvicaexjyjj6rt' );
define( 'LOGGED_IN_SALT',   'xlzbiivt75pi5rys0uyvk90oj4qbyu0khiinetelnt82bhjnrsytpap7a4hbvqjm' );
define( 'NONCE_SALT',       'mjrzzmoz4vytch3x7f4x7ceafbr5rvg5rndlvlvwbgpbxmysaiuqukrnxwgmqlxh' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'store_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
