jQuery(document).ready(function($){

// Show/Hide button on some sections on page scroll
function isInViewport(el) {
	if (el[0]) {
		let rect = $(el)[0].getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
	return false;
}

var ageWrapper;
var fixedBlock;
var stopFixedBlock;
var stopFixedBlockTop;
var fixedBlockBottom;
var hideGetStarted;
var showGetStarted;

animationListTitle.setAttribute("id", "animation-list-title");
stopFixedTop.setAttribute("id", "stopFixedTop");
stopFixedBottom.setAttribute("id", "stopFixedBottom");
stopFixedTop2.setAttribute("id", "stopFixedTop2");
if (mainSingleContent) {
	mainSingleContent.appendChild(stopFixedTop);
	mainSingleContent.appendChild(stopFixedBottom);
	mainSingleContent.appendChild(stopFixedTop2);
	mainSingleContent.appendChild(animationListTitle);
}

fixedBlock = $('.article-toc');
ageWrapper = $('#animation-list-title');
stopFixedBlock = $('#stopFixedTop');
stopFixedBlockTop = $('#stopFixedTop2');
fixedBlockBottom = $(' #stopFixedBottom');
showGetStartedTop = $('.cta-section #show-started-button-top');
showGetStarted = $('.cta-section #show-started-button');
hideGetStarted = $('.cta-section #hide-started-button');
showStartedBanner = $('.banner-section #show-started-button');
hideStartedBanner = $('.banner-section #hide-started-button');

if (ageWrapper && isInViewport(ageWrapper)) {
	fixedBlock.addClass('fixed-block');
}

if (stopFixedBlock && isInViewport(stopFixedBlock)) {
	fixedBlock.removeClass('fixed-block');
}

if (stopFixedBlockTop && isInViewport(stopFixedBlockTop)) {
	fixedBlock.removeClass('animation-block-bottom');
}

if (fixedBlockBottom && isInViewport(fixedBlockBottom)) {
	fixedBlock.addClass('animation-block-bottom');
}

if (hideGetStarted && isInViewport(hideGetStarted)) {
	startedButton.addClass('hide');
}

if (showGetStartedTop && isInViewport(showGetStartedTop)) {
	startedButton.removeClass('hide');
}

if (showGetStarted && isInViewport(showGetStarted)) {
	startedButton.removeClass('hide');
}

if (showStartedBanner && isInViewport(showStartedBanner)) {
	startedButton.removeClass('hide');
}

if (hideStartedBanner && isInViewport(hideStartedBanner)) {
	startedButton.addClass('hide');
}
// END OF Show/Hide button on some sections on page scroll