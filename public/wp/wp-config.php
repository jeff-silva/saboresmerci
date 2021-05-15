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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'saboresmerci' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '{Bva*pX:eTIzA(a3xA)oRm^i/82Q~)dP^-lxdx.^6.T[s;ZXD7i}H;#h7jWa#Q8l' );
define( 'SECURE_AUTH_KEY',  'vj@aw@460yE1C<<2i`X;MAYI[*#L|xQsPdH`^,*ZC27TyV1EMwbXTe};Ti*WG0#(' );
define( 'LOGGED_IN_KEY',    '4sjQLQ3@`J/,dM@#ts;[A<W}VQGDzw$Y}-n0.@N(C80yvximtYQbKCV= ?wr;S|+' );
define( 'NONCE_KEY',        'y%W~gzP|f=lB0pu9`&7e7 c,|kQ2K//DSI(f %>cEa9rf(RJwlEM/_>#^S?z_b~Z' );
define( 'AUTH_SALT',        'q=f#.x6H0DG7s:7UuE&n^<IvU);F_VkJ;[=*?~sMdD>+~w[[yzS*p%@}p`{>4bg~' );
define( 'SECURE_AUTH_SALT', 'D;c_ ^[olFadd4=I%U45BTHD<7tmC@aS$J^}TpC|}6QT;nTwU^Z;faJ3]d+,>:}[' );
define( 'LOGGED_IN_SALT',   '1BaPb9o,jJVi/R*;Km+mgwf1Pz7rsz5Vz=6w*F]bSV19C[?e+K0XUULJ5),LrQtH' );
define( 'NONCE_SALT',       'DA-`z,5xE/Q/Nr:*zF]{8c#`xHBA=mJDA)*R&aUR*!5p9NDu`^LBl.o6[i(UqUR6' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/** Add any custom values after this line. */
define('WP_USE_EXT_MYSQL', false);


/**
 * Custom Values must appear above this line.
 *
 * That's all, stop editing! Happy publishing.
 */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
