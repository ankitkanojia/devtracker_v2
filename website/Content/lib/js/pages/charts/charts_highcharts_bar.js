//----------------------------------
//   File          : js/pages/charts/charts_highcharts_bar.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Basic Bar
// 2. Stacked Bar
// 3. Basic column
// 4. Column with negative values
// 5. Stacked column
// 6. Fixed placement columns
// 7. Column range


$(function() {
	'use strict';

	// ---------------------------------
	// 1. Basic Bar
	// ---------------------------------
	Highcharts.chart('basic-bar', {
	    chart: {
	        type: 'bar',
			width: null,
			height: 240,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'Historic World Population by Region'
	    },
	    subtitle: {
	        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
	    },
	    xAxis: {
	        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
	        title: {
	            text: null
	        },
			labels: {
				style: {
			        color: chart_grid_text_color,
			    }
			},
			gridLineWidth: 0,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: 'Population (millions)',
	            align: 'high'
	        },
	        labels: {
	            overflow: 'justify',
				style: {
			        color: chart_grid_text_color,
			    }
	        },
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    tooltip: {
	        valueSuffix: ' millions'
	    },
	    plotOptions: {
	        bar: {
	            dataLabels: {
	                enabled: false
	            }
	        }
	    },
	    legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'top',
	        x: -20,
	        y: 80,
	        floating: true,
	        borderWidth: 1,
	        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
	        shadow: true
	    },
	    credits: {
	        enabled: false
	    },
	    series: [{
	        name: 'Year 1800',
			color: chart_data_color_option1,
	        data: [107, 31, 635, 203, 2]
	    }, {
	        name: 'Year 1900',
			color: chart_data_color_option2,
	        data: [133, 156, 947, 408, 6]
	    }, {
	        name: 'Year 2012',
			color: chart_data_color_option3,
	        data: [1052, 954, 4250, 740, 38]
	    }]
	});


	// ---------------------------------
	// 2. Stacked Bar
	// ---------------------------------
	Highcharts.chart('stacked-bar', {
	    chart: {
	        type: 'bar',
			width: null,
			height: 240,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'Stacked bar chart'
	    },
		credits: {
			enabled: false
		},
	    xAxis: {
	        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
			labels: {
				style: {
			        color: chart_grid_text_color,
			    }
			},
			gridLineWidth: 0,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    yAxis: {
	        min: 0,
			labels: {
				style: {
			        color: chart_grid_text_color,
			    }
			},
	        title: {
	            text: 'Total fruit consumption',
				style: {
					color: chart_grid_text_color,
				}
	        },
			lineWidth: 2,
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    legend: {
	        reversed: true
	    },
	    plotOptions: {
	        series: {
	            stacking: 'normal'
	        }
	    },
	    series: [{
	        name: 'John',
			color: chart_data_color_option1,
	        data: [5, 3, 4, 7, 2]
	    }, {
	        name: 'Jane',
			color: chart_data_color_option2,
	        data: [2, 2, 3, 2, 1]
	    }, {
	        name: 'Joe',
			color: chart_data_color_option3,
	        data: [3, 4, 4, 2, 5]
	    }]
	});


	// ---------------------------------
	// 3. Basic column
	// ---------------------------------
	Highcharts.chart('basic-column', {
	    chart: {
	        type: 'column',
			width: null,
			height: 240,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'Monthly Average Rainfall'
	    },
	    subtitle: {
	        text: 'Source: WorldClimate.com'
	    },
		credits: {
			enabled: false
		},
	    xAxis: {
	        categories: [
	            'Jan',
	            'Feb',
	            'Mar',
	            'Apr',
	            'May',
	            'Jun',
	            'Jul',
	            'Aug',
	            'Sep',
	            'Oct',
	            'Nov',
	            'Dec'
	        ],
	        crosshair: true,
			labels: {
				style: {
			        color: chart_grid_text_color,
			    }
			},
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: 'Rainfall (mm)',
				style: {
					color: chart_grid_text_color,
				}
	        },
			labels: {
				style: {
					color: chart_grid_text_color,
				}
	        },
	        lineWidth: 0,
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    tooltip: {
	        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
	        footerFormat: '</table>',
	        shared: true,
	        useHTML: true
	    },
	    plotOptions: {
	        column: {
	            pointPadding: 0.3,
	            borderWidth: 0
	        }
	    },
	    series: [{
	        name: 'Tokyo',
			color: chart_data_color_option1,
	        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

	    }, {
	        name: 'New York',
			color: chart_data_color_option2,
	        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

	    }, {
	        name: 'London',
			color: chart_data_color_option3,
	        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

	    }, {
	        name: 'Berlin',
			color: chart_data_color_option4,
	        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

	    }]
	});


	// ---------------------------------
	// 4. Column with negative values
	// ---------------------------------
	Highcharts.chart('negative-column', {
	    chart: {
	        type: 'column',
			width: null,
			height: 300,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: null,
	    },
	    xAxis: {
	        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
			labels: {
				style: {
					color: chart_grid_text_color,
				}
	        },
	        lineWidth: 0,
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
		yAxis: {
			title: {
				style: {
					color: chart_grid_text_color,
				}
	        },
	        labels: {
				style: {
					color: chart_grid_text_color,
				}
	        },
	        lineWidth: 0,
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    credits: {
	        enabled: false
	    },
	    series: [{
	        name: 'John',
			color: chart_data_color_option1,
	        data: [5, 3, 4, 7, 2]
	    }, {
	        name: 'Jane',
			color: chart_data_color_option2,
	        data: [2, -2, -3, 2, 1]
	    }, {
	        name: 'Joe',
			color: chart_data_color_option3,
	        data: [3, 4, 4, -2, 5]
	    }]
	});


	// ---------------------------------
	// 5. Stacked column
	// ---------------------------------
	Highcharts.chart('stacked-column', {
	    chart: {
	        type: 'column',
			width: null,
			height: 300,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: null
	    },
		credits: {
			enabled: false
		},
	    xAxis: {
	        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
			labels: {
				style: {
			        color: chart_grid_text_color,
			    }
			},
			gridLineWidth: 0,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: 'Total fruit consumption',
				style: {
			        color: chart_grid_text_color,
			    }
	        },
	        stackLabels: {
	            enabled: true,
	            style: {
	                fontWeight: 'bold',
	                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
	            }
	        },
			labels: {
				style: {
					color: chart_grid_text_color,
				}
	        },
	        lineWidth: 0,
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    legend: {
	        align: 'right',
	        x: -30,
	        verticalAlign: 'top',
	        y: 25,
	        floating: false,
	        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
	        borderColor: '#CCC',
	        borderWidth: 1,
	        shadow: false
	    },
	    tooltip: {
	        headerFormat: '<b>{point.x}</b><br/>',
	        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
	    },
	    plotOptions: {
	        column: {
	            stacking: 'normal',
	            dataLabels: {
	                enabled: true,
	                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
	            }
	        }
	    },
	    series: [{
	        name: 'John',
			color: chart_data_color_option1,
	        data: [5, 3, 4, 7, 2]
	    }, {
	        name: 'Jane',
			color: chart_data_color_option2,
	        data: [2, 2, 3, 2, 1]
	    }, {
	        name: 'Joe',
			color: chart_data_color_option3,
	        data: [3, 4, 4, 2, 5]
	    }]
	});


	// ---------------------------------
	// 6. Fixed placement columns
	// ---------------------------------
	Highcharts.chart('fixed-column', {
	    chart: {
	        type: 'column',
			width: null,
			height: 300,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: null
	    },
		credits: {
			enabled: false
		},
	    xAxis: {
	        categories: [
	            'Seattle HQ',
	            'San Francisco',
	            'Tokyo'
	        ],
			labels: {
				style: {
			        color: chart_grid_text_color,
			    }
			},
			gridLineWidth: 0,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    yAxis: [{
	        min: 0,
	        title: {
	            text: 'Employees',
				style: {
					color: chart_grid_text_color,
				}
	        },
			labels: {
				style: {
					color: chart_grid_text_color,
				}
	        },
	        lineWidth: 0,
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    }, {
	        title: {
	            text: 'Profit (millions)',
				style: {
					color: chart_grid_text_color,
				}
	        },
	        opposite: true,
			labels: {
				style: {
					color: chart_grid_text_color,
				}
	        },
	        lineWidth: 0,
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    }],
	    legend: {
	        shadow: false
	    },
	    tooltip: {
	        shared: true
	    },
	    plotOptions: {
	        column: {
	            grouping: false,
	            shadow: false,
	            borderWidth: 0
	        }
	    },
	    series: [{
	        name: 'Employees',
	        color: chart_data_color_option1,
	        data: [150, 73, 20],
	        pointPadding: 0.3,
	        pointPlacement: -0.2
	    }, {
	        name: 'Employees Optimized',
	        color: chart_data_color_option2,
	        data: [140, 90, 40],
	        pointPadding: 0.4,
	        pointPlacement: -0.2
	    }, {
	        name: 'Profit',
	        color: chart_data_color_option3,
	        data: [183.6, 178.8, 198.5],
	        tooltip: {
	            valuePrefix: '$',
	            valueSuffix: ' M'
	        },
	        pointPadding: 0.3,
	        pointPlacement: 0.2,
	        yAxis: 1
	    }, {
	        name: 'Profit Optimized',
	        color: chart_data_color_option4,
	        data: [203.6, 198.8, 208.5],
	        tooltip: {
	            valuePrefix: '$',
	            valueSuffix: ' M'
	        },
	        pointPadding: 0.4,
	        pointPlacement: 0.2,
	        yAxis: 1
	    }]
	});


	// ---------------------------------
	// 7. Column range
	// ---------------------------------
	Highcharts.chart('column-range', {
	    chart: {
	        type: 'columnrange',
	        inverted: true,
			width: null,
			height: 300,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'Temperature variation by month'
	    },
	    subtitle: {
	        text: 'Observed in Vik i Sogn, Norway'
	    },
		credits: {
			enabled: false
		},
	    xAxis: {
	        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			title: {
				style: {
					color: chart_grid_text_color,
				}
	        },
			labels: {
				style: {
			        color: chart_grid_text_color,
			    }
			},
			gridLineWidth: 0,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    yAxis: {
	        title: {
	            text: 'Temperature ( °C )',
				style: {
					color: chart_grid_text_color,
				}
	        },
	        labels: {
				style: {
					color: chart_grid_text_color,
				}
	        },
	        lineWidth: 0,
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    tooltip: {
	        valueSuffix: '°C'
	    },
	    plotOptions: {
	        columnrange: {
	            dataLabels: {
	                enabled: true,
	                formatter: function () {
	                    return this.y + '°C';
	                }
	            }
	        }
	    },
	    legend: {
	        enabled: false
	    },
	    series: [{
	        name: 'Temperatures',
			color: chart_data_color_option1,
	        data: [
	            [-9.7, 9.4],
	            [-8.7, 6.5],
	            [-3.5, 9.4],
	            [-1.4, 19.9],
	            [0.0, 22.6],
	            [2.9, 29.5],
	            [9.2, 30.7],
	            [7.3, 26.5],
	            [4.4, 18.0],
	            [-3.1, 11.4],
	            [-5.2, 10.4],
	            [-13.5, 9.8]
	        ]
	    }]
	});
});
