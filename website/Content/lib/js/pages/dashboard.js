//----------------------------------
//   File          : js/pages/dashboard.js
//   Type          : JS file
//   Version       : 1.1.0
//   Last Updated  : June 24, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Total leads
// 2. Total payment
// 3. Total sales
// 4. Total orders
// 5. Income & Expenses
// 6. Annual growth
// 7. Website stats
// 8. World map


// ---------------------------------
// 1. Total leads
// ---------------------------------
$(function () {
    Highcharts.chart('leads', {
        chart: {
            type: 'spline',
            width: null,
            height: 60,
            spacingBottom: -10,
			spacingTop: -10,
			spacingLeft: 0,
			spacingRight: 0,
            backgroundColor: chart_bg,
        },
        plotOptions: {
			spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 1,
            }
        },
		title: {
			text: null
		},
		subtitle: {
			text: null
		},
		xAxis: {
			labels: {enabled:false},
			lineWidth: 1,
			tickLength: 1,
			gridLineWidth: 0,
			categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
		},
		yAxis: {
			title: {
				text: null
			},
			labels: {enabled:false},
			gridLineWidth: 0
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		tooltip: {
			enabled:false
		},
        series: [{
			name: 'Leads',
			showSymbol: false,
            color: chart_data_color_option1,
            data: [12,23,21,19,34,25,9,24,13,19,39,54]
        }],
    });
});


// ---------------------------------
// 2. Total payment
// ---------------------------------
$(function () {
	Highcharts.chart('payment', {
		chart: {
			spacingBottom: -10,
			spacingTop: -20,
			spacingLeft: -10,
			spacingRight: -10,
            backgroundColor: chart_bg,
			width: null,
			height: 60
		},
		title: {
			text: null
		},
		subtitle: {
			text: null
		},
		xAxis: {
			labels: {enabled:false},
			lineWidth: 0,
			tickLength: 0,
			gridLineWidth: 0,
			categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
		},
		yAxis: {
			title: {
				text: null
			},
			labels: {enabled:false},
			gridLineWidth: 0
		},
		tooltip: {
			enabled:false
		},
		credits: {
			enabled: false
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
						[0, chart_data_color_option2],
						[1, '#fff']
					]
				},
				marker: {
					enabled: false
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
		colors: colors,
		series: [{
			type: 'area',
			name: 'Payment',
            color: chart_data_color_option2,
			data: [2140,1950,2320,1870,2270,3400,3700,3030,3900,4500,3600,4900]
		}]
	});
});


// ---------------------------------
// 3. Total sales
// ---------------------------------
$(function () {
    Highcharts.chart('sales', {
        chart: {
            type: 'column',
            spacingBottom: -10,
            spacingTop: -10,
            spacingLeft: -10,
            spacingRight: -10,
            width: null,
            height: 60,
            backgroundColor: chart_bg,
		},
        title: {
			text: null
		},
		subtitle: {
			text: null
		},
		credits: {
			enabled: false
		},
		legend: {
			enabled: false
		},
        xAxis: {
			labels: {enabled:false},
			lineWidth: 0,
			tickLength: 0,
			gridLineWidth: 0,
            categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            crosshair: true
        },
        yAxis: {
			title: {
				text: null
			},
			labels: {enabled:false},
			gridLineWidth: 0,
            min: 0
        },
        tooltip: {
			enabled:false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
		colors: ['#FFA000'],
        series: [{
            name: 'Sales',
            color: chart_data_color_option3,
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        }]
    });
});


// ---------------------------------
// 4. Total orders
// ---------------------------------
var data = [[1230771600000, -5.8, 0.1],
[1230858000000, -4.1, 1.4],
[1230944400000, -0.5, 4.1],
[1231030800000, -8.9, -0.7],
[1231117200000, -9.7, -3.7],
[1231203600000, -3.4, 3.2],
[1231290000000, -3.9, -0.2],
[1231376400000, -2.4, 6.7],
[1231462800000, 1.8, 3.9],
[1231549200000, 1.1, 3.8],
[1231635600000, 0.0, 7.6],
[1231722000000, 5.6, 9.4],
[1231808400000, 3.6, 6.5],
[1231894800000, -3.6, 3.8],
[1231981200000, -6.0, -1.5],
[1232067600000, -3.8, 2.4],
[1232154000000, 1.5, 4.2],
[1232240400000, 0.0, 4.5],
[1232326800000, -1.1, 3.6],
[1232413200000, 0.5, 5.1],
[1232499600000, 0.0, 2.5],
[1232586000000, -0.6, 2.1]];

$(function () {
	Highcharts.chart('orders', {
		chart: {
			type: 'arearange',
			spacingBottom: -10,
			spacingTop: -10,
			spacingLeft: -10,
			spacingRight: 10,
			width: null,
			height: 60,
            backgroundColor: chart_bg,
		},
		title: {
			text: null
		},
		subtitle: {
			text: null
		},
		credits: {
			enabled: false
		},
		legend: {
			enabled: false
		},
		tooltip: {
			enabled:false
		},
		xAxis: {
			labels: {enabled:false},
			lineWidth: 0,
			tickLength: 0,
			gridLineWidth: 0,
			categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		},
		yAxis: {
			title: {
				text: null
			},
			labels: {enabled:false},
			gridLineWidth: 0,
		},
		colors: ['#4CAF50'],
		series: [{
			name: 'Orders',
            color: chart_data_color_option4,
			data: data
		}]
	});
});


// ---------------------------------
// 5. Income & Expenses
// ---------------------------------
$(function () {
    Highcharts.chart('income', {
        chart: {
            type: 'areaspline',
			spacingBottom: 0,
			spacingTop: 0,
			spacingLeft: -60,
			spacingRight: -60,
			width: null,
			height: 375,
            backgroundColor: chart_bg,
        },
        title: {
			text: null
		},
		subtitle: {
			text: null
		},
		credits: {
			enabled: false
		},
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
        },
        xAxis: {
            categories: ['January','February','March','April','May','June','July','August','September','October','November','December'],
			labels: {enabled:false},
			tickLength: 0,
			lineWidth: 0,
			gridLineWidth: 0,
        },
        yAxis: {
            title: {
				text: null
			},
			gridLineColor: '$chart-gridlines-color',
			labels: {enabled:false},
        },
        tooltip: {
            shared: true,
        },
        plotOptions: {
			lineWidth: 0,
			states: {
				hover: {
					lineWidth: 0
				}
			},
			marker: {
				enabled: false
			},
			areaspline: {
				marker: {
					enabled: false
				}
			},
            areaspline: {
                fillOpacity: 0.3
            }
        },
		colors: colors,
        series: [{
            name: 'Income',
			marker: {
			   enabled: false
			},
			lineWidth: 0,
            color: chart_data_color_option5,
            data: [2140,1950,4420,1970,4270,3400,5700,3030,3900,4900,3600,4900]
        }, {
            name: 'Expenses',
			marker: {
			   enabled: false
			},
			lineWidth: 0,
            color: chart_data_color_option6,
            data: [3140,1150,3020,870,2170,1700,2700,2230,1900,2750,2100,3000]
        }]
    });
});


