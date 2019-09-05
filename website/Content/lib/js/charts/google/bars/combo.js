'use strict';
// Combo chart
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCombo);

// Chart settings
function drawCombo() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
        ['2004/05',  165,      938,         522,             998,           450,      614.6],
        ['2005/06',  135,      1120,        599,             1268,          288,      682],
        ['2006/07',  157,      1167,        587,             807,           397,      623],
        ['2007/08',  139,      1110,        615,             968,           215,      609.4],
        ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    ]);

    // Options
    var options_combo = {
        backgroundColor: chart_bg,
        fontName: 'OpenSans',
        height: 300,
        chartArea: {
            left: '10%',
            width: '100%',
            height: 225
        },
        seriesType: "bars",
        series: {
            5: {
                type: "line",
                pointSize: 5
            }
        },
        hAxis: {
            textStyle:{color: chart_grid_text_color}
        },
        vAxis: {
            baselineColor: chart_gridlines_color,
            textStyle:{color: chart_grid_text_color},
            gridlines:{
                color: chart_gridlines_color,
                count: 8
            },
            minValue: 0
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
    var combo = new google.visualization.ComboChart($('#google-combo')[0]);
    combo.draw(data, options_combo);
}


// Resize chart
// ------------------------------
$(function () {

    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);

    // Resize function
    function resize() {
        drawCombo();
    }
});
