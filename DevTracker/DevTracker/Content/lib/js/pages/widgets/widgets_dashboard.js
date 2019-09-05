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
// 2. Wrold map
// 3. USA map
// 4. Sales chart
// 5. Direct sales/Channel sales
// 6. Expected sales
// 7. Charts
// 8. Server load
// 9. Current stocks
// 10. Website visits
// 11. Social comments
// 12. Activities
// 13. Total leads
// 14. Total sales
// 15. Sales graph
// 16. Weather widget 1
// 17. Weather widget 2


// ---------------------------------
// 1. Earnings
// ---------------------------------
$(function () {
    Highcharts.chart('earnings', {
        chart: {
			renderTo: 'chart',
            type: 'areaspline',
			spacingBottom: 0,
			spacingTop: 20,
			spacingLeft:0,
			spacingRight:-70,
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
            categories: ['2011','2012','2013','2014','2015','2016','2017'],
			tickLength: 0,
			lineWidth: 0,
			gridLineWidth: 0,
            labels: {
                style: {
                    color: chart_grid_text_color,
                }
            },
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
                fillOpacity: 0.5
            }
        },
		series: [{
            name: 'Income',
			marker: {
			   enabled: false
			},
			lineWidth: 0,
            color: chart_data_color_option8,
            data: [0,1600,800,370,570,2400,0]
        }, {
            name: 'Expenses',
			marker: {
			   enabled: false
			},
			lineWidth: 0,
            color: chart_data_color_option7,
            data: [0,900,400,670,400,1700,0]
        }, {
            name: 'Sales',
			marker: {
			   enabled: false
			},
			lineWidth: 0,
            color: chart_data_color_option6,
            data: [0,450,200,150,250,900,0]
        }]
    });
});


$(function() {

    // ---------------------------------
    // 2. Wrold map
    // ---------------------------------
	$('.world-map').vectorMap({
		map: 'world_mill_en',
		backgroundColor: 'transparent',
		normalizeFunction: 'polynomial',
		regionStyle: {
			initial: {
				fill: chart_data_color_option8
			}
		},
		zoomButtons : false,
		hoverOpacity: 0.4,
		hoverColor: false,
		markerStyle: {
			initial: {
				r: 5,
				'fill': chart_data_color_option6,
				'fill-opacity': .8,
				'stroke': chart_data_color_option3,
				'stroke-width' : 8,
				'stroke-opacity': .3
			},
			hover: {
				r: 5,
				'stroke': chart_data_color_option6,
				'fill-opacity': .3,
				'stroke-width': 8,
				'stroke-opacity':1
			}
		},
        focusOn: {
            x: 2.5,
            y: 1.6,
			scale: 3
		},
	});


    // ---------------------------------
    // 3. USA map
    // ---------------------------------
	$('#vmap1').vectorMap({
		map:'usa_en',
		normalizeFunction: 'polynomial',
		regionStyle: {
			initial: {
				fill: chart_data_color_option7
			}
		},
		backgroundColor:null,
		scaleColors: colors_reverse,
		normalizeFunction:'polynomial',
		zoomButtons : false,
		enableZoom: false,
		showTooltip: false,
		zoomOnScroll:false,
		zoomMin:1.33,
		focusOn: {
			x: 2,
            y: 2,
            scale: 1
		}
    });
});


// ---------------------------------
// 4. Sales chart
// ---------------------------------
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawLineChart);
function drawLineChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales'],
        ['2011',  1000],
        ['2012',  1170],
        ['2013',  660],
		['2014',  1400],
        ['2015',  2370],
        ['2016',  1660]
    ]);
    var options = {
		legend: 'none',
		series: {
			0: { color: '#fff' },
		},
        fontName: 'tahoma',
        height: 80,
        curveType: 'function',
        fontSize: 11,
		crosshair:{
			color: '#607D8B',
		},
        chartArea: {
            left: '0%',
            width: '100%',
			backgroundColor:'#9C27B0',
            height: 80
        },
        pointSize:4,
        tooltip: {
            textStyle: {
                fontName: 'tahoma',
                fontSize: 11
            }
        },
        vAxis: {
			baselineColor: '#BA68C8',
            title: 'Sales',
            titleTextStyle: {
                fontSize: 11,
                italic: false
            },
            gridlines:{
                color: '#9C27B0',
                count: 8
            },
            minValue: 0
        },
        legend: {
            position: 'top',
            alignment: 'center',
            textStyle: {
                fontSize: 11
            }
        }
    };
    var line_chart = new google.visualization.LineChart($('#google-line')[0]);
    line_chart.draw(data, options);
}


