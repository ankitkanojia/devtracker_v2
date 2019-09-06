'use strict';
// Scatter chart
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawScatter);

// Chart settings
function drawScatter() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['Age', 'Weight'],
        [ 8,      12],
        [ 4,      6],
        [ 11,     14],
        [ 4,      5],
        [ 3,      3.5],
        [ 6.5,    7],
        [ 7,    10],
        [ 6.5,    12],
        [ 6,    13],
        [ 8,    16],
        [ 12,    17],
        [ 18,    8],
        [ 18,    9],
        [ 16,    12]
    ]);

    // Options
    var options = {
        backgroundColor: chart_bg,
        fontName: 'OpenSans',
        height: 250,
        chartArea: {
            left: '10%',
            width: '100%',
            height: 200
        },
        hAxis: {
            textStyle:{color: chart_grid_text_color},
            minValue: 0,
            maxValue: 15
        },
        vAxis: {
            baselineColor: chart_gridlines_color,
            textStyle:{color: chart_grid_text_color},
            title: 'Weight',
            titleTextStyle: {
                color: chart_grid_text_color,
                italic: false
            },
            gridlines:{
                color: chart_gridlines_color,
                count: 8
            },
            minValue: 0,
            maxValue: 15
        },
        legend: {
            position: 'top',
            alignment: 'center',
            textStyle: {
                color: chart_legends_text_color,
            }
        },
        colors: colors,
        pointSize: 6,
    };

    // Draw chart
    var scatter = new google.visualization.ScatterChart($('#google-scatter')[0]);
    scatter.draw(data, options);
}


// Resize chart
// ------------------------------
$(function () {

    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);

    // Resize function
    function resize() {
        drawScatter();
    }
});
