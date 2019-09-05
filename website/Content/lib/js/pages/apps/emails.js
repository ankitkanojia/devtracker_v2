//----------------------------------
//   File          : js/pages/apps/emails.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

'use strict';

tinymce.init({
  selector: '.basic-editor',
  height: 140,
  menubar: false,
  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  content_css: [
	'//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
	'//www.tinymce.com/css/codepen.min.css'
  ]
});

$("#inbox").on("click",function () {
	$(".list-buttons").fadeIn('slow');
	$(".emails-list").fadeIn('slow');
	$(".new-buttons").css({ 'display': "none" });
	$(".new-email").css({ 'display': "none" });
	$(".email-buttons").css({ 'display': "none" });
	$(".email").css({ 'display': "none" });
	$("ul.nav li.inbox").addClass(" active");
});

$("li.media .media-link").on("click",function () {
	$(".list-buttons").css({ 'display': "none" });
	$(".emails-list").css({ 'display': "none" });
	$(".new-buttons").css({ 'display': "none" });
	$(".new-email").css({ 'display': "none" });
	$(".email-buttons").fadeIn('slow');
	$(".email").fadeIn('slow');
	$("ul.nav li.inbox").removeClass(" active");
});

$(".back").on("click",function () {
	$(".list-buttons").fadeIn('slow');
	$(".emails-list").fadeIn('slow');
	$(".new-buttons").css({ 'display': "none" });
	$(".new-email").css({ 'display': "none" });
	$(".email-buttons").css({ 'display': "none" });
	$(".email").css({ 'display': "none" });
	$("ul.nav li.inbox").addClass(" active");
});

$("#compose").on("click",function () {
	$(".list-buttons").css({ 'display': "none" });
	$(".emails-list").css({ 'display': "none" });
	$(".new-buttons").fadeIn('slow');
	$(".new-email").fadeIn('slow');
	$(".email-buttons").css({ 'display': "none" });
	$(".email").css({ 'display': "none" });
	$("ul.nav li.inbox").removeClass(" active");
});
