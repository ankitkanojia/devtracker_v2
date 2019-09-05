//----------------------------------
//   File          : js/pages/charts/charts_highcharts_pie.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Basic Pie
// 2. Pie with legend
// 3. Donut chart
// 4. Semi circle donut


$(function() {
	'use strict';

	// ---------------------------------
	// 1. Basic Pie
	// ---------------------------------
	Highcharts.chart('basic-pie', {
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie',
			width: null,
			height: 240,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'Browser market shares January, 2015 to May, 2015'
	    },
	    tooltip: {
	        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	    },
		credits: {
	        enabled: false
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            dataLabels: {
	                enabled: true,
	                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
	                style: {
	                    color: chart_grid_text_color
	                }
	            }
	        }
	    },
	    series: [{
	        name: 'Brands',
	        colorByPoint: true,
	        data: [{
	            name: 'Microsoft Internet Explorer',
				color: chart_data_color_option1,
	            y: 56.33
	        }, {
	            name: 'Chrome',
				color: chart_data_color_option2,
	            y: 24.03,
	            sliced: true,
	            selected: true
	        }, {
	            name: 'Firefox',
				color: chart_data_color_option3,
	            y: 10.38
	        }, {
	            name: 'Safari',
				color: chart_data_color_option4,
	            y: 4.77
	        }, {
	            name: 'Opera',
				color: chart_data_color_option5,
	            y: 0.91
	        }, {
	            name: 'Proprietary or Undetectable',
				color: chart_data_color_option6,
	            y: 0.2
	        }]
	    }]
	});


	// ---------------------------------
	// 2. Pie with legend
	// ---------------------------------
    Highcharts.chart('pie-legend', {
        chart: {
            plotBackgroundColor: chart_bg,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
			width: null,
			height: 240,
			backgroundColor: chart_bg,
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
		credits: {
	        enabled: false
	    },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'IE',
				color: chart_data_color_option1,
                y: 56.33
            }, {
                name: 'Chrome',
				color: chart_data_color_option2,
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
				color: chart_data_color_option3,
                y: 10.38
            }, {
                name: 'Safari',
				color: chart_data_color_option4,
                y: 4.77
            }, {
                name: 'Opera',
				color: chart_data_color_option5,
                y: 0.91
            }, {
                name: 'Undetectable',
				color: chart_data_color_option6,
                y: 0.2
            }]
        }]
    });


	// ---------------------------------
	// 3. Donut chart
	// ---------------------------------
	var colors = Highcharts.getOptions().colors,
	    categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
	    data = [{
	        y: 56.33,
	        color: chart_data_color_option1,
	        drilldown: {
	            name: 'MSIE versions',
	            categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0', 'MSIE 10.0', 'MSIE 11.0'],
	            data: [1.06, 0.5, 17.2, 8.11, 5.33, 24.13],
	            color: colors[0]
	        }
	    }, {
	        y: 10.38,
	        color: chart_data_color_option2,
	        drilldown: {
	            name: 'Firefox versions',
	            categories: ['Firefox v31', 'Firefox v32', 'Firefox v33', 'Firefox v35', 'Firefox v36', 'Firefox v37', 'Firefox v38'],
	            data: [0.33, 0.15, 0.22, 1.27, 2.76, 2.32, 2.31, 1.02],
	            color: colors[1]
	        }
	    }, {
	        y: 24.03,
	        color: chart_data_color_option3,
	        drilldown: {
	            name: 'Chrome versions',
	            categories: ['Chrome v30.0', 'Chrome v31.0', 'Chrome v32.0', 'Chrome v33.0', 'Chrome v34.0',
	                'Chrome v35.0', 'Chrome v36.0', 'Chrome v37.0', 'Chrome v38.0', 'Chrome v39.0', 'Chrome v40.0', 'Chrome v41.0', 'Chrome v42.0', 'Chrome v43.0'
	                ],
	            data: [0.14, 1.24, 0.55, 0.19, 0.14, 0.85, 2.53, 0.38, 0.6, 2.96, 5, 4.32, 3.68, 1.45],
	            color: colors[2]
	        }
	    }, {
	        y: 4.77,
			color: chart_data_color_option4,
	        drilldown: {
	            name: 'Safari versions',
	            categories: ['Safari v5.0', 'Safari v5.1', 'Safari v6.1', 'Safari v6.2', 'Safari v7.0', 'Safari v7.1', 'Safari v8.0'],
	            data: [0.3, 0.42, 0.29, 0.17, 0.26, 0.77, 2.56],
	            color: colors[3]
	        }
	    }, {
	        y: 0.91,
	        color: chart_data_color_option5,
	        drilldown: {
	            name: 'Opera versions',
	            categories: ['Opera v12.x', 'Opera v27', 'Opera v28', 'Opera v29'],
	            data: [0.34, 0.17, 0.24, 0.16],
	            color: colors[4]
	        }
	    }, {
	        y: 0.2,
	        color: chart_data_color_option6,
	        drilldown: {
	            name: 'Proprietary or Undetectable',
	            categories: [],
	            data: [],
	            color: colors[5]
	        }
	    }],
	    browserData = [],
	    versionsData = [],
	    i,
	    j,
	    dataLen = data.length,
	    drillDataLen,
	    brightness;


	// Build the data arrays
	for (i = 0; i < dataLen; i += 1) {

	    // add browser data
	    browserData.push({
	        name: categories[i],
	        y: data[i].y,
	        color: data[i].color
	    });

	    // add version data
	    drillDataLen = data[i].drilldown.data.length;
	    for (j = 0; j < drillDataLen; j += 1) {
	        brightness = 0.2 - (j / drillDataLen) / 5;
	        versionsData.push({
	            name: data[i].drilldown.categories[j],
	            y: data[i].drilldown.data[j],
	            color: Highcharts.Color(data[i].color).brighten(brightness).get()
	        });
	    }
	}

	// Create the chart
	Highcharts.chart('pie-donut', {
	    chart: {
	        type: 'pie',
			width: null,
			height: 240,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'Browser market share, January, 2015 to May, 2015'
	    },
	    subtitle: {
	        text: 'Source: <a href="http://netmarketshare.com/">netmarketshare.com</a>'
	    },
		credits: {
	        enabled: false
	    },
	    yAxis: {
	        title: {
	            text: 'Total percent market share',
				style: {
			        color: chart_grid_text_color,
			    }
	        },
			labels: {
				style: {
			        color: chart_grid_text_color,
			    }
			},
	    },
	    plotOptions: {
	        pie: {
	            shadow: false,
	            center: ['50%', '50%']
	        }
	    },
	    tooltip: {
	        valueSuffix: '%'
	    },
	    series: [{
	        name: 'Browsers',
	        data: browserData,
	        size: '60%',
	        dataLabels: {
	            formatter: function () {
	                return this.y > 5 ? this.point.name : null;
	            },
	            color: '#ffffff',
	            distance: -30
	        }
	    }, {
	        name: 'Versions',
	        data: versionsData,
	        size: '80%',
	        innerSize: '60%',
	        dataLabels: {
	            formatter: function () {
	                // display only if larger than 1
	                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
	            }
	        }
	    }]
	});


	// ---------------------------------
	// 4. Semi circle donut
	// ---------------------------------
	Highcharts.chart('semi-donut', {
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: 0,
	        plotShadow: false,
			width: null,
			height: 240,
			backgroundColor: chart_bg,
            spacingBottom: -80,
			spacingTop: -80,
			spacingLeft: 0,
			spacingRight: 0,
	    },
	    title: {
	        text: 'Browser<br>shares<br>2015',
	        align: 'center',
	        verticalAlign: 'middle',
	        y: 40
	    },
	    tooltip: {
	        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	    },
		credits: {
	        enabled: false
	    },
	    plotOptions: {
	        pie: {
	            dataLabels: {
	                enabled: true,
	                distance: -50,
	                style: {
	                    fontWeight: 'bold',
	                    color: 'white'
	                }
	            },
	            startAngle: -90,
	            endAngle: 90,
	            center: ['50%', '75%']
	        }
	    },
	    series: [{
	        type: 'pie',
	        name: 'Browser share',
	        innerSize: '50%',
			colors: colors,
	        data: [
	            ['Firefox',   10.38],
	            ['IE',       56.33],
	            ['Chrome', 24.03],
	            ['Safari',    4.77],
	            ['Opera',     0.91],
	            {
	                name: 'Proprietary or Undetectable',
					colors: colors,
	                y: 0.2,
	                dataLabels: {
	                    enabled: false
	                }
	            }
	        ]
	    }]
	});
});
