'use strict';
// Bubble chart
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawBubbleChart);

// Chart settings
function drawBubbleChart() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region'],
        ['CAN',    82.66,              1.67,      'North America'],
        ['DEU',    79.84,              1.36,      'Europe'],
        ['DNK',    70.6,               1.84,      'Europe'],
        ['EGY',    72.73,              2.78,      'Middle East'],
        ['GBR',    75.05,              2,         'Europe'],
        ['IRN',    72.49,              0.7,       'Middle East'],
        ['IRQ',    68.09,              4.77,      'Middle East'],
        ['ISR',    81.55,              3.96,      'Middle East'],
        ['RUS',    68.6,               1.54,      'Europe'],
        ['USA',    78.09,              3.05,      'North America']
    ]);

    // Options
    var options = {
        backgroundColor: chart_bg,
        fontName: 'OpenSans',
        height: 275,
        chartArea: {
            left: '10%',
            width: '100%',
            height: 225
        },
        hAxis: {
            textStyle:{color: chart_grid_text_color}
        },
        vAxis: {
            baselineColor: chart_gridlines_color,
            textStyle:{color: chart_grid_text_color},
            title: 'Fertility Rate',
            titleTextStyle: {
                color: chart_grid_text_color,
                italic: false
            },
            gridlines:{
                color: chart_gridlines_color,
                count: 4
            },
            minValue: 0
        },
        bubble: {
          textStyle: {
            auraColor: 'none',
            color: chart_gridlines_color,
          },
          stroke: chart_gridlines_color
        },
        legend: {
            position: 'top',
            alignment: 'center',
            textStyle: {
                color: chart_legends_text_color,
            }
        },
        colors: colors
    };

    // Draw chart
    var bubble = new google.visualization.BubbleChart($('#google-bubble')[0]);
    bubble.draw(data, options);
}


// Resize chart
// ------------------------------
$(function () {

    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);

    // Resize function
    function resize() {
        drawBubbleChart();
    }
});
