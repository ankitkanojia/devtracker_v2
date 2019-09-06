//----------------------------------
//   File          : js/pages/apps/people.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

'use strict';

$("#back").on("click",function () {
	$(".list-buttons").fadeIn('slow');
	$("#contacts").fadeIn('slow');
	$(".contact-buttons").css({ 'display': "none" });
	$("#contact-details").css({ 'display': "none" });
	$("ul.nav li.all").addClass(" active");
});

$(".all").on("click",function () {
	$(".list-buttons").fadeIn('slow');
	$("#contacts").fadeIn('slow');
	$(".contact-buttons").css({ 'display': "none" });
	$("#contact-details").css({ 'display': "none" });
	$("ul.nav li.all").addClass(" active");
});

$("#contacts > tbody > tr >td:first-child, #contacts > tbody > tr >td:nth-child(2), #contacts > tbody > tr >td:nth-child(3), #contacts > tbody > tr >td:nth-child(4)").on("click",function () {
    $(".list-buttons").css({ 'display': "none" });
	$("#contacts").css({ 'display': "none" });
	$(".contact-buttons").fadeIn('slow');
	$("#contact-details").fadeIn('slow');
	$("ul.nav li.all").removeClass(" active");
});

var navHeight = $('.main-nav').outerHeight(),
    headerHeight = $('.header').outerHeight();

$("#contact-details").css({
    "min-height": wh - navHeight - headerHeight
});
