//----------------------------------
//   File          : js/pages/widgets/widgets_testimonials.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Testimonial slider 1
// 2. Testimonial slider 2
// 3. Testimonial slider 3
// 4. Testimonial slider 4
// 5. Testimonial slider 5
// 6. Testimonial slider 6


'use strict';

// ---------------------------------
// 1. Testimonial slider 1
// ---------------------------------
$("#testimonial-slider").owlCarousel({
	items:1,
	itemsDesktop:[1000,1],
	itemsDesktopSmall:[979,1],
	itemsTablet:[768,1],
	pagination: true,
	slideSpeed:1000,
	singleItem:true,
	transitionStyle:"fadeUp",
	autoPlay:true
});


// ---------------------------------
// 2. Testimonial slider 2
// ---------------------------------
$("#testimonial-slider2").owlCarousel({
	items:1,
	itemsDesktop:[1000,1],
	itemsDesktopSmall:[979,1],
	itemsTablet:[767,1],
	pagination:false,
	transitionStyle:"fade",
	navigation:true,
	navigationText:["",""],
	autoPlay:true
});


// ---------------------------------
// 3. Testimonial slider 3
// ---------------------------------
$("#testimonial-slider3").owlCarousel({
	items:1,
	itemsDesktop:[1000,1],
	itemsDesktopSmall:[979,1],
	itemsTablet:[768,1],
	pagination: true,
	slideSpeed:1000,
	transitionStyle:"fadeUp",
	autoPlay:false
});


// ---------------------------------
// 4. Testimonial slider 4
// ---------------------------------
$("#testimonial-slider4").owlCarousel({
	items:1,
	itemsDesktop:[1000,1],
	itemsDesktopSmall:[979,1],
	itemsTablet:[768,1],
	itemsMobile:[550,1],
	pagination: false,
	navigation:true,
	navigationText:["",""],
	slideSpeed:1000,
	transitionStyle:"goDown",
	autoPlay:true
});


// ---------------------------------
// 5. Testimonial slider 5
// ---------------------------------
$("#testimonial-slider5").owlCarousel({
	items:1,
	itemsDesktop:[1199,1],
	itemsDesktopSmall:[979,1],
	itemsTablet:[768,1],
	pagination: false,
	navigation:true,
	navigationText:["",""],
	autoPlay:true
});


// ---------------------------------
// 6. Testimonial slider 6
// ---------------------------------
$("#testimonial-slider6").owlCarousel({
    items:1,
	itemsDesktop:[1000,1],
	itemsDesktopSmall:[990,1],
	itemsTablet:[767,1],
	pagination:true,
	navigation:false,
	autoPlay:true
});
