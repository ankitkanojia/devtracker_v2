//----------------------------------
//   File          : js/pages/charts/charts_highcharts_area.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Basic Area
// 2. Stacked Area
// 3. Area with negative values
// 4. Area inverted
// 5. Area range
// 6. Area range and line


$(function() {

	// ---------------------------------
	// 1. Basic Area
	// ---------------------------------
	Highcharts.chart('basic-area', {
	    chart: {
	        type: 'area',
			width: null,
			height: 300,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'US and USSR nuclear stockpiles'
	    },
	    subtitle: {
	        text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
	            'thebulletin.metapress.com</a>'
	    },
		credits: {
			enabled: false
		},
	    xAxis: {
	        allowDecimals: false,
	        labels: {
				formatter: function () {
	                return this.value;
	            },
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
	            text: 'Nuclear weapon states',
				style: {
					color: chart_grid_text_color,
				}
	        },
	        labels: {
				formatter: function () {
	                return this.value / 1000 + 'k';
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
	    tooltip: {
	        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
	    },
	    plotOptions: {
	        area: {
	            pointStart: 1940,
	            marker: {
	                enabled: false,
	                symbol: 'circle',
	                radius: 2,
	                states: {
	                    hover: {
	                        enabled: true
	                    }
	                }
	            }
	        }
	    },
	    series: [{
	        name: 'USA',
			color: chart_data_color_option1,
	        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
	            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
	            27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
	            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
	            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
	            22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
	            10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
	    }, {
	        name: 'USSR/Russia',
			color: chart_data_color_option2,
	        data: [null, null, null, null, null, null, null, null, null, null,
	            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
	            4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
	            15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
	            33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
	            35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
	            21000, 20000, 19000, 18000, 18000, 17000, 16000]
	    }]
	});


	// ---------------------------------
	// 2. Stacked Area
	// ---------------------------------
	Highcharts.chart('stacked-area', {
	    chart: {
	        type: 'area',
			width: null,
			height: 300,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'Historic and Estimated Worldwide Population Growth by Region'
	    },
	    subtitle: {
	        text: 'Source: Wikipedia.org'
	    },
		credits: {
		    enabled: false
		},
	    xAxis: {
	        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
	        tickmarkPlacement: 'on',
	        title: {
	            enabled: false,
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
	            text: 'Billions',
				style: {
			        color: chart_grid_text_color,
			    }
	        },
	        labels: {
	            formatter: function () {
	                return this.value / 1000;
	            },
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
	        area: {
	            stacking: 'normal',
	            lineWidth: 1,
				states: {
			        hover: {
			            lineWidth: 2
			        }
			    },
				marker: {
			        enabled: false
			    },
	        }
	    },
	    series: [{
	        name: 'Asia',
			color: chart_data_color_option1,
	        data: [502, 635, 809, 947, 1402, 3634, 5268]
	    }, {
	        name: 'Africa',
			color: chart_data_color_option2,
	        data: [106, 107, 111, 133, 221, 767, 1766]
	    }, {
	        name: 'Europe',
			color: chart_data_color_option3,
	        data: [163, 203, 276, 408, 547, 729, 628]
	    }, {
	        name: 'America',
			color: chart_data_color_option4,
	        data: [18, 31, 54, 156, 339, 818, 1201]
	    }, {
	        name: 'Oceania',
			color: chart_data_color_option5,
	        data: [2, 2, 2, 6, 13, 30, 46]
	    }]
	});


	// ---------------------------------
	// 3. Area with negative values
	// ---------------------------------
	Highcharts.chart('negative-area', {
	    chart: {
	        type: 'area',
			width: null,
			height: 300,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'Area chart with negative values'
	    },
	    xAxis: {
	        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
			gridLineWidth: 0,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
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
	    },
		yAxis:{
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
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
		},
	    credits: {
	        enabled: false
	    },
		plotOptions: {
			lineWidth: 1,
	        area: {
	            marker: {
			        enabled: false
			    },
	        }
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
	// 4. Area inverted
	// ---------------------------------
	Highcharts.chart('inverted-area', {
	    chart: {
	        type: 'area',
	        inverted: true,
			width: null,
			height: 300,
			backgroundColor: chart_bg,
	    },
	    title: {
	        text: 'Average fruit consumption during one week'
	    },
	    subtitle: {
	        style: {
	            position: 'absolute',
	            right: '0px',
	            bottom: '10px'
	        }
	    },
		credits: {
		    enabled: false
		},
	    legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'top',
	        x: -50,
	        y: 70,
	        floating: true,
	    },
	    xAxis: {
	        categories: [
	            'Mon',
	            'Tues',
	            'Wed',
	            'Thur',
	            'Fri',
	            'Sat',
	            'Sun'
	        ],
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
	            text: 'Number of units',
				style: {
			        color: chart_grid_text_color,
			    }
	        },
	        labels: {
	            formatter: function () {
	                return this.value;
	            },
				style: {
			        color: chart_grid_text_color,
			    }
	        },
	        min: 0,
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },
	    plotOptions: {
	        area: {
	            fillOpacity: 0.5
	        }
	    },
	    series: [{
	        name: 'John',
			color: chart_data_color_option1,
	        data: [3, 4, 3, 5, 4, 10, 12]
	    }, {
	        name: 'Jane',
			color: chart_data_color_option2,
	        data: [1, 3, 4, 3, 3, 5, 4]
	    }]
	});


	// ---------------------------------
	// 5. Area range
	// ---------------------------------
	$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

	    Highcharts.chart('range-area', {

	        chart: {
	            type: 'arearange',
	            zoomType: 'x',
				width: null,
				height: 300,
				backgroundColor: chart_bg,
	        },

	        title: {
	            text: 'Temperature variation by day'
	        },
			credits: {
			    enabled: false
			},

	        xAxis: {
	            type: 'datetime',
				labels: {
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
	                text: null
	            },
				labels: {
				    formatter: function () {
				        return this.value + '°';
				    },
				    style: {
				        color: chart_grid_text_color,
				    }
				},
				gridLineColor: chart_gridlines_color,
				lineColor: chart_gridlines_color,
				tickColor: chart_gridlines_color,
	        },

	        tooltip: {
	            crosshairs: true,
	            shared: true,
	            valueSuffix: '°C'
	        },

	        legend: {
	            enabled: false
	        },

	        series: [{
	            name: 'Temperatures',
	            data: data,
				color: chart_data_color_option1,
	        }]

	    });
	});


	// ---------------------------------
	// 6. Area range and line
	// ---------------------------------
	var ranges = [
	        [1246406400000, 14.3, 27.7],
	        [1246492800000, 14.5, 27.8],
	        [1246579200000, 15.5, 29.6],
	        [1246665600000, 16.7, 30.7],
	        [1246752000000, 16.5, 25.0],
	        [1246838400000, 17.8, 25.7],
	        [1246924800000, 13.5, 24.8],
	        [1247011200000, 10.5, 21.4],
	        [1247097600000, 9.2, 23.8],
	        [1247184000000, 11.6, 21.8],
	        [1247270400000, 10.7, 23.7],
	        [1247356800000, 11.0, 23.3],
	        [1247443200000, 11.6, 23.7],
	        [1247529600000, 11.8, 20.7],
	        [1247616000000, 12.6, 22.4],
	        [1247702400000, 13.6, 19.6],
	        [1247788800000, 11.4, 22.6],
	        [1247875200000, 13.2, 25.0],
	        [1247961600000, 14.2, 21.6],
	        [1248048000000, 13.1, 17.1],
	        [1248134400000, 12.2, 15.5],
	        [1248220800000, 12.0, 20.8],
	        [1248307200000, 12.0, 17.1],
	        [1248393600000, 12.7, 18.3],
	        [1248480000000, 12.4, 19.4],
	        [1248566400000, 12.6, 19.9],
	        [1248652800000, 11.9, 20.2],
	        [1248739200000, 11.0, 19.3],
	        [1248825600000, 10.8, 17.8],
	        [1248912000000, 11.8, 18.5],
	        [1248998400000, 10.8, 16.1]
	    ],
	    averages = [
	        [1246406400000, 21.5],
	        [1246492800000, 22.1],
	        [1246579200000, 23],
	        [1246665600000, 23.8],
	        [1246752000000, 21.4],
	        [1246838400000, 21.3],
	        [1246924800000, 18.3],
	        [1247011200000, 15.4],
	        [1247097600000, 16.4],
	        [1247184000000, 17.7],
	        [1247270400000, 17.5],
	        [1247356800000, 17.6],
	        [1247443200000, 17.7],
	        [1247529600000, 16.8],
	        [1247616000000, 17.7],
	        [1247702400000, 16.3],
	        [1247788800000, 17.8],
	        [1247875200000, 18.1],
	        [1247961600000, 17.2],
	        [1248048000000, 14.4],
	        [1248134400000, 13.7],
	        [1248220800000, 15.7],
	        [1248307200000, 14.6],
	        [1248393600000, 15.3],
	        [1248480000000, 15.3],
	        [1248566400000, 15.8],
	        [1248652800000, 15.2],
	        [1248739200000, 14.8],
	        [1248825600000, 14.4],
	        [1248912000000, 15],
	        [1248998400000, 13.6]
	    ];


	Highcharts.chart('line-area', {

		chart: {
			width: null,
			height: 300,
			backgroundColor: chart_bg,
		},

	    title: {
	        text: 'July temperatures'
	    },
		credits: {
		    enabled: false
		},

	    xAxis: {
	        type: 'datetime',
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
	            text: null
	        },
			labels: {
			    style: {
			        color: chart_grid_text_color,
			    }
			},
			gridLineColor: chart_gridlines_color,
			lineColor: chart_gridlines_color,
			tickColor: chart_gridlines_color,
	    },

	    tooltip: {
	        crosshairs: true,
	        shared: true,
	        valueSuffix: '°C'
	    },

	    legend: {
	    },

	    series: [{
	        name: 'Temperature',
			color: chart_data_color_option1,
	        data: averages,
	        zIndex: 1,
	        marker: {
	            fillColor: 'white',
	            lineWidth: 2,
	            lineColor: Highcharts.getOptions().colors[0]
	        }
	    }, {
	        name: 'Range',
			color: chart_data_color_option2,
	        data: ranges,
	        type: 'arearange',
	        lineWidth: 0,
	        linkedTo: ':previous',
	        color: Highcharts.getOptions().colors[0],
	        fillOpacity: 0.3,
	        zIndex: 0
	    }]
	});
});
