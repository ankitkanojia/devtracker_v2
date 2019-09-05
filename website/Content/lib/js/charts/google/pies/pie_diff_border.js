"use strict";
// Diff pie chart
// ------------------------------

// Initialize chart
google.load("visualization", "1.1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);

// Chart settings
function drawChart() {

    // Old data set
    var oldData = google.visualization.arrayToDataTable([
        ["Major", "Degrees"],
        ["Business", 256070], ["Education", 108034],
        ["Social Sciences & History", 127101], ["Health", 81863],
        ["Psychology", 74194]
    ]);

    // New data set
    var newData = google.visualization.arrayToDataTable([
        ["Major", "Degrees"],
        ["Business", 358293], ["Education", 101265],
        ["Social Sciences & History", 172780], ["Health", 129634],
        ["Psychology", 97216]
    ]);

    // Options
    var options = {
        backgroundColor: chart_bg,
        fontName: "OpenSans",
        legend: {
            textStyle: {
                color: chart_legends_text_color,
            }
        },
        colors: colors,
        height: 200,
        chartArea: {
            left: 50,
            width: "100%",
            height: "100%"
        },
        diff: {
            innerCircle: {
                borderFactor: 0.08
            }
        }
    };

    // Attach chart to the DOM element
    var chartRadius = new google.visualization.PieChart($("#google-pie-diff-border")[0]);

    // Set data
    var diffData = chartRadius.computeDiff(oldData, newData);

    // Draw our chart, passing in some options
    chartRadius.draw(diffData, options);
}