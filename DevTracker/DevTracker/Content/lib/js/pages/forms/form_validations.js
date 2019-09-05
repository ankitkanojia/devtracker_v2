//----------------------------------
//   File          : js/pages/forms/form_validations.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------


$(function() {
	'use strict';

	var validator = $(".form-validate").validate({
        ignore: 'input[type=hidden], .select2-search__field',
        errorClass: 'validation-error',
        successClass: 'validation-success',
        highlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        },

        errorPlacement: function(error, element) {

            if (element.parents('div').hasClass("checker") || element.parents('div').hasClass("choice") || element.parent().hasClass('bootstrap-switch-container') ) {
                if(element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                    error.appendTo( element.parent().parent().parent().parent() );
                }
                 else {
                    error.appendTo( element.parent().parent().parent().parent().parent() );
                }
            }
            else if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
                error.appendTo( element.parent() );
            }
            else if (element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline') || element.parents('div').hasClass('checkbox-single')) {
                error.appendTo( element.parent().parent() );
            }
			else if (element.parents('div').hasClass('checkbox-group')) {
                error.appendTo( element.parent().parent().parent() );
            }
			else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
                error.appendTo( element.parent().parent() );
            }
            else {
                error.insertAfter(element);
            }
        },
        validClass: "validation-success",
        success: function(label) {
            label.addClass("validation-success").text("Done")
        },
        rules: {
            password: {
                minlength: 8
            },
            repeat_password: {
                equalTo: "#password"
            },
			emailid: {
                email: true
            },
            confirm_email: {
			    equalTo: "#emailid"
			},
            minimum_characters: {
                minlength: 10
            },
            maximum_characters: {
                maxlength: 10
            },
            minimum_number: {
                min: 10
            },
            maximum_number: {
                max: 10
            },
            number_range: {
                range: [10, 20]
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            date_iso: {
                dateISO: true
            },
            numbers: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            },
            basic_checkbox: {
                minlength: 2
            },
            styled_checkbox: {
                minlength: 2
            },
            switchery_group: {
                minlength: 2
            },
            switch_group: {
                minlength: 2
            }
        },
        messages: {
            custom: {
                required: "This is a custom error message",
            }
        }
    });

	$('#reset').on('click', function() {
        validator.resetForm();
    });
});
