/*! personal-1.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  //customers chart
  var customersOptions = {
    series: [{
      name: 'Returning',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Newcomers',
      data: [11, 32, 45, 32, 34, 52, 41]
    }, {
      name: 'Abandonned',
      data: [78, 53, 36, 10, 14, 5, 2]
    }],
    chart: {
      height: 295,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    colors: [themeColors.accent, themeColors.info, themeColors.orange],
    title: {
      text: 'Customers',
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
  var customersChart = new ApexCharts(document.querySelector("#customers-chart"), customersOptions);
  customersChart.render(); //gauge chart

  var teamGaugeOptions = {
    series: [76],
    title: {
      text: 'Team Efficiency'
    },
    chart: {
      height: 345,
      type: 'radialBar',
      sparkline: {
        enabled: true
      },
      toolbar: {
        show: false
      }
    },
    colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: '97%',
          margin: 5,
          // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2
          }
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: '22px'
          }
        }
      }
    },
    grid: {
      padding: {
        top: 80
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91]
      }
    },
    labels: ['Average Results']
  };
  var teamGauge = new ApexCharts(document.querySelector("#team-gauge"), teamGaugeOptions);
  teamGauge.render(); //Profit Chart

  var profitChartOptions = {
    series: [{
      name: 'Ratio',
      data: [2.3, 3.1, 4.0, 10.1, 4.0]
    }],
    chart: {
      height: 262,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top' // top, center, bottom

        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function formatter(val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    xaxis: {
      categories: ["May", "Jun", "Jul", "Aug", "Sep"],
      position: 'top',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        formatter: function formatter(val) {
          return val + "%";
        }
      }
    },
    colors: [themeColors.green, themeColors.secondary, themeColors.orange],
    title: {
      text: 'Profit Evolution',
      align: 'left'
    }
  };
  var profitChart = new ApexCharts(document.querySelector("#profit-chart"), profitChartOptions);
  profitChart.render();
});