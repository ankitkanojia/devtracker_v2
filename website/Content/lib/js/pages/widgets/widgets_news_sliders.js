//----------------------------------
//   File          : js/pages/widgets/widgets_news_sliders.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. News slider 1
// 2. News slider 2
// 3. News slider 3


'use strict';

// ---------------------------------
// 1. News slider 1
// ---------------------------------
$("#news-slider1").owlCarousel({
	items:3,
	itemsDesktop:[1199,3],
	itemsDesktopSmall:[1000,2],
	itemsMobile:[600,1],
	pagination:false,
	navigationText:false,
	autoPlay:true
});


// ---------------------------------
// 2. News slider 2
// ---------------------------------
$("#news-slider2").owlCarousel({
	items:3,
	itemsDesktop:[1199,3],
	itemsDesktopSmall:[1000,2],
	itemsMobile:[600,1],
	pagination:false,
	navigationText:false,
	autoPlay:true
});


// ---------------------------------
// 3. News slider 3
// ---------------------------------
$("#news-slider3").owlCarousel({
        items : 3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],
        itemsMobile: [600, 1],
        navigation : false,
        pagination:false,
        autoPlay : true
    });
