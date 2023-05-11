

<!-- ACF Post Object (object) inside Repeater -->

<?php if(have_rows('services')) : ?>
<section class="">
	<div class="container">
		<?php while( have_rows('services') ) : the_row(); ?>
			<div class="row">
				<?php
					$services_posts = get_sub_field('services_list');
					if( $services_posts ):
						foreach( $services_posts as $service_post ):
							$permalink = get_permalink( $service_post->ID );
							$title = get_the_title( $service_post->ID );
							$featured_image = get_field( 'hero_image', $service_post->ID );
				?>
				<div class="col-md-3">
					<div class="flex-card">
						<?php
							if (!empty($featured_image)):
								$featured_alt = $featured_image['alt'];
								$size = 'related-image';
								$featured_thumb = $featured_image['sizes'][ $size ];
						?>
							<img class="flex-card__img" src="<?php echo esc_url($featured_thumb); ?>" alt="<?php echo esc_attr($featured_alt); ?>" />
						<?php endif ?>
						<div class="flex-card__inner d-flex flex-column">
							<h4 class="flex-card__title"><?php echo esc_html( $title ); ?></h4>
							<p class="flex-card__text"><?php echo wp_trim_words(get_the_content('', '', $service_post->ID), 9, ''); ?></p>
							<div class="mt-auto">
								<a href="<?php echo esc_url( $permalink ); ?>" class="button button--small button--blue">Learn More</a>
							</div>
						</div>
					</div>
				</div>
				<?php
						endforeach;
					endif;
				?>
			</div>
		<?php endwhile; ?>
	</div>
</section>
<?php endif; ?>


<style>
/*.flex-card{
	margin-bottom: 1.25rem;
	// height: 100%;
	height: calc(100% - 180px); // -180px - minus sum of image height + margin bottom
	&__inner{
		min-height: 100%;
		padding: 1.25rem;
		background-color: #F6F8F9;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	&__img, img{
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		max-height: 160px;
		object-fit: cover;
		width: 100%;
	}
	&__title{
		margin-bottom: 0.625rem;
		font-size: 1.25rem;
	}
	&__text{
		margin-bottom: 0.625rem;
	}
	.button{
		line-height: 1;
	}
}*/
</style>