//----------------------------------
//   File          : js/pages/charts/charts_sparklinecharts.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {

	Highcharts.SparkLine = function (a, b, c) {
	    var hasRenderToArg = typeof a === 'string' || a.nodeName,
	        options = arguments[hasRenderToArg ? 1 : 0],
	        defaultOptions = {
	            chart: {
	                renderTo: (options.chart && options.chart.renderTo) || this,
	                backgroundColor: null,
	                borderWidth: 0,
	                type: 'areaspline',
	                margin: [2, 0, 2, 0],
	                width: 120,
					height: 30,
	    			backgroundColor: chart_bg,
	                style: {
	                    overflow: 'visible'
	                },

	                skipClone: true
	            },
	            title: {
	                text: ''
	            },
	            credits: {
	                enabled: false
	            },
	            xAxis: {
	                labels: {
	                    enabled: false
	                },
	                title: {
	                    text: null
	                },
	                startOnTick: false,
	                endOnTick: false,
	                tickPositions: []
	            },
	            yAxis: {
	                endOnTick: false,
	                startOnTick: false,
	                labels: {
	                    enabled: false
	                },
	                title: {
	                    text: null
	                },
	                tickPositions: [0]
	            },
	            legend: {
	                enabled: false
	            },
	            tooltip: {
	                positioner: function (w, h, point) {
	                    return { x: point.plotX - w / 2, y: point.plotY - h };
	                }
	            },
	            plotOptions: {
	                series: {
						color: chart_data_color_option4,
	                    animation: false,
	                    lineWidth: 2,
	                    shadow: false,
	                    states: {
	                        hover: {
	                            lineWidth: 3
	                        }
	                    },
	                    marker: {
	                        radius: 2,
	                        states: {
	                            hover: {
	                                radius: 2
	                            }
	                        }
	                    },
	                    fillOpacity: 0.25
	                },
	                column: {
	                    negativeColor: chart_data_color_option3,
	                }
	            }
	        };

	    options = Highcharts.merge(defaultOptions, options);

	    return hasRenderToArg ?
	        new Highcharts.Chart(a, options, c) :
	        new Highcharts.Chart(options, b);
	};

	var start = +new Date(),
	    $tds = $('td[data-sparkline]'),
	    fullLen = $tds.length,
	    n = 0;

	function doChunk() {
	    var time = +new Date(),
	        i,
	        len = $tds.length,
	        $td,
	        stringdata,
	        arr,
	        data,
	        chart;

	    for (i = 0; i < len; i += 1) {
	        $td = $($tds[i]);
	        stringdata = $td.data('sparkline');
	        arr = stringdata.split('; ');
	        data = $.map(arr[0].split(', '), parseFloat);
	        chart = {};

	        if (arr[1]) {
	            chart.type = arr[1];
	        }
	        $td.highcharts('SparkLine', {
	            series: [{
	                data: data,
					color: chart_data_color_option5,
	                pointStart: 1
	            }],
	            tooltip: {
	                headerFormat: '<div class="sparkline-tooltip"><span style="font-size: 10px">' + $td.parent().find('th').html() + ', Q{point.x}:</span><br/>',
	                pointFormat: '<b>{point.y}.000</b> USD</div>'
	            },
	            chart: chart
	        });

	        n += 1;

	       if (new Date() - time > 500) {
	            $tds.splice(0, i + 1);
	            setTimeout(doChunk, 0);
	            break;
	        }

	        if (n === fullLen) {
	            $('#result').html('Generated ' + fullLen + ' sparklines in ' + (new Date() - start) + ' ms');
	        }
	    }
	}
	doChunk();

});
