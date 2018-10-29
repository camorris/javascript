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
define('DB_NAME', 'chase');

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
define('AUTH_KEY',         'vyF9w@h1cZ!*>;FPYec[6of?ReklzAbNS%bFz*-Tl )#F|!5(=ofm7g`T+1HY51F');
define('SECURE_AUTH_KEY',  'pN>4T/[&>][GfUw#}LWcmtIrMxM.6pUTd|14ckwT,,,HQ$Fj.HB3o]rdHBB)bdBw');
define('LOGGED_IN_KEY',    'PCxdfpF 0CiF0VkaP8RJLW=<w-DVFG2+pmeVnDYD&t`4n/| *q87;0TVY@`^weGD');
define('NONCE_KEY',        'd=zR_RZKG-]~~kSL*pQHocQ{[0m 0bhkMe<m1UN[TK8?X;xeI/ufY%)W{8^-il_&');
define('AUTH_SALT',        'i0B0KwTP>&t*cRJmTA^Ntrbdk3W.DD^Y~kBgL=?%;rYMNfjD _U9RK(F]>#u<j8S');
define('SECURE_AUTH_SALT', 'a {#g%N~TuPeNCp@|U*OpWkhey0-=?SW5(;[*@ae,UZhb&3^$&TLtOy{EpO?]9cn');
define('LOGGED_IN_SALT',   'E*f*41BW3#*!}b/fl+OkSj4$ud=iA]ye#HqDql(f3!L99jN7YQ143CB4g`U=V;WS');
define('NONCE_SALT',       '6-eVZviesD?$ygCBSYjTxLQSA?/H.X}+BRnu/1f%yCKi-Caiy!,?%8]O;(,yRo3C');

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
