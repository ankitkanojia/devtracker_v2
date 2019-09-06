//----------------------------------
//   File          : js/pages/extensions/extension_owl_carousel.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Single image slider
// 2. Multiple images
// 3. Custom Options with Events
// 4. Lazy load
// 5. Single image with auto height


'use strict';

// ---------------------------------
// 1. Single image slider
// ---------------------------------
$("#single-image-slider").owlCarousel({
	navigation : true,
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem : true
});


// ---------------------------------
// 2. Multiple images
// ---------------------------------
$("#multiple-images").owlCarousel({
	autoPlay: 3000,
	items : 4,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3]
});


// ---------------------------------
// 3. Custom Options with Events
// ---------------------------------
var owl = $("#custom-options");
owl.owlCarousel({
	items : 10,
	itemsDesktop : [1000,5],
	itemsDesktopSmall : [900,3],
	itemsTablet: [600,2],
	itemsMobile : false
});

$(".next").on("click",function(){
	owl.trigger('owl.next');
})
$(".prev").on("click",function(){
	owl.trigger('owl.prev');
})
$(".play").on("click",function(){
	owl.trigger('owl.play',1000);
})
$(".stop").on("click",function(){
	owl.trigger('owl.stop');
})


// ---------------------------------
// 4. Lazy load
// ---------------------------------
$("#lazy-load").owlCarousel({
	items : 4,
	lazyLoad : true,
	navigation : false
});


// ---------------------------------
// 5. Single image with auto height
// ---------------------------------
$("#single-item-auto-height").owlCarousel({
	autoPlay : 3000,
	stopOnHover : false,
	navigation:false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	autoHeight : true,
	transitionStyle:"fade"
});
