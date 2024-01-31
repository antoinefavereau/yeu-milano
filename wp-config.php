<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
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
define('DB_NAME', 'yeu-milano');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', 'Favere45.,');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The database collate type. Don't change this if in doubt. */
// define('DB_COLLATE', '');

// /** ftp connection */
// define('FTP_HOST', 'antoinefavereau.fr');
// define('FTP_USER', 'antoinefavereau');
// define('FTP_PASS', 'Favere45.,');
// define('FTP_SSL', true);

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
define('AUTH_KEY',         'zk }?6VyT%,5?MtbN7MlzRg5h<v{+L``n$BH+V&w&ndtnZ^|-*z>bP]xY v_@iL@');
define('SECURE_AUTH_KEY',  ']|:>*Z&WP8jwLwwq6|&oBmyov<eLebAi@A5*V@(8/T~6e vP yWn0x+Mhq|2%]-F');
define('LOGGED_IN_KEY',    '-*j%D`~,Ds{n?FU)EQ/X #p(il|Y*Sk1eDkZ49[xg4?H~ZQH^+VdaB~.0mcE|]^^');
define('NONCE_KEY',        '8(`<q#7xUrr!Qcq|?*,lP3`Nr.<S3>G:0]j68y&= -{]B3(QdyiYykuYTI|]vBzw');
define('AUTH_SALT',        '-kxdFcjKKsP!+YF[~=t=#^.*,B*O9XZ-JsEg-e3o*B%Su4BzA%:{;CA2bHv(6^~b');
define('SECURE_AUTH_SALT', '++epe_D-YjJgE[N#0/#6np=;VNa+X>8&O+:|$[Qm;J?22tm[90.!+Mh@9 =Q~+xg');
define('LOGGED_IN_SALT',   '. ?O?M|ucRM!#~+vlc`q G2rwr)C|-|<wj7OIjD}+`#DUjh8[W$-{gOz[r 6Gfr8');
define('NONCE_SALT',       'C7% f-lz(-zqo{29,%_,+nbg?QXIPgZxVY.&Ii|=-n$mQOE-koW5d-D@I|=86F)W');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define('WP_DEBUG', true);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
