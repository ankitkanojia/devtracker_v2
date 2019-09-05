//----------------------------------
//   File          : js/pages/extensions/page_launching.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

'use strict';

var now = new Date();
var countTo = 25 * 24 * 60 * 60 * 1000 + now.valueOf();
$('.timer').countdown(countTo, function(event) {
	$(this).find('.days').text(event.offset.totalDays);
	$(this).find('.hours').text(event.offset.hours);
	$(this).find('.minutes').text(event.offset.minutes);
	$(this).find('.seconds').text(event.offset.seconds);
});
