//----------------------------------
//   File          : js/pages/charts/charts_peitycharts.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$.fn.peity.defaults.pie = {
	fill: ["#404148", "#eee"],
	radius: 40
}

$("span.pie").peity("pie");

$.fn.peity.defaults.donut = {
	fill: ["#404148", "#eee"],
	radius: 60,
	radius: 40
}

$('.donut').peity('donut');

// line
$('.peity-line').each(function() {
	$(this).peity("line", $(this).data());
});

// bar
$('.peity-bar').each(function() {
	$(this).peity("bar", $(this).data());
});
