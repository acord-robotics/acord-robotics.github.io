/*! banking-3.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  //Currency Chart
  var options = {
    chart: {
      type: "area",
      height: 350,
      foreColor: "#999",
      stacked: true,
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06
      }
    },
    colors: [themeColors.accent, themeColors.orange, themeColors.orange],
    stroke: {
      curve: "smooth",
      width: 3
    },
    title: {
      text: 'Bitcoin (BTC) Price Chart',
      align: 'left'
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Expected',
      data: generateDayWiseTimeSeries(0, 18)
    }, {
      name: 'Real',
      data: generateDayWiseTimeSeries(1, 18)
    }],
    markers: {
      size: 0,
      strokeColor: "#fff",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6
      }
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        offsetX: 0,
        offsetY: -5
      },
      tooltip: {
        enabled: true
      }
    },
    grid: {
      show: false,
      padding: {
        left: -5,
        right: 5
      }
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy"
      },
      y: {
        formatter: function formatter(val) {
          return val + "%";
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center'
    },
    fill: {
      type: "solid",
      fillOpacity: 0.7
    }
  };
  var chart = new ApexCharts(document.querySelector("#currency-chart"), options);
  chart.render();

  function generateDayWiseTimeSeries(s, count) {
    var values = [[0.4, 0.3, 1, 0.9, 2.9, 1.9, 2.5, 0.9, 1.2, 0.7, 1.9, 0.5, 1.3, 0.9, 1.7, 0.2, 0.7, 0.5], [0.2, 0.3, 0.8, 0.7, 2.2, 1.6, 2.3, 0.7, 1.1, 0.5, 1.2, 0.5, 1, 0.4, 1.5, 0.2, 0.6, 2]];
    var i = 0;
    var series = [];
    var x = new Date("11 Nov 2020").getTime();

    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }

    return series;
  } //Evolution Chart


  var radialOptions = {
    series: [54],
    chart: {
      height: 220,
      type: "radialBar"
    },
    colors: [themeColors.accent, themeColors.orange, themeColors.orange],
    title: {
      text: 'Bitcoin (BTC) Evolution',
      align: 'left'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            offsetY: 15,
            fontSize: "13px",
            fontFamily: 'Roboto, sans-serif',
            color: themeColors.lightText,
            formatter: function formatter() {
              return ["(30 days)"];
            }
          },
          value: {
            color: themeColors.accent,
            offsetY: -20,
            fontSize: "16px",
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500'
          }
        }
      }
    },
    labels: ["Median Ratio"]
  };
  var radialChart = new ApexCharts(document.querySelector("#radial-chart"), radialOptions);
  radialChart.render(); //Gauge Chart

  var gaugeOptions = {
    series: [67],
    title: {
      text: 'Bitcoin (BTC) Popularity'
    },
    chart: {
      height: 225,
      type: 'radialBar',
      toolbar: {
        show: false
      }
    },
    colors: [themeColors.orange, themeColors.secondary],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '13px',
            fontWeight: '600',
            color: themeColors.lightText,
            offsetY: 80
          },
          value: {
            offsetY: 40,
            fontSize: '18px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
            color: undefined,
            formatter: function formatter(val) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      }
    },
    stroke: {
      dashArray: 4
    },
    labels: ['(30 days)']
  };
  var gaugeChart = new ApexCharts(document.querySelector("#radial-gauge"), gaugeOptions);
  gaugeChart.render();
});