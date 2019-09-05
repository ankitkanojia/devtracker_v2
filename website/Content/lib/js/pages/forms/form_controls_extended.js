//----------------------------------
//   File          : js/pages/forms/form_controls_extended.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {
	'use strict';

    // Date
    $('[name="format-date"]').formatter({
        pattern: '{{99}}/{{99}}/{{9999}}'
    });

    // Credit card
    $('[name="format-credit-card"]').formatter({
        pattern: '{{9999}} - {{9999}} - {{9999}} - {{9999}}'
    });

    // Phone #
    $('.format-phone-number').formatter({
        pattern: '({{999}}) {{999}} - {{9999}}'
    });

    // Phone ext
    $('[name="format-phone-ext"]').formatter({
        pattern: '({{999}}) {{999}} - {{9999}} / {{a999}}'
    });

    // Currency
    $('[name="format-currency"]').formatter({
        pattern: '${{999}}.{{99}}'
    });

    // International phone
    $('[name="format-international-phone"]').formatter({
        pattern: '+3{{9}} {{999}} {{999}} {{999}}'
    });

    // Tax id
    $('[name="format-tax-id"]').formatter({
        pattern: '{{99}} - {{9999999}}'
    });

    // SSN
    $('[name="format-ssn"]').formatter({
        pattern: '{{999}} - {{99}} - {{9999}}'
    });

    // Product key
    $('[name="format-product-key"]').formatter({
        pattern: '{{a*}} - {{999}} - {{a999}}'
    });

    // Order #
    $('[name="format-order-number"]').formatter({
        pattern: '{{aaa}} - {{999}} - {{***}}'
    });

    // ISBN
    $('[name="format-isbn"]').formatter({
        pattern: '{{999}} - {{99}} - {{999}} - {{9999}} - {{9}}'
    });

    // Persistent
    $('[name="format-persistent"]').formatter({
        pattern: '+3 ({{999}}) {{999}} - {{99}} - {{99}}'
    });
});
