(function ($) {
"use strict";

// sticky menu
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 250) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});


// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('#nav').onePageNav({
	currentClass: 'current',
	scrollOffset: top_offset,
	scrollSpeed: 750,
	scrollThreshold: 0.4
});


// typed js
var typed = new Typed(".typed", {
     strings: ['Always','Lorem Ipsum', 'Dolor Sit Emet'],
    typeSpeed: 120,
    backSpeed: 120,
    backDelay: 500,
    startDelay: 1000,
    loop: true,
  });



// smooth scroll
$('.scroll-below').smoothScroll({
        offset: -90
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});



})(jQuery);