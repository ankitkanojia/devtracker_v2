//----------------------------------
//   File          : js/pages/forms/form_wizard.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Basic form steps wizard
// 2. Add steps dynamically
// 3. AJAX form submit


$(function() {
	'use strict';


	// ---------------------------------
	// 1. Basic form steps wizard
	// ---------------------------------
	$(".form-basic").formwizard({
		disableUIStyles: true,
		disableInputFields: false,
		inDuration: 150,
		outDuration: 150
	});

	// Cancel the post
	$(".form-post-cancel").formwizard({
		disableUIStyles: true,
		disableInputFields: false,
		formPluginEnabled: true,
		inDuration: 150,
		outDuration: 150,
		formOptions: {
			success: function(data){
				swal({title: "Congratulations!", text: "You are registered now!", type: "success", timer: 2000, confirmButtonColor: "#43ABDB"})
			},
			dataType: 'json',
			resetForm: true,
			beforeSubmit: function(){
				return confirm("This is the beforeSubmit callback, do you want to submit?");
			},
			beforeSend: function(){
				return confirm("This is the beforeSend callback, do you want to submit?");
			},
			beforeSerialize: function(){
				return confirm("This is the beforeSerialize callback, do you want to submit?");
			}
		}
	});


	// ---------------------------------
	// 2. Add steps dynamically
	// ---------------------------------
	$(".form-add-steps").formwizard({
		disableUIStyles: true,
		disableInputFields: false,
		inDuration: 150,
		outDuration: 150
	});

	// Append step on button click
	$("#add-step").on('click', function(){
		$(".step-wrapper").append($(".extra-steps .step:first"));
		$(".form-add-steps").formwizard("update_steps");
		return false;
	});

	// Select2 selects
	$('.select').select2();

	// Simple select without search
	$('.select-simple').select2({
		minimumResultsForSearch: Infinity
	});

	// Styled checkboxes and radios
	$('.styled').uniform({
		radioClass: 'choice'
	});

	// Styled file input
	$('.file-styled-basic').uniform({
		fileButtonHtml: 'Browse'
	});

	$(".form-basic, .form-validation, .form-add-steps, .form-ajax").on("step_shown", function(event, data){
		$.uniform.update();
	});


	// ---------------------------------
	// 3. AJAX form submit
	// ---------------------------------
	$(".form-ajax").formwizard({
		disableUIStyles: true,
		formPluginEnabled: true,
		disableInputFields: false,
		inDuration: 150,
		outDuration: 150,
		formOptions :{
			success: function(data){
				swal({title: "Congratulations!", text: "You are registered now!", type: "success", timer: 2000, confirmButtonColor: "#43ABDB"})
			},
			beforeSubmit: function(data){
				$("#ajax-data").css({borderTop: '1px solid #ddd', padding: 15}).html("<span class='text-semibold'>Data sent to the server:</span> " + $.param(data));
			},
			dataType: 'json',
			resetForm: true
		}
	});
});