// ---------------------------------
// 6. Annual growth
// ---------------------------------
$(function () {
    Highcharts.chart('growth', {
        chart: {
            type: 'column',
			spacingBottom: 0,
			spacingTop: 10,
			spacingLeft: -9,
			spacingRight: 0,
			width: null,
			height: 160,
            backgroundColor: chart_bg,
        },
        title: {
			text: null
		},
		subtitle: {
			text: null
		},
		credits: {
			enabled: false
		},
        xAxis: {
			title: {
                text: 'Months',
                style: {
                    color: chart_grid_text_color,
                }
            },
            labels: {
                style: {
                    color: chart_grid_text_color,
                }
            },
            lineColor: chart_gridlines_color,
            tickColor: chart_gridlines_color,
            categories: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Orders',
                style: {
                    color: chart_grid_text_color,
                }
            },
            labels: {
                style: {
                    color: chart_grid_text_color,
                }
            },
            stackLabels: {
                enabled: false,
                style: {
                    color: chart_grid_text_color,
                }
            },
            gridLineColor: chart_gridlines_color,
            lineColor: chart_gridlines_color,
            tickColor: chart_gridlines_color,
        },
        legend: {
			enabled: false
		},
        tooltip: {
            enabled: false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                }
            }
        },
		series: [{
            name: 'Direct Orders',
			marker: {
			   enabled: false
			},
            color: chart_data_color_option7,
            data: [2140,1950,4420,1970,4270,3400,5700,3030,3900,4900,3600,4900]
        }, {
            name: 'Online Orders',
			marker: {
			   enabled: false
			},
            color: chart_data_color_option8,
            data: [3140,1150,3020,870,2170,1700,2700,2230,1900,2750,2100,3000]
        }]
    });
});


