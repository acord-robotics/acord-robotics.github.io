/*! finance-1.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  //Revenue Chart
  var revenueOptions = {
    series: [{
      name: "Revenue",
      data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648]
    }],
    chart: {
      height: 250,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: [themeColors.accent],
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth'
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'],
        // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
    },
    tooltip: {
      y: {
        formatter: function formatter(val) {
          return "$" + val;
        }
      }
    }
  };
  var revenueChart = new ApexCharts(document.querySelector("#revenue-chart"), revenueOptions);
  revenueChart.render(); //Gauge goal chart

  var gaugeOptions = {
    series: [57, 86],
    chart: {
      height: 220,
      type: "radialBar",
      offsetY: -10
    },
    colors: [themeColors.accent, themeColors.purple],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        inverseOrder: true,
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "14px",
            fontWeight: 500,
            offsetY: -10
          },
          value: {
            show: true,
            fontWeight: 600,
            color: themeColors.lightText,
            fontSize: "16px",
            offsetY: -5
          },
          total: {
            show: true,
            fontSize: "14px",
            fontWeight: 500,
            color: themeColors.lightText
          }
        },
        hollow: {
          margin: 15,
          size: "75%"
        },
        track: {
          strokeWidth: '100%'
        }
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Efficiency", "Productivity"]
  };
  var goalChart = new ApexCharts(document.querySelector("#goal-gauge"), gaugeOptions);
  goalChart.render(); //Profit bar chart

  var series = [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }];
  series = series.map(function (s) {
    return {
      name: s.name,
      data: s.data.map(function (d) {
        return d - 70;
      })
    };
  });
  var barOptions = {
    chart: {
      height: 250,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    colors: [themeColors.accent, themeColors.purple, themeColors.orange],
    legend: {
      position: 'top'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '55%'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: series,
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
    },
    yaxis: {
      labels: {
        formatter: function formatter(val) {
          return val + 70;
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function formatter(val) {
          return val + 70;
        }
      }
    }
  };
  var barChart = new ApexCharts(document.querySelector("#profit-chart"), barOptions);
  barChart.render(); //Growth radial chart

  var optionsCircle = {
    series: [65],
    chart: {
      height: 160,
      type: 'radialBar',
      toolbar: {
        show: false
      }
    },
    colors: [themeColors.purple],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '75%'
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "14px",
            fontWeight: 500,
            offsetY: -10,
            color: themeColors.lightText
          },
          value: {
            show: true,
            fontWeight: 600,
            color: themeColors.purple,
            fontSize: "16px",
            offsetY: -5
          }
        }
      }
    },
    labels: ['Growth']
  };
  var radialCircle = new ApexCharts(document.querySelector("#radial-circle"), optionsCircle);
  radialCircle.render();
});