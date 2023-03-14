<?php

// shortcode get term name
function service_type_name($attributes, $content = null){
	$attributes = shortcode_atts(
		array(
			'attr' => FALSE
		), $attributes);
	$output = '';
	global $post;
	$term_list = wp_get_post_terms( $post->ID, 'location_services' ); 
	foreach( $term_list as $term_id ) {
		$output .= $term_id->name;
	}
	return $output;
}
add_shortcode( 'service_type_name', 'service_type_name' );