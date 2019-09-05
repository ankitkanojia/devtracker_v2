//----------------------------------
//   File          : js/pages/forms/picker_date.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {
	'use strict';

	$('#minMaxExample').datepicker({
	    language: 'en',
	    minDate: new Date()
	})

	var disabledDays = [0, 6];

	$('#disabled-days').datepicker({
	    language: 'en',
	    onRenderCell: function (date, cellType) {
	        if (cellType == 'day') {
	            var day = date.getDay(),
	                isDisabled = disabledDays.indexOf(day) != -1;

	            return {
	                disabled: isDisabled
	            }
	        }
	    }
	})

	var start = new Date(),
        prevDay,
        startHours = 9;

    start.setHours(9);
    start.setMinutes(0);

    if ([6, 0].indexOf(start.getDay()) != -1) {
        start.setHours(10);
        startHours = 10
    }

    $('#timepicker-actions-exmpl').datepicker({
        timepicker: true,
        language: 'en',
        startDate: start,
        minHours: startHours,
        maxHours: 18,
        onSelect: function (fd, d, picker) {
            if (!d) return;
            var day = d.getDay();
            if (prevDay != undefined && prevDay == day) return;
            prevDay = day;

            if (day == 6 || day == 0) {
                picker.update({
                    minHours: 10,
                    maxHours: 16
                })
            } else {
                picker.update({
                    minHours: 9,
                    maxHours: 18
                })
            }
        }
    })
});
