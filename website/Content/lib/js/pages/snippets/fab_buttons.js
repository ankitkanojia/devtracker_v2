//----------------------------------
//   File          : js/pages/snippets/fab_buttons.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

'use strict';

// Material button
$('.material-button-toggle').on("click",function () {
	$(this).toggleClass('open');
	$('.option').toggleClass('scale-on');
});

// Fab buttons
$('.fab').hover(function () {
	$(this).toggleClass('active');
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
