(function($) {

	// TOC functionality for Single Posts START
	function convertToSlug(Text) {
		return Text
			.trim()
			.toLowerCase()
			.replace(/[^a-z0-9-]/gi, '-')
			.replace(/-+/g, '-')
			.replace(/^-|-$/g, '')
		;
	}

	function generateArticleToc() {
		let tocStr = '<div class="article-toc"><div class="article-toc__wrap"><ul class="toc-list">';

		let subtitles = $('.post-content h2');

		if( !subtitles.length) return;

		for(let i=0; i<subtitles.length; i++) {
			subtitles[i].setAttribute('id', convertToSlug(subtitles[i].textContent));
			tocStr += '<li><a href="#'+convertToSlug(subtitles[i].textContent)+'"> '+ subtitles[i].textContent + '</a></li>';
		}

		tocStr +='</ul></div></div>';

		$('.post-content__container').before(tocStr);
		$('.single-post__top .row').before(tocStr);
	}

	if($('body').hasClass('single-post')) {
		generateArticleToc();
	}

	// Smooth Scroll to title anchor
	// Select all TOC links with hashes
	$('.toc-list a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
		// On-page links
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			// Figure out element to scroll to
			let target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// let scrollOffset = $('.header').height() + 10;

			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top //- scrollOffset
				}, 800, function() {
					// Callback after animation
					// Must change focus!
					let $target = $(target);
					$target.trigger('focus');
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});

	function highlightNavigation() {
		// Highlight TOC item when corresponding section in view
		var $tocNavLinks = $('.toc-list a');
		var $tocSections = $($(".post-content h2").get().reverse());
		
		// console.log($tocSections);
		// map each section id to their corresponding navigation link
		var sectionIdTonavigationLink = {};
		$tocSections.each(function() {
			var id = $(this).attr('id');
			sectionIdTonavigationLink[id] = $('.toc-list a[href=\\#' + id + ']');
		});
		// get the current vertical position of the scroll bar
		var scrollPosition = $(window).scrollTop() + 400;
		// iterate the sections
		$tocSections.each(function() {
			var currentSection = $(this);
			// get the position of the section
			var sectionTop = currentSection.offset().top;
			// if the user has scrolled over the top of the section
			if (scrollPosition >= sectionTop) {
				// get the section id
				var id = currentSection.attr('id');
				// get the corresponding navigation link
				var $navigationLink = sectionIdTonavigationLink[id];
				// if the link is not active
				if (!$navigationLink.hasClass('active')) {
					// remove .active class from all the links
					$tocNavLinks.removeClass('active');
					// add .active class to the current link
					$navigationLink.addClass('active');
				}
				// we have found our section, so we return false to exit the each loop
				return false;
			}
		});
	}
	// if have TOC, fire scroll highlight on desktop
	if( $('.toc-list').length  && $(window).width() > 768 ) {
		$(window).scroll( highlightNavigation );
	}
	// TOC functionality for Single Posts END

	$(document).ready(function(){
		if ($('.header-redesign').length > 0) {
		"use strict";
			var offSetTop = 100;
			var $scrollToTopButton = $('.scrollToTop');
			//Check to see if the window is top if not then display button
			$(window).scroll(function(){
				if ($(this).scrollTop() > offSetTop) {
					$scrollToTopButton.fadeIn();
				} else {
					$scrollToTopButton.fadeOut();
				}
			});
			
			//Click event to scroll to top
			$scrollToTopButton.click(function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
			});
		}
	});

 })(jQuery);