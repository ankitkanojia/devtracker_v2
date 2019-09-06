//----------------------------------
//   File          : js/pages/extensions/extension_fullcalendar.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Basic view
// 2. Agenda view
// 3. External events

'use strict';

var events = [
	{
		title: 'All Day Event',
		start: '2016-01-01'
	},
	{
		title: 'Long Event',
		start: '2016-01-07',
		end: '2016-01-10'
	},
	{
		id: 999,
		title: 'Repeating Event',
		start: '2016-01-09T16:00:00'
	},
	{
		id: 999,
		title: 'Repeating Event',
		start: '2016-01-16T16:00:00'
	},
	{
		title: 'Conference',
		start: '2016-01-11',
		end: '2016-01-13'
	},
	{
		title: 'Meeting',
		start: '2016-01-12T10:30:00',
		end: '2016-01-12T12:30:00'
	},
	{
		title: 'Lunch',
		start: '2016-01-12T12:00:00'
	},
	{
		title: 'Meeting',
		start: '2016-01-12T14:30:00'
	},
	{
		title: 'Happy Hour',
		start: '2016-01-12T17:30:00'
	},
	{
		title: 'Dinner',
		start: '2016-01-12T20:00:00'
	},
	{
		title: 'Birthday Party',
		start: '2016-01-13T07:00:00'
	},
	{
		title: 'Click for Google',
		url: 'http://google.com/',
		start: '2016-01-28'
	}
];


// ---------------------------------
// 1. Basic view
// ---------------------------------
$('.fullcalendar-basic').fullCalendar({
	header: {
		left: 'prev,next today',
		center: 'title',
		right: 'month,basicWeek,basicDay'
	},
	defaultDate: '2016-01-01',
	editable: true,
	events: events
});


// ---------------------------------
// 2. Agenda view
// ---------------------------------
$('.fullcalendar-agenda').fullCalendar({
	header: {
		left: 'prev,next today',
		center: 'title',
		right: 'month,agendaWeek,agendaDay'
	},
	defaultDate: '2016-01-12',
	defaultView: 'agendaWeek',
	editable: true,
	events: events
});


// ---------------------------------
// 3. External events
// ---------------------------------
var remove = document.querySelector('.switch');
var removeInit = new Switchery(remove);

$('.fullcalendar-external').fullCalendar({
	header: {
		left: 'prev,next today',
		center: 'title',
		right: 'month,agendaWeek,agendaDay'
	},
	editable: true,
	defaultDate: '2016-01-01',
	events: events,
	lang: 'en',
	droppable: true,
		drop: function() {
		if ($('#drop-remove').is(':checked')) {
			$(this).remove();
		}
	}
});

$('#external-events .fc-event').each(function() {

	$(this).css({'backgroundColor': $(this).data('color'), 'borderColor': $(this).data('color')});

	$(this).data('event', {
		title: $.trim($(this).html()),
		color: $(this).data('color'),
		stick: true
	});

	$(this).draggable({
		zIndex: 999,
		revert: true,
		revertDuration: 0
	});
});
