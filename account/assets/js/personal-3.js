/*! personal-3.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  //Gauge chart
  var welcomeGauge = bb.generate({
    data: {
      columns: [["data", 91.4]],
      type: "gauge",
      onclick: function onclick(d, i) {
        console.log("onclick", d, i);
      },
      onover: function onover(d, i) {
        console.log("onover", d, i);
      },
      onout: function onout(d, i) {
        console.log("onout", d, i);
      }
    },
    gauge: {
      label: {
        // return empty string
        extents: function extents() {
          return "";
        }
      }
    },
    color: {
      pattern: [themeColors.primary, themeColors.secondary, themeColors.green, themeColors.purple],
      threshold: {
        values: [30, 60, 90, 100]
      }
    },
    size: {
      height: 90,
      width: 90
    },
    padding: {
      bottom: 0
    },
    legend: {
      show: false,
      position: "inset"
    },
    bindto: "#welcome-gauge"
  });
  setTimeout(function () {
    welcomeGauge.load({
      columns: [["data", 10]]
    });
  }, 1000);
  setTimeout(function () {
    welcomeGauge.load({
      columns: [["data", 90]]
    });
  }, 2000); //Interviews Chart

  var interviewsOptions = {
    series: [{
      name: 'Interviews',
      data: [31, 40, 28, 51, 42, 109, 100]
    }],
    chart: {
      height: 200,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    colors: [themeColors.accent, themeColors.info, themeColors.orange],
    title: {
      text: 'Interviews',
      align: 'left'
    },
    legend: {
      position: 'top'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2020-09-19T00:00:00.000Z", "2020-09-20T01:30:00.000Z", "2020-09-21T02:30:00.000Z", "2020-09-22T03:30:00.000Z", "2020-09-23T04:30:00.000Z", "2020-09-24T05:30:00.000Z", "2020-09-25T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  };
  var interviewsChart = new ApexCharts(document.querySelector("#interviews-chart"), interviewsOptions);
  interviewsChart.render();
});