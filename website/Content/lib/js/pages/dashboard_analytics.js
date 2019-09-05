//----------------------------------
//   File          : js/pages/dashboard_analytics.js
//   Type          : JS file
//   Version       : 1.1.0
//   Last Updated  : July 08, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Traffic Type
// 2. Real Time


// ---------------------------------
// 1. Traffic Type
// ---------------------------------
$('.search').easyPieChart({
    easing: 'easeOutBounce',
    animate: 3500,
    size:100,
    lineWidth:12,
    lineCap:'round',
    trackColor: '#DCDCDC',
    barColor:chart_data_color_option5,
    onStep: function(from, to, percent) {
        $(this.el).find('.per_search').text(Math.round(percent));
    }
});
var chart = window.chart = $('.search').data('easyPieChart');

$('.direct').easyPieChart({
    easing: 'easeOutBounce',
    animate: 3500,
    size:100,
    lineWidth:12,
    lineCap:'round',
    trackColor: '#DCDCDC',
    barColor:chart_data_color_option6,
    onStep: function(from, to, percent) {
        $(this.el).find('.per_direct').text(Math.round(percent));
    }
});
var chart = window.chart = $('.direct').data('easyPieChart');

$('.reff').easyPieChart({
    easing: 'easeOutBounce',
    animate: 3500,
    size:100,
    lineWidth:12,
    lineCap:'round',
    trackColor: '#DCDCDC',
    barColor:chart_data_color_option7,
    onStep: function(from, to, percent) {
        $(this.el).find('.per_reff').text(Math.round(percent));
    }
});
var chart = window.chart = $('.reff').data('easyPieChart');

$('.other').easyPieChart({
    easing: 'easeOutBounce',
    animate: 3500,
    size:100,
    lineWidth:12,
    lineCap:'round',
    trackColor: '#DCDCDC',
    barColor:chart_data_color_option8,
    onStep: function(from, to, percent) {
        $(this.el).find('.per_other').text(Math.round(percent));
    }
});
var chart = window.chart = $('.other').data('easyPieChart');


// ---------------------------------
// 2. Real Time
// ---------------------------------
Morris.Donut({
  element: 'donut-example',
  data: [
    {label: "New Visitors", value: 21},
    {label: "Returning Visitors", value: 79}
  ],
  colors: colors,
  formatter: function (x) { return x + "%"}
});
