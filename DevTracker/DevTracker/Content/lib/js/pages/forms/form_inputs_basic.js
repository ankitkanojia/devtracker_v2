//----------------------------------
//   File          : js/pages/forms/form_inputs_basic.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {
	'use strict';

	// Default file input style
	$(".file-styled-basic").uniform({
		fileButtonHtml: 'Browse'
	});

	// Default file input style with icon
	$(".file-styled-icon").uniform({
		fileButtonHtml: '<i class="icon-folder2"></i>'
	});

	// Primary file input
	$(".file-styled-primary").uniform({
		wrapperClass: 'bg-primary',
		fileButtonHtml: 'Browse'
	});

	// Primary file input
	$(".file-styled-primary-icon").uniform({
		wrapperClass: 'bg-primary',
		fileButtonHtml: '<i class="icon-folder2"></i>'
	});
});
