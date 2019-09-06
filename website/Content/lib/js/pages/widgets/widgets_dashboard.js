//----------------------------------
//   File          : js/pages/widgets/widgets_dashboard.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Earnings



// ---------------------------------
// 1. Server load
// ---------------------------------
var seriesData = [ [], [] ];
var random = new Rickshaw.Fixtures.RandomData(50);
for (var i = 0; i < 50; i++) {
	random.addData(seriesData);
}
var palette = new Rickshaw.Color.Palette( { scheme: 'classic9' } );
var graph = new Rickshaw.Graph( {
	element: document.getElementById("chart0"),
	width: null,
	height: 310,
	renderer: 'area',
	preserve: true,
	stroke: false,
	backgroundcolor: chart_bg,
	series: [
		{
			color: '#607D8B',
			data: seriesData[0],
			name: 'Web Server'
		}, {
			color: '#90A4AE',
			data: seriesData[1],
			name: 'DB Server'
		}
	]
} );
graph.render();
var hoverDetail = new Rickshaw.Graph.HoverDetail( {
	graph: graph,
	xFormatter: function(x) {
		return new Date(x * 1000).toString();
	}
} );
var legend = new Rickshaw.Graph.Legend( {
	graph: graph,
	element: document.getElementById('legend')
} );
var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
	graph: graph,
	legend: legend
} );
var smoother = new Rickshaw.Graph.Smoother( {
	graph: graph,
	element: document.querySelector('#smoother')
} );
var ticksTreatment = 'glow';
var xAxis = new Rickshaw.Graph.Axis.Time( {
	graph: graph,
	ticksTreatment: ticksTreatment,
	timeFixture: new Rickshaw.Fixtures.Time.Local()
} );
xAxis.render();
var yAxis = new Rickshaw.Graph.Axis.Y( {
	graph: graph,
	tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
	ticksTreatment: ticksTreatment
} );
yAxis.render();
setInterval( function() {
	random.removeData(seriesData);
	random.addData(seriesData);
	graph.update();
}, 1000 );


// ---------------------------------
// 2. Current stocks
// ---------------------------------
var seriesData1 = [ [], [], [] ];
var random1 = new Rickshaw.Fixtures.RandomData(150);

for (var i = 0; i < 70; i++) {
	random1.addData(seriesData1);
}

var graph1 = new Rickshaw.Graph( {
	element: document.getElementById("stocks"),
	width: null,
	height: 100,
	renderer: 'bar',
	series: [
		{
			color: "#AB47BC",
			data: seriesData1[0],
		}, {
			color: "#29B6F6",
			data: seriesData1[1],
		}, {
			color: "#EEEEEE",
			data: seriesData1[2],
		}
	]
} );
graph1.render();


// ---------------------------------
// 3. Website visits
// ---------------------------------
var seriesData2 = [ []];
var random2 = new Rickshaw.Fixtures.RandomData(200);
for (var i = 0; i < 100; i++) {
	random2.addData(seriesData2);
}
var graph2 = new Rickshaw.Graph( {
	element: document.getElementById("chart2"),
	width: null,
	height: 70,
	renderer: 'area',
	series: [
		{
			color: "#4DD0E1",
			data: seriesData2[0],
			name: 'New York'
		}
	]
} );
graph2.render();


// ---------------------------------
// 4. Social comments
// ---------------------------------
Morris.Donut({
	element: 'social_graph',
	height: 150,
	data: [
	{value: 60, label: 'Likes'},
	{value: 25, label: 'Comments'},
	{value: 15, label: 'Shares'},
	],
	colors: colors,
	formatter: function (x) { return x + "%"}
})
$(".GaugeMeter").gaugeMeter();


Morris.Bar({
  element: 'morris_bar_example',
  data: [
	{ y: 'Jun', a: 20, b: 26 },
	{ y: 'Jul', a: 26,  b: 36 },
	{ y: 'Aug', a: 30,  b: 43 },
	{ y: 'Sep', a: 40,  b: 49 },
	{ y: 'Oct', a: 32,  b: 40 },
	{ y: 'Nov', a: 35,  b: 47 },
	{ y: 'Dec', a: 28, b: 40 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Direct', 'Refferal'],
  barColors:colors,
  hideHover: 'auto',
  gridLineColor: '#eef0f2',
});


// ---------------------------------
// 5. Total leads
// ---------------------------------
Highcharts.chart('leads', {
    chart: {
        type: 'spline',
		spacingBottom: 0,
		spacingTop: 0,
		spacingLeft: -10,
		spacingRight: -10,
		marginLeft:-10,
		marginRight:-10,
		backgroundColor: null,
        height: 60,
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
		//showSymbol: false,
		color:'#fff',
        data: [12,23,21,19,34,25,9,24,13,19,39,54]
    }],
});



Highcharts.chart('weekly_users', {
    chart: {
        type: 'spline',
		spacingBottom: 0,
		spacingTop: 0,
		spacingLeft: -10,
		spacingRight: -10,
		marginLeft:-10,
		marginRight:-10,
		backgroundColor: null,
        height: 60,
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
		name: 'Weekly Users',
		//showSymbol: false,
		color:'#fff',
        data: [12,23,21,19,34,25,9,24,13,19,39,54]
    }],
});


