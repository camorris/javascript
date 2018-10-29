<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'first-wp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Y8?&SFz]{9Qz98@;@3zR_OM|9;RH.3sXTX!%BdM=Kq;#`J9fu15W00Y4=G.Y8sf&');
define('SECURE_AUTH_KEY',  'WNJU#|(9gM{!E#*Uux.FXh/Ed)X,zvzY_>9Wb{Q@Il!A@TghPPw+73&exnB>`&-=');
define('LOGGED_IN_KEY',    '^H}61](SU>s1]K-M;l|ZAZG&`(Ql_-jv+^yYVmxJKKYG{n_zPJDtlm^PUhphS:=T');
define('NONCE_KEY',        '&c4L`Vr_>wk q/BRbvorYEk?_FvD?vGdR!6P37xq@b0V[Kcz{ozQj^r4xqY>FzCa');
define('AUTH_SALT',        '4tn|, o/wQ4O;Ev(:jxK>11(=h+>dz8Iw^`L[7)/JldJ(&@.))W:a22ybB`y/2KP');
define('SECURE_AUTH_SALT', '*y*l>_/?r_A_47]oaZe=xYYzgxhH:Y&(20@%/9!$/nge#72Pi*F-PTJd85gQZ&dt');
define('LOGGED_IN_SALT',   '^+rc-F0POW.Fz|#/)N_M%Y][-5j8zfZXaTar!fWs|H)GkP4ucGXT&[mGsOWa[ihZ');
define('NONCE_SALT',       '2MlTiw!{wAev9*d5pFp@JR}Y5@z*Q1@rqdkcH2P8.=#;3yt9wHO]$&-N>fjprj;[');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
