'use strict';
// Bubble chart with color scale
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawBubbleGradientChart);

// Chart settings
function drawBubbleGradientChart() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['ID', 'X', 'Y', 'Temperature'],
        ['',   80,  167,      120],
        ['',   79,  136,      130],
        ['',   78,  184,      50],
        ['',   72,  278,      230],
        ['',   81,  200,      210],
        ['',   72,  170,      100],
        ['',   68,  477,      80]
    ]);

    // Optinos
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
            gridlines:{
                color: chart_gridlines_color,
                count: 10
            },
            minValue: 0
        },
        bubble: {
          textStyle: {
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
    var gradient_bubble = new google.visualization.BubbleChart($('#google-bubble-gradient')[0]);
    gradient_bubble.draw(data, options);
}


// Resize chart
// ------------------------------
$(function () {

    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);

    // Resize function
    function resize() {
        drawBubbleGradientChart();
    }
});
