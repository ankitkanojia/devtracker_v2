//----------------------------------
//   File          : js/pages/forms/picker_time.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {
	'use strict';

	// Default clock picker
	$('.clockpicker').clockpicker({
	    donetext: 'Done'
	});

	// Place at left, align the arrow to top, auto close
	var input = $('#single-input').clockpicker({
	    placement: 'bottom',
	    align: 'left',
	    autoclose: true,
	    'default': 'now'
	});

	// Set default value, input without addon, and manual operations
	$('#check-minutes').click(function(e){
	    e.stopPropagation();
	    input.clockpicker('show')
	        .clockpicker('toggleView', 'minutes');
	});
});
