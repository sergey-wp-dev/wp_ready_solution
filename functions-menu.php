<?php

// display a different menu on a different page
add_filter( 'wp_nav_menu_args', 'my_wp_nav_menu_args' );
function my_wp_nav_menu_args( $args = '' ) {
	if( is_page('5918') ) {
		$args['menu'] = 43;
	} else {
		$args['menu'] = 17;
	}
	return $args;
}