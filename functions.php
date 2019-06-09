<?php
// ENQUEUE PARENT THEME AND CUSTOM FONTS --------------------------------------
add_action( 'wp_enqueue_scripts', 'nmikyska_child_scripts' );

function nmikyska_child_scripts() {
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' ); 
 wp_register_script( 'custom-js', get_stylesheet_directory_uri() . '/custom.js', array( 'jquery' ), '1.0', true );
 wp_enqueue_script( 'custom-js' );
}
