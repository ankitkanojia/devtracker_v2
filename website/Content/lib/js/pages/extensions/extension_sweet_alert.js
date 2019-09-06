//----------------------------------
//   File          : js/pages/extensions/extension_pnotify.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Basic example
// 2. Title with a text under
// 3. Success message!
// 4. Warning message, with a function attached to the "Confirm" button
// 5. By passing a parameter, you can execute something else for "Cancel"
// 6. Message with a custom icon
// 7. Replacement for the "prompt" function
// 8. With a loader (AJAX requests)
// 9. Alert with html code
// 10. Detecting External Link Clicks
// 11. Contextual examples

'use strict';

// ---------------------------------
// 1. Basic example
// ---------------------------------
function swal_basic(){
	swal("Here's a message!");
};


// ---------------------------------
// 2. Title with a text under
// ---------------------------------
function swal_subheading(){
	swal("Here's a message!", "It's pretty, isn't it?")
};


// ---------------------------------
// 3. Success message!
// ---------------------------------
function swal_success_message(){
	swal("Good job!", "You clicked the button!", "success");
};


// ---------------------------------
// 4. Warning message, with a function attached to the "Confirm" button
// ---------------------------------
function swal_warning_message(){
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this imaginary file!",
		type: "warning",
		showCancelButton: true,
		confirmButtonClass: 'btn-danger',
		confirmButtonText: 'Yes, delete it!',
		closeOnConfirm: false,
	},
	function(){
	    swal("Deleted!", "Your imaginary file has been deleted!", "success");
	});
};


// ---------------------------------
// 5. By passing a parameter, you can execute something else for "Cancel"
// ---------------------------------
function swal_cancel(){
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this imaginary file!",
		type: "warning",
		showCancelButton: true,
		confirmButtonClass: 'btn-danger',
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: "No, cancel please!",
		closeOnConfirm: false,
		closeOnCancel: false
	},
	function(isConfirm){
		if (isConfirm){
			swal("Deleted!", "Your imaginary file has been deleted!", "success");
		} else {
			swal("Cancelled", "Your imaginary file is safe :)", "error");
		}
	});
};


// ---------------------------------
// 6. Message with a custom icon
// ---------------------------------
function swal_custom_icon(){
	swal({
		title: "Sweet!",
		text: "Here's a custom image.",
		imageUrl: 'img/assets/thumbs-up-1.png'
	});
};


// ---------------------------------
// 7. Replacement for the "prompt" function
// ---------------------------------
function swal_prompt(){
	swal({
		title: "An input!",
		text: "Write something interesting:",
		type: "input",
		showCancelButton: true,
		closeOnConfirm: false,
		animation: "slide-from-top",
		inputPlaceholder: "Write something"
	},
	function (inputValue) {
		if (inputValue === false) return false;
		if (inputValue === "") {
			swal.showInputError("You need to write something!");
			return false
		}
		swal("Nice!", "You wrote: " + inputValue, "success");
	});
};


// ---------------------------------
// 8. With a loader (AJAX requests)
// ---------------------------------
function swal_ajax(){
	 swal({
		title: "Ajax request example",
		text: "Submit to run ajax request",
		type: "info",
		showCancelButton: true,
		closeOnConfirm: false,
		showLoaderOnConfirm: true
	},
	function () {
		setTimeout(function () {
			swal("Ajax request finished!");
		}, 4000);
	});
};


// ---------------------------------
// 9. Alert with html code
// ---------------------------------
function swal_html(){
	swal({
		title: '<h2>This is Using HTML!</h2>',
		text: 'This is a <a href="#">link</a>',
		html: true
	});
};


// ---------------------------------
// 10. Detecting External Link Clicks
// ---------------------------------
function swal_external(){
	var getLink = $(this).attr('href');
	swal({
		title: 'You&#39;re Leaving This Site!',
		text: 'This is a link to an external site. Click OK to continue to the content (' + getLink + ').',
		html: true,
		showCancelButton: true,
	},
	function(){
		setTimeout(function () {
			window.open(getLink,'_blank')
		}, 4000);
	});
	return false;
};


// ---------------------------------
// 11. Contextual examples
// ---------------------------------

// Primary
function swal_primary(){
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this imaginary file!",
		type: "info",
		showCancelButton: true,
		confirmButtonClass: 'btn-primary',
		confirmButtonText: 'Primary!'
	});
};

// Info
function swal_info(){
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this imaginary file!",
		type: "info",
		showCancelButton: true,
		confirmButtonClass: 'btn-info',
		confirmButtonText: 'Info!'
	});
};

// Success
function swal_success(){
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this imaginary file!",
		type: "success",
		showCancelButton: true,
		confirmButtonClass: 'btn-success',
		confirmButtonText: 'Success!'
	});
};

// Warning
function swal_warning(){
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this imaginary file!",
		type: "warning",
		showCancelButton: true,
		confirmButtonClass: 'btn-warning',
		confirmButtonText: 'Warning!'
	});
};

// Danger
function swal_danger(){
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this imaginary file!",
		type: "error",
		showCancelButton: true,
		confirmButtonClass: 'btn-danger',
		confirmButtonText: 'Danger!'
	});
};
