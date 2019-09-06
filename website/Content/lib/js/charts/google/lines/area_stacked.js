'use strict';
// Stacked area
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawAreaStackedChart);

// Chart settings
function drawAreaStackedChart() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Cars', 'Trucks', 'Drones', 'Segways'],
        ['2013',  870,  460, 310, 220],
        ['2014',  460,   720, 220, 460],
        ['2015',  930,  640, 340, 330],
        ['2016',  1000,  400, 180, 500]
    ]);

    // Options
    var options_area_stacked = {
        backgroundColor: chart_bg,
        fontName: 'OpenSans',
        height: 300,
        curveType: 'function',
        areaOpacity: 0.4,
        chartArea: {
            left: '10%',
            width: '100%',
            height: 225
        },
        isStacked: true,
        pointSize: 6,
        lineWidth: 1.5,
        hAxis: {
            textStyle:{color: chart_grid_text_color}
        },
        vAxis: {
            baselineColor: chart_gridlines_color,
            textStyle:{color: chart_grid_text_color},
            title: 'Number values',
            titleTextStyle: {
                italic: false,
                color: chart_grid_text_color
            },
            gridlines:{
                color: chart_gridlines_color,
                count: 4
            },
            minValue: 0
        },
        legend: {
            position: 'top',
            alignment: 'end',
            textStyle: {
                color: chart_legends_text_color
            }
        },
        colors: colors
    };
    // Draw chart
    var area_stacked_chart = new google.visualization.AreaChart($('#google-area-stacked')[0]);
    area_stacked_chart.draw(data, options_area_stacked);
}


// Resize chart
// ------------------------------
$(function () {
    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);
    // Resize function
    function resize() {
        drawAreaStackedChart();
    }
});
