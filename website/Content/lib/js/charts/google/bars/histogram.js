'use strict';
// Histogram
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawHistogram);

// Chart settings
function drawHistogram() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['Dinosaur', 'Length'],
        ['Acrocanthosaurus (top-spined lizard)', 12.2],
        ['Albertosaurus (Alberta lizard)', 9.1],
        ['Allosaurus (other lizard)', 12.2],
        ['Apatosaurus (deceptive lizard)', 22.9],
        ['Archaeopteryx (ancient wing)', 0.9],
        ['Argentinosaurus (Argentina lizard)', 36.6],
        ['Baryonyx (heavy claws)', 9.1],
        ['Brachiosaurus (arm lizard)', 30.5],
        ['Ceratosaurus (horned lizard)', 6.1],
        ['Coelophysis (hollow form)', 2.7],
        ['Compsognathus (elegant jaw)', 0.9],
        ['Deinonychus (terrible claw)', 2.7],
        ['Diplodocus (double beam)', 27.1],
        ['Dromicelomimus (emu mimic)', 3.4],
        ['Gallimimus (fowl mimic)', 5.5],
        ['Mamenchisaurus (Mamenchi lizard)', 21.0],
        ['Megalosaurus (big lizard)', 7.9],
        ['Microvenator (small hunter)', 1.2],
        ['Ornithomimus (bird mimic)', 4.6],
        ['Oviraptor (egg robber)', 1.5],
        ['Plateosaurus (flat lizard)', 7.9],
        ['Sauronithoides (narrow-clawed lizard)', 2.0],
        ['Seismosaurus (tremor lizard)', 45.7],
        ['Spinosaurus (spiny lizard)', 12.2],
        ['Supersaurus (super lizard)', 30.5],
        ['Tyrannosaurus (tyrant lizard)', 15.2],
        ['Ultrasaurus (ultra lizard)', 30.5],
        ['Velociraptor (swift robber)', 1.8]]
    );

    // Options
    var options_histogram = {
        backgroundColor: chart_bg,
        fontName: 'OpenSans',
        height: 300,
        chartArea: {
            left: '10%',
            width: '100%',
            height: 225
        },
        isStacked: true,
        vAxis: {
            baselineColor: chart_gridlines_color,
            textStyle:{color: chart_grid_text_color},
            gridlines:{
                color: chart_gridlines_color,
                count: 6
            },
            title: 'Dinosaur length',
            titleTextStyle: {
                color: chart_grid_text_color,
                italic: false
            },
            minValue: 0
        },
        hAxis: {
            textStyle:{color: chart_grid_text_color},
            gridlines:{
                color: chart_gridlines_color,
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
    var histogram = new google.visualization.Histogram($('#google-histogram')[0]);
    histogram.draw(data, options_histogram);
}


// Resize chart
// ------------------------------
$(function () {

    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);

    // Resize function
    function resize() {
        drawHistogram();
    }
});
