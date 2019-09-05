//----------------------------------
//   File          : js/pages/animations.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {
	'use strict';
	$("body").on("click", ".animation", function (e) {
		var animation = $(this).data("animation");
		$(this).parents(".panel").addClass("animated " + animation).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
			$(this).removeClass("animated " + animation);
		});
		e.preventDefault();
	});
});
