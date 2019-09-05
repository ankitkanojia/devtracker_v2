'use strict';
// Area intervals
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawAreaIntervals);

// Chart settings
function drawAreaIntervals() {

    // Data
    var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'values');
        data.addColumn({id:'i0', type:'number', role:'interval'});
        data.addColumn({id:'i1', type:'number', role:'interval'});
        data.addColumn({id:'i2', type:'number', role:'interval'});
        data.addColumn({id:'i2', type:'number', role:'interval'});
        data.addColumn({id:'i2', type:'number', role:'interval'});
        data.addColumn({id:'i2', type:'number', role:'interval'});
    data.addRows([
        ['a', 100, 90, 110, 85, 96, 104, 120],
        ['b', 120, 95, 130, 90, 113, 124, 140],
        ['c', 130, 105, 140, 100, 117, 133, 139],
        ['d', 90, 85, 95, 85, 88, 92, 95],
        ['e', 70, 74, 63, 67, 69, 70, 72],
        ['f', 30, 39, 22, 21, 28, 34, 40],
        ['g', 80, 77, 83, 70, 77, 85, 90],
        ['h', 100, 90, 110, 85, 95, 102, 110]]);

    // The intervals data as areas
    var options_area_intervals = {
        backgroundColor: chart_bg,
        fontName: 'OpenSans',
        height: 300,
        curveType: 'function',
        chartArea: {
            left: '10%',
            width: '100%',
            height: 250
        },
        lineWidth: 2,
        hAxis: {
            textStyle:{color: chart_grid_text_color}
        },
        intervals: { 'style': 'area' }, // Use area intervals.
        pointSize: 6,
        vAxis: {
            baselineColor: chart_gridlines_color,
            textStyle:{color: chart_grid_text_color},
            title: 'Number values',
            titleTextStyle: {
                color: chart_grid_text_color,
                italic: false
            },
            gridlines:{
                color: chart_gridlines_color,
                count: 8
            },
            minValue: 0
        },
        legend: 'none',
        colors: colors
    };

    // Draw chart
    var area_intervals = new google.visualization.LineChart($('#google-area-intervals')[0]);
    area_intervals.draw(data, options_area_intervals);
}


// Resize chart
// ------------------------------
$(function () {
    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);
    // Resize function
    function resize() {
        drawAreaIntervals();
    }
});
