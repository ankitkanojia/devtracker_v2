//----------------------------------
//   File          : js/pages/auth/authentication.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(".styled, .multiselect-container input").uniform({
	radioClass: 'choice'
});

$('.toggle').click(function(){

	$(this).children('i').toggleClass('icon-user-lock');

	$('.form').animate({
		height: "toggle",
		'padding-top': 'toggle',
		'padding-bottom': 'toggle',
		opacity: "toggle"
	}, "slow");
});
