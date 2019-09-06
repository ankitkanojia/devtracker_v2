//----------------------------------
//   File          : js/pages/charts/charts_morrischarts.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Line Chart
// 2. Area Chart
// 3. Bar Chart
// 4. Donut Chart


$(function() {
	'use strict';

	// ---------------------------------
	// 1. Line Chart
	// ---------------------------------
	var line = new Morris.Line({
      element: 'line-example',
      resize: true,
	  data: [
	    { y: '2006', a: 10, b: 20 },
	    { y: '2007', a: 25,  b: 15 },
	    { y: '2008', a: 50,  b: 25 },
	    { y: '2009', a: 35,  b: 65 },
	    { y: '2010', a: 50,  b: 40 },
	    { y: '2011', a: 15,  b: 75 },
	    { y: '2012', a: 40, b: 20 }
	  ],
	  xkey: 'y',
	  ykeys: ['a', 'b'],
	  labels: ['Series A', 'Series B'],
      gridLineColor: chart_gridlines_color,
      lineColors: colors,
      lineWidth: 1,
      hideHover: 'auto'
    });


	// ---------------------------------
	// 2. Area Chart
	// ---------------------------------
	Morris.Area({
	  element: 'area-example',
	  data: [{
            period: '2010',
            iphone: 0,
            ipad: 0,
            itouch: 0
        }, {
            period: '2011',
            iphone: 50,
            ipad: 15,
            itouch: 5
        }, {
            period: '2012',
            iphone: 20,
            ipad: 50,
            itouch: 65
        }, {
            period: '2013',
            iphone: 60,
            ipad: 12,
            itouch: 7
        }, {
            period: '2014',
            iphone: 30,
            ipad: 20,
            itouch: 120
        }, {
            period: '2015',
            iphone: 25,
            ipad: 80,
            itouch: 40
        }, {
            period: '2016',
            iphone: 10,
            ipad: 10,
            itouch: 10
        }


      ],
	  xkey: 'period',
      ykeys: ['iphone', 'ipad', 'itouch'],
      labels: ['iPhone', 'iPad', 'iPod Touch'],
	  pointSize: 0,
      lineWidth: 0,
      fillOpacity: .4,
      pointStrokeColors: colors,
      behaveLikeLine: true,
      gridLineColor: '#e0e0e0',
      hideHover: 'auto',
      lineColors: colors,
      resize: true
	});


	// ---------------------------------
	// 3. Bar Chart
	// ---------------------------------
	Morris.Bar({
	  element: 'bar-example',
	  data: [
	    { y: '2006', a: 100, b: 90 },
	    { y: '2007', a: 75,  b: 65 },
	    { y: '2008', a: 50,  b: 40 },
	    { y: '2009', a: 75,  b: 65 },
	    { y: '2010', a: 50,  b: 40 },
	    { y: '2011', a: 75,  b: 65 },
	    { y: '2012', a: 100, b: 90 }
	  ],
	  xkey: 'y',
	  ykeys: ['a', 'b'],
	  labels: ['Series A', 'Series B'],
	  barColors:colors,
      hideHover: 'auto',
      gridLineColor: '#eef0f2',
	});


	// ---------------------------------
	// 4. Donut Chart
	// ---------------------------------
	Morris.Donut({
	  element: 'donut-example',
	  data: [
	    {label: "Download Sales", value: 12},
	    {label: "In-Store Sales", value: 30},
	    {label: "Mail-Order Sales", value: 20}
	  ],
	  colors:colors
	});
});
