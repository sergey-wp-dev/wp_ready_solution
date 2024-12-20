<?php
	$img = '';
	if ( has_post_thumbnail() ) :
		$thumbnail_id = get_post_thumbnail_id();
		$medium_img = wp_get_attachment_image_src( $thumbnail_id, 'medium' );
		$large_img = wp_get_attachment_image_src( $thumbnail_id, 'large' );
		$img = '<img 
			class="search-course-thumb" 
			src="' . esc_url( $medium_img[0] ) . '" 
			srcset="' . esc_url( $large_img[0] ) . ' 768w, ' . esc_url( $medium_img[0] ) . ' 576w" 
			sizes="(min-width: 576px) and (max-width: 768px) 768px, (max-width: 576px) 100vw" 
			alt="' . esc_attr( get_post_field( 'post_title') ) . '">';
		endif;
		if ( '' != $img ) :
?>
<div class="">
	<a href="<?php the_permalink() ?>" title="<?php echo esc_attr( get_post_field( 'post_title') ); ?>">
		<?php echo $img; ?>
	</a>
</div>
<?php endif; ?>