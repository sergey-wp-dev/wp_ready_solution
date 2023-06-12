<?php
// ACF simple image array display with alt
?>
<?php
	$img = get_field('img');
	if ($img && !empty( $img )):
?>
	<img class="img-fluid" src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>">
<?php endif ?>


<?php
// ACF image array display with image size
?>
<?php
	if( !empty( $img ) ) :
		$img_url = $img['sizes']['medium'];
		$img_alt = $img['alt'];
?>
	<img src="<?php echo esc_url($img_url); ?>" class="img-fluid" alt="<?php echo esc_attr($img_alt); ?>">
<?php endif; ?>