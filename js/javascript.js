//For Charts
window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Revenue Trend"
        },
        axisY: {
            title: "Revenue"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            legendText: "Dates for Nov 2019",
            dataPoints: [
                { y: 50, label: "1" },
                { y: 500, label: "5" },
                { y: 2800, label: "6" },
                { y: 2700, label: "7" },
                { y: 7500, label: "11" },
                { y: 600, label: "12" },
                { y: 700, label: "20" }
            ]
        }]
    });
    chart.render();

}