<?php

// disable pagination pages for Locations archive page
add_action( 'pre_get_posts', 'customize_archive_display' );
function customize_archive_display ( $query ) {
	if (($query->is_main_query()) && (is_post_type_archive('locations')))
		$query->set( 'posts_per_page', '999999' );
}