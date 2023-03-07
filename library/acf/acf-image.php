<?php
// ACF simple image array display with alt
?>
<?php
	$img = get_field('img');
	if ($img && !empty( $img )):
?>
	<img class="img-fluid" src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>">
<?php endif ?>