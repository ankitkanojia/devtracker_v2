'use strict';
// Area
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawAreaChart);

// Chart settings
function drawAreaChart() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       1120],
        ['2007',  1030,      540]
    ]);

    // Options
    var options = {
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
        pointSize: 6,
        hAxis: {
            textStyle:{color: chart_grid_text_color}
        },
        vAxis: {
            baselineColor: chart_gridlines_color,
            textStyle:{color: chart_grid_text_color},
            title: 'Sales and Expenses',
            titleTextStyle: {
                italic: false,
                color: chart_grid_text_color
            },
            gridlines:{
                color: chart_gridlines_color,
                count: 4
            },
            gridarea:{
                color: chart_gridlines_color,
                count: 8
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
    var area_chart = new google.visualization.AreaChart($('#google-area')[0]);
    area_chart.draw(data, options);
}


// Resize chart
// ------------------------------
$(function () {
    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);
    // Resize function
    function resize() {
        drawAreaChart();
    }
});
