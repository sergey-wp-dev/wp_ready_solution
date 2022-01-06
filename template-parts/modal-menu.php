<?php
/**
 * Displays Mobile modal menu
 *
 * @package Brighttax
 */

?>
<div class="modal-menu d-flex flex-column" aria-hidden="true">
	<div class="container">
		<?php
			wp_nav_menu(
				array(
					'theme_location'  => 'primary-menu',
					'container'       => false,
					'show_toggles'    => true,
					'menu_class'      => 'primary-menu mobile-nav d-flex flex-column',
					'menu_id'         => 'mobile-nav',
					'depth'           => 3,
					'walker'          => new Brighttax_Walker_Nav_Menu(),
				)
			);
		?>
	</div>
</div> <!-- modal-menu end-->
