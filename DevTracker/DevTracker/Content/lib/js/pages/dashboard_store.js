//----------------------------------
//   File          : js/pages/dashboard_store.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Sales report
// 2. Top products
// 3. Latest trends

// ---------------------------------
// 1. Sales report
// ---------------------------------
Highcharts.chart('sales', {
    chart: {
        width: null,
        height: 245,
        spacingRight: 0,
        spacingLeft: 0,
        backgroundColor: chart_bg,
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
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
            text: 'Dollars in thousands',
            style: {
                color: chart_grid_text_color,
            }
        }
    },
    xAxis: {
        gridLineWidth: 0,
        lineColor: chart_gridlines_color,
        tickColor: chart_gridlines_color,
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
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
                enabled: true
            },
        }
    },
    series: [{
        name: 'This year',
        color: chart_data_color_option1,
        data: [20, 24, 19, 15, 17.5, 21.5, 21.2, 23.5, 18.3, 16.3, 22, 19.6]
    }, {
        name: 'All time',
        color: chart_data_color_option2,
        data: [24, 29, 21.5, 17, 15.5, 19.5, 23.2, 28, 16.1, 19.1, 20, 21.4]
    }]
});
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawExplodedDonut);


// ---------------------------------
// 2. Top products
// ---------------------------------
function drawExplodedDonut() {
    var data = google.visualization.arrayToDataTable([
        ['Products', 'Sales (in hundreds)'],
        ['Assamese', 33],
        ['Bengali', 43],
        ['Gujarati', 46],
        ['Hindi', 90],
        ['Kannada', 38],
        ['Maithili', 20],
        ['Malayalam', 33],
        ['Marathi', 72]
    ]);

    var options_donut_exploded = {
        backgroundColor: chart_bg,
        fontName: 'OpenSans',
        legend: {
            textStyle: {
                color: chart_legends_text_color,
            }
        },
        colors: colors,
        height: 170,
        width: null,
        chartArea: {
            left: -50,
            width: '90%',
            height: '90%'
        },
        pieHole: 0.5,
        pieSliceText: 'none',
        slices: {
            1: {offset: 0.05},
            4: {offset: 0.15},
            2: {offset: 0.15},
            5: {offset: 0.25}
        }
    };
    var donut_exploded = new google.visualization.PieChart($('#google-donut-exploded')[0]);
    donut_exploded.draw(data, options_donut_exploded);
}


// ---------------------------------
// 3. Latest trends
// ---------------------------------
Highcharts.SparkLine = function (a, b, c) {
    var hasRenderToArg = typeof a === 'string' || a.nodeName,
        options = arguments[hasRenderToArg ? 1 : 0],
        defaultOptions = {
            chart: {
                renderTo: (options.chart && options.chart.renderTo) || this,
                backgroundColor: null,
                borderWidth: 0,
                type: 'areaspline',
                margin: [0, 0, 0, 0],
                width: 130,
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
                    text: null,
                },
                startOnTick: false,
                endOnTick: false,
                tickPositions: [],
                gridLineWidth: 0,
    			lineColor: chart_gridlines_color,
    			tickColor: chart_gridlines_color,
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
                tickPositions: [0],
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
                series: {
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
                    negativeColor: '#910000',
                    borderColor: 'silver'
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