// ---------------------------------
// 5. Direct sales/Channel sales
// ---------------------------------
$('.chart1').easyPieChart({
	easing: 'easeOutBounce',
	animate: 3500,
	size: 80,
	lineWidth: 10,
	trackColor: chart_gridlines_color,
	barColor: chart_data_color_option6,
	onStep: function(from, to, percent) {
		$(this.el).find('.percent1').text(Math.round(percent));
	}
});
var chart = window.chart = $('.chart1').data('easyPieChart');


// ---------------------------------
// 6. Expected sales
// ---------------------------------
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawColumn1);

function drawColumn1() {
    var data1 = google.visualization.arrayToDataTable([
        ['Year', 'Sales'],
		['2010',  435],
		['2011',  543],
		['2012',  467],
        ['2013',  776],
        ['2014',  1170],
        ['2015',  660],
		['2010',  435],
		['2011',  543],
		['2012',  467],
        ['2013',  776],
        ['2014',  1170],
        ['2015',  660],
		['2011',  543],
		['2012',  467],
        ['2013',  776],
        ['2014',  1170],
        ['2015',  660],
        ['2016',  1030]
    ]);
    var options_column_sales = {
        backgroundColor: chart_bg,
		legend: 'none',
		series: {
			0: { color: chart_data_color_option8 },
		},
        fontName: 'tahoma',
        height: 50,
        fontSize: 12,
        chartArea: {
            left: '0%',
            width: '100%',
            height: 80
        },
        tooltip: {
            trigger: 'none'
        },
        vAxis: {
			baselineColor: chart_bg,
            title: 'Sales',
            titleTextStyle: {
                fontSize: 11,
                italic: false
            },
            gridlines:{
                color: chart_bg,
                count: 7
            },
            minValue: 0
        }
    };
    var column1 = new google.visualization.ColumnChart($('#google-column-sales')[0]);
    column1.draw(data1, options_column_sales);
}


// ---------------------------------
// 7. Charts
// ---------------------------------
$('.chart2').easyPieChart({
	easing: 'easeOutBounce',
	animate: 3500,
	size:80,
	lineWidth:10,
	lineCap:'square',
	trackColor: chart_gridlines_color,
	barColor: chart_data_color_option4,
	onStep: function(from, to, percent) {
		$(this.el).find('.percent1').text(Math.round(percent));
	}
});
var chart = window.chart = $('.chart2').data('easyPieChart');

$('.chart3').easyPieChart({
	easing: 'easeOutBounce',
	animate: 3500,
	size:80,
	lineWidth:10,
	lineCap:'square',
	trackColor: chart_gridlines_color,
	barColor: chart_data_color_option8,
	onStep: function(from, to, percent) {
		$(this.el).find('.percent2').text(Math.round(percent));
	}
});
var chart = window.chart = $('.chart3').data('easyPieChart');

$('.chart4').easyPieChart({
	easing: 'easeOutBounce',
	animate: 3500,
	size:80,
	lineWidth:10,
	lineCap:'square',
	trackColor: chart_gridlines_color,
	barColor: chart_data_color_option7,
	onStep: function(from, to, percent) {
		$(this.el).find('.percent3').text(Math.round(percent));
	}
});
var chart = window.chart = $('.chart4').data('easyPieChart');


// ---------------------------------
// 8. Server load
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
	height: 250,
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
// 9. Current stocks
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
// 10. Website visits
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
// 11. Social comments
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


// ---------------------------------
// 12. Activities
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


// ---------------------------------
// 13. Total leads
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
// 14. Total sales
// ---------------------------------
Highcharts.chart('container3', {
    chart: {
        type: 'areaspline',
        spacingBottom: 0,
        spacingTop: 20,
        spacingLeft: -51,
        spacingRight: -51,
        width: null,
        height: 100,
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
// 15. Sales graph
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


// ---------------------------------
// 16. Weather widget 1
// ---------------------------------
var icon = new Skycons({"color": chart_data_color_option6}),
  list  = [
	"clear-day"
  ],
  i;
for(i = list.length; i--; )
icon.set(list[i], list[i]);
icon.play();

var icons = new Skycons({"color": chart_data_color_option6}),
  list  = [
	"clear-night", "partly-cloudy-day",
	"partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
	"fog"
  ],
  i;
for(i = list.length; i--; )
icons.set(list[i], list[i]);
icons.play();


// ---------------------------------
// 17. Weather widget 2
// ---------------------------------
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('txt').innerHTML =
	h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
	}
	function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}
