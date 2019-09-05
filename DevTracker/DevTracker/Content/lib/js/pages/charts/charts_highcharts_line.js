//----------------------------------
//   File          : js/pages/charts/charts_highcharts_line.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Basic Line
// 2. Time series, zoomable
// 3. Spline with inverted axes
// 4. Spline with plot bands


$(function() {
	'use strict';

	// ---------------------------------
	// 1. Basic Line
	// ---------------------------------
	Highcharts.chart('basic-line', {

		chart: {
            width: null,
			height: 300,
			backgroundColor: chart_bg,
		},
	    title: {
	        text: 'Solar Employment Growth by Sector, 2010-2016'
	    },
	    subtitle: {
	        text: 'Source: thesolarfoundation.com'
	    },
	    yAxis: {
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
			labels: {
				style: {
					color: chart_grid_text_color,
				}
			},
	        title: {
	            text: 'Number of Employees',
				style: {
		            color: chart_grid_text_color,
		        }
	        }
	    },
		xAxis: {
			gridLineWidth: 0,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
			labels: {
				style: {
					color: chart_grid_text_color,
				}
			},
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		},
		legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 70,
            y: 60,
            floating: true,
            borderWidth: 1,
			borderColor: '#ddd',
        },
		credits: {
			enabled: false
		},
		plotOptions: {
			series: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
            }
        },
		series: [{
	        name: 'Tokyo',
			color: chart_data_color_option1,
	        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	    }, {
	        name: 'New York',
			color: chart_data_color_option2,
	        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
	    }, {
	        name: 'Berlin',
			color: chart_data_color_option3,
	        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
	    }, {
	        name: 'London',
			color: chart_data_color_option4,
	        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	    }]

	});


	// ---------------------------------
	// 2. Time series, zoomable
	// ---------------------------------
	$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

	    Highcharts.chart('series-zoom', {
	        chart: {
	            zoomType: 'x',
				width: null,
				height: 300,
				backgroundColor: chart_bg,
	        },
	        title: {
	            text: 'USD to EUR exchange rate over time'
	        },
	        subtitle: {
	            text: document.ontouchstart === undefined ?
	                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
	        },
			credits: {
				enabled: false
			},
	        xAxis: {
	            type: 'datetime',
				gridLineWidth: 0,
				lineColor: chart_gridlines_color,
				tickColor: chart_gridlines_color,
				labels: {
					style: {
						color: chart_grid_text_color,
					}
				},
	        },
	        yAxis: {
	            gridLineColor: chart_gridlines_color,
				lineColor: chart_gridlines_color,
				tickColor: chart_gridlines_color,
				labels: {
					style: {
						color: chart_grid_text_color,
					}
				},
		        title: {
		            text: 'Exchange rate',
					style: {
			            color: chart_grid_text_color,
			        }
		        }
	        },
	        legend: {
	            enabled: false
	        },
	        plotOptions: {
	            area: {
	                fillColor: {
	                    linearGradient: {
	                        x1: 0,
	                        y1: 0,
	                        x2: 0,
	                        y2: 1
	                    },
	                    stops: [
	                        [0, Highcharts.getOptions().colors[0]],
	                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
	                    ]
	                },
	                marker: {
	                    radius: 2
	                },
	                lineWidth: 1,
	                states: {
	                    hover: {
	                        lineWidth: 1
	                    }
	                },
	                threshold: null
	            }
	        },

	        series: [{
	            type: 'area',
	            name: 'USD to EUR',
	            data: data,
				color: chart_data_color_option1
	        }]
	    });
	});


	// ---------------------------------
	// 3. Spline with inverted axes
	// ---------------------------------
	Highcharts.chart('inverted-spline', {
	    chart: {
	        type: 'spline',
	        inverted: true,
			width: null,
			height: 300,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'Atmosphere Temperature by Altitude'
	    },
	    subtitle: {
	        text: 'According to the Standard Atmosphere Model'
	    },
		credits: {
			enabled: false
		},
	    xAxis: {
	        reversed: false,
	        title: {
	            enabled: true,
	            text: 'Altitude',
				style: {
					color: chart_grid_text_color,
				}
	        },
	        labels: {
	            formatter: function () {
	                return this.value + 'km';
	            },
				style: {
					color: chart_grid_text_color,
				}
	        },
	        maxPadding: 0.05,
	        showLastLabel: true,
			gridLineWidth: 0,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    yAxis: {
	        title: {
	            text: 'Temperature',
				style: {
					color: chart_grid_text_color,
				}
	        },
	        labels: {
	            formatter: function () {
	                return this.value + '°';
	            },
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
	        enabled: false
	    },
	    tooltip: {
	        headerFormat: '<b>{series.name}</b><br/>',
	        pointFormat: '{point.x} km: {point.y}°C'
	    },
	    plotOptions: {
	        spline: {
	            marker: {
	                enable: false
	            }
	        }
	    },
	    series: [{
	        name: 'Temperature',
			color: chart_data_color_option1,
	        data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
	            [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
	    }]
	});


	// ---------------------------------
	// 4. Spline with plot bands
	// ---------------------------------
	Highcharts.chart('plot-spline', {
	    chart: {
	        type: 'spline',
			width: null,
			height: 300,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'Wind speed during two days'
	    },
	    subtitle: {
	        text: 'May 31 and and June 1, 2015 at two locations in Vik i Sogn, Norway'
	    },
		credits: {
			enabled: false
		},
	    xAxis: {
	        type: 'datetime',
	        labels: {
	            overflow: 'justify',
				style: {
					color: chart_grid_text_color,
				}
	        },
			gridLineWidth: 0,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    yAxis: {
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
			labels: {
	            style: {
					color: chart_grid_text_color,
				}
	        },
	        title: {
	            text: 'Wind speed (m/s)',
				style: {
					color: chart_grid_text_color,
				}
	        },
	        minorGridLineWidth: 0,
	        gridLineWidth: 0,
	        alternateGridColor: null,
	        plotBands: [{ // Light air
	            from: 0.3,
	            to: 1.5,
	            color: 'rgba(68, 170, 213, 0.1)',
	            label: {
	                text: 'Light air',
	                style: {
	                    color: chart_grid_text_color
	                }
	            }
	        }, { // Light breeze
	            from: 1.5,
	            to: 3.3,
	            color: 'rgba(0, 0, 0, 0)',
	            label: {
	                text: 'Light breeze',
	                style: {
	                    color: chart_grid_text_color
	                }
	            }
	        }, { // Gentle breeze
	            from: 3.3,
	            to: 5.5,
	            color: 'rgba(68, 170, 213, 0.1)',
	            label: {
	                text: 'Gentle breeze',
	                style: {
	                    color: chart_grid_text_color
	                }
	            }
	        }, { // Moderate breeze
	            from: 5.5,
	            to: 8,
	            color: 'rgba(0, 0, 0, 0)',
	            label: {
	                text: 'Moderate breeze',
	                style: {
	                    color: chart_grid_text_color
	                }
	            }
	        }, { // Fresh breeze
	            from: 8,
	            to: 11,
	            color: 'rgba(68, 170, 213, 0.1)',
	            label: {
	                text: 'Fresh breeze',
	                style: {
	                    color: chart_grid_text_color
	                }
	            }
	        }, { // Strong breeze
	            from: 11,
	            to: 14,
	            color: 'rgba(0, 0, 0, 0)',
	            label: {
	                text: 'Strong breeze',
	                style: {
	                    color: chart_grid_text_color
	                }
	            }
	        }, { // High wind
	            from: 14,
	            to: 15,
	            color: 'rgba(68, 170, 213, 0.1)',
	            label: {
	                text: 'High wind',
	                style: {
	                    color: chart_grid_text_color
	                }
	            }
	        }]
	    },
	    tooltip: {
	        valueSuffix: ' m/s'
	    },
	    plotOptions: {
	        spline: {
	            lineWidth: 4,
	            states: {
	                hover: {
	                    lineWidth: 5
	                }
	            },
	            marker: {
	                enabled: false
	            },
	            pointInterval: 3600000, // one hour
	            pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
	        }
	    },
	    series: [{
	        name: 'Hestavollane',
			color: chart_data_color_option1,
	        data: [0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

	    }, {
	        name: 'Vik',
			color: chart_data_color_option2,
	        data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
	    }],
	    navigation: {
	        menuItemStyle: {
	            fontSize: '10px'
	        }
	    }
	});
});