// ---------------------------------
// 7. Website stats
// ---------------------------------
var data_visits = [
[1388538000000, 1.1, 4.7],
[1388624400000, 1.8, 6.4],
[1388710800000, 1.7, 6.9],
[1388797200000, 2.6, 7.4],
[1388883600000, 3.3, 9.3],
[1388970000000, 3.0, 7.9],
[1389056400000, 3.9, 6.0],
[1389142800000, 3.9, 5.5],
[1389229200000, -0.6, 4.5],
[1389315600000, -0.5, 5.3],
[1389402000000, -0.3, 2.4],
[1389488400000, -6.5, -0.4],
[1389574800000, -7.3, -3.4],
[1389661200000, -7.3, -2.3],
[1389747600000, -7.9, -4.2],
[1389834000000, -4.7, 0.9],
[1389920400000, -1.2, 0.4],
[1390006800000, -2.3, -0.1],
[1390093200000, -2.0, 0.3],
[1390179600000, -5.1, -2.0],
[1390266000000, -4.4, -0.5],
[1390352400000, -6.4, -2.7],
[1390438800000, -3.2, -0.5],
[1390525200000, -5.5, -0.8],
[1390611600000, -4.4, 2.4],
[1390698000000, -4.0, 1.1],
[1390784400000, -3.4, 0.8],
[1390870800000, -1.7, 2.6],
[1390957200000, -3.1, 3.9],
[1391043600000, -4.8, -1.9],
[1391130000000, -7.0, -2.8],
[1391216400000, -2.7, 2.6],
[1391302800000, -1.3, 8.2],
[1391389200000, 1.5, 7.7],
[1391475600000, -0.5, 5.3],
[1391562000000, -0.2, 5.2],
[1391648400000, 0.7, 4.8],
[1391734800000, 0.9, 5.7],
[1391821200000, 1.7, 3.9],
[1391907600000, 2.2, 8.8],
[1391994000000, 3.0, 6.6],
[1392080400000, 1.4, 5.4],
[1392166800000, 0.6, 5.1],
[1392253200000, 0.1, 7.8],
[1392339600000, 3.4, 7.3],
[1392426000000, 2.0, 5.9],
[1392512400000, 1.1, 4.7],
[1392598800000, 1.1, 4.4],
[1392685200000, -2.8, 2.6],
[1392771600000, -5.0, 0.1],
[1392858000000, -5.7, 0.2],
[1392944400000, -0.7, 3.9],
[1393030800000, 1.5, 7.8],
[1393117200000, 5.5, 8.8],
[1393203600000, 5.3, 11.7],
[1393290000000, 1.7, 11.1],
[1393376400000, 3.4, 9.3],
[1393462800000, 3.4, 7.3],
[1393549200000, 4.5, 8.0],
[1393635600000, 2.1, 8.9],
[1393722000000, 0.6, 6.1],
[1393808400000, 1.2, 9.4],
[1393894800000, 2.6, 7.3],
[1393981200000, 3.9, 9.5],
[1394067600000, 5.3, 9.9],
[1394154000000, 2.7, 7.1],
[1394240400000, 4.0, 8.6],
[1394326800000, 6.1, 10.7],
[1394413200000, 4.2, 7.6]
];

$(function () {
	Highcharts.chart('stats', {
		chart: {
			type: 'arearange',
			spacingBottom: 0,
			spacingTop: 10,
			spacingLeft: -9,
			spacingRight: 0,
			width: null,
			height: 160,
            backgroundColor: chart_bg,
		},
		title: {
			text: null
		},
		subtitle: {
			text: null
		},
		credits: {
			enabled: false
		},
		xAxis: {
			title: {
				text: 'Months',
                style: {
                    color: chart_grid_text_color,
                }
			},
			labels: {enabled:false},
			lineWidth: 0,
			tickLength: 0,
			gridLineWidth: 0,
			categories: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		},
		yAxis: {
			title: {
				text: 'Visits',
                style: {
                    color: chart_grid_text_color,
                }
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
		legend: {
			enabled: false
		},
        tooltip: {
            enabled: false
        },
		series: [{
			name: 'Visits',
            color: chart_data_color_option7,
			data: data_visits
		}]
	});
});


// ---------------------------------
// 8. World map
// ---------------------------------
$(function() {
	$('.map-world-markers').vectorMap({
		map: 'world_mill_en',
		backgroundColor: 'transparent',
        selectedColor: '#EDEDED',
		scaleColors: ['#EDEDED', '#EDEDED'],
		normalizeFunction: 'polynomial',
		regionStyle: {
			initial: {
				fill: '#EDEDED'
			}
		},
		hoverOpacity: 0.8,
		hoverColor: false,
		markerStyle: {
			initial: {
				r: 8,
				'fill': '#FFFFFF',
				'fill-opacity': 1,
				'stroke': '#4F5467',
				'stroke-width' : 1.5,
				'stroke-opacity': 0.6
			},
			hover: {
				'stroke': '#4F5467',
                'fill': '#4F5467',
				'fill-opacity': 1,
				'stroke-width': 2
			}
		},
		focusOn: {
			x: 0.5,
			y: 0.4,
			scale: 1.6
		},
		markers: [
			{latLng:[40.4637,3.7492],name:"Madrid – Spain"},
            {latLng:[55.7558,37.6173],name:"Moscow – Russia"},
            {latLng:[37.9838,23.7275],name:"Athens – Greece"},
            {latLng:[45.4215,-75.6972],name:"Ottawa – Canada"},
            {latLng:[47.7511,-120.7401],name:"Washington – USA"},
            {latLng:[52.5200,13.4050],name:"Berlin – Germany"},
            {latLng:[35.6895,139.6917],name:"Tokyo – Japan"},
            {latLng:[48.8566,2.3522],name:"Paris – France"},
            {latLng:[28.7041,77.1025],name:"Delhi - India"},
            {latLng:[51.5074,0.1278],name:" London – England"}
		]
	});
});
