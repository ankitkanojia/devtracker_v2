//----------------------------------
//   File          : js/pages/forms/form_bootstrap_touchspin.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {
	'use strict';

    // Postfix
    $(".touchspin-postfix").TouchSpin({
        min: 0,
        max: 1000,
        step: 0.1,
        decimals: 2,
        postfix: '%'
    });

    // Prefix
    $(".touchspin-prefix").TouchSpin({
        min: 0,
        max: 1000,
        step: 0.1,
        decimals: 2,
        prefix: '$'
    });

    // Init with empty values
    $(".touchspin-empty").TouchSpin();

    // Incremental/decremental steps
    $(".touchspin-step").TouchSpin({
        step: 10,
		max: 1000,
    });

    // Inside button group
    $(".touchspin-button-group").TouchSpin({
        prefix: "$",
        postfix: "%",
		max: 1000,
    });
});