Highcharts.chart('views', {
    chart: {
        type: 'spline',
		spacingBottom: 0,
		spacingTop: 0,
		spacingLeft: 0,
		spacingRight: 0,
		marginLeft:0,
		marginRight:20,
		backgroundColor: null,
        height: 40,
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
		name: 'Views',
		//showSymbol: false,
		color:'#008697',
        data: [12,23,21,19,34,25,19,24,13,19,39,44]
    }],
});


Highcharts.chart('comments', {
    chart: {
        type: 'spline',
		spacingBottom: 0,
		spacingTop: 0,
		spacingLeft: 0,
		spacingRight: 0,
		marginLeft:0,
		marginRight:20,
		backgroundColor: null,
        height: 40,
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
		name: 'Comments',
		//showSymbol: false,
		color:'#61186D',
        data: [24,19,21,25,34,25,35,40,32,18,27,19]
    }],
});


Highcharts.chart('likes', {
    chart: {
        type: 'spline',
		spacingBottom: 0,
		spacingTop: 0,
		spacingLeft: 0,
		spacingRight: 0,
		marginLeft:0,
		marginRight:20,
		backgroundColor: null,
        height: 40,
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
		name: 'Likes',
		//showSymbol: false,
		color:'#00443E',
        data: [14,19,27,20,34,25,40,22,32,18,33,42]
    }],
});


Highcharts.chart('social', {
	chart: {
		type: 'areaspline',
		spacingBottom: -10,
		spacingTop: 40,
		spacingLeft: -40,
		spacingRight: -20,
		marginLeft: -20,
		marginRight: -20,
		width: null,
		height: 295,
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
		name: 'New Page Likes',
		marker: {
		   enabled: false
		},
		lineWidth: 0,
		color: chart_data_color_option2,
		data: [2140,1950,4420,1970,4270,3400,5700,3030,3900,4900,3600,4900]
	}, {
		name: 'Post Reaches',
		marker: {
		   enabled: false
		},
		lineWidth: 0,
		color: chart_data_color_option6,
		data: [3140,1150,3020,870,2170,1700,2700,2230,1900,2750,2100,3000]
	}]
});


// ---------------------------------
// 6. Total sales
// ---------------------------------
Highcharts.chart('sales', {
    chart: {
        type: 'column',
		spacingBottom: 0,
		spacingTop: 0,
		spacingLeft: -10,
		spacingRight: -10,
		marginLeft:-10,
		marginRight:-10,
		backgroundColor: null,
        height: 60,
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
    series: [{
        name: 'Sales',
        color: '#fff',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    }]
});


// ---------------------------------
// 7. Sales graph
// ---------------------------------
Highcharts.chart('container3', {
    chart: {
        type: 'areaspline',
        spacingBottom: 0,
        spacingTop: 20,
        spacingLeft: -51,
        spacingRight: -51,
        width: null,
        height: 140,
        backgroundColor:'#4FC3F7',
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
        gridLineWidth: 0,
        labels: {enabled:false},
    },
    tooltip: {
        enabled: false
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
            fillOpacity: 0.6
        }
    },
    colors: colors,
    series: [{
        name: 'Income',
        marker: {
           enabled: false
        },
        lineWidth: 0,
        data: [2140,1950,4420,1970,4270,3400,5700,3030,3900,4900,3600,4900]
    }]
});


// ---------------------------------
// 8. Sales graph
// ---------------------------------
Highcharts.chart('sales1', {
    chart: {
        type: 'column',
		spacingBottom: 0,
		spacingTop: 0,
		spacingLeft: 0,
		spacingRight: 0,
		marginLeft:0,
		marginRight:0,
		marginTop:10,
		marginBottom:0,
		backgroundColor: null,
		height:45,
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
    series: [{
        name: 'Sales',
        color: chart_data_color_option6,
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    }]
});
