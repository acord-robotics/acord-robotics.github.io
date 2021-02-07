/*! lifestyle-3.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  //Overall Condition Chart
  var overallChartOptions = {
    series: [{
      name: "Condition (pt)",
      data: [31, 40, 28, 51, 42, 109, 100]
    }],
    chart: {
      type: 'area',
      height: 280,
      offsetX: 20,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'straight'
    },
    colors: [themeColors.accent],
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
  };
  var overallChart = new ApexCharts(document.querySelector("#overall-chart"), overallChartOptions);
  overallChart.render(); //Energy Chart

  function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];

    while (i < count) {
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }

    return series;
  }

  var energyChartOptions = {
    series: [{
      name: 'Tonic',
      data: generateDayWiseTimeSeries(new Date('Oct 11 2020 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    }, {
      name: 'Tantra',
      data: generateDayWiseTimeSeries(new Date('Oct 11 2020 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    }, {
      name: 'Vital',
      data: generateDayWiseTimeSeries(new Date('Oct 11 2020 GMT').getTime(), 30, {
        min: 10,
        max: 60
      })
    }],
    chart: {
      height: 280,
      type: 'scatter',
      zoom: {
        type: 'xy'
      },
      toolbar: {
        show: false
      }
    },
    colors: [themeColors.accent, themeColors.primary, themeColors.purple],
    dataLabels: {
      enabled: false,
      show: false
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      show: false,
      type: 'datetime'
    },
    yaxis: {
      show: false,
      max: 70
    },
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'center'
    }
  };
  var energyChart = new ApexCharts(document.querySelector("#energy-chart"), energyChartOptions);
  energyChart.render(); //Oxygenation Chart

  var oxygenChartOptions = {
    series: [{
      name: 'Variation (pt)',
      data: [23, 26, 10, 7, 11, 18, 16]
    }],
    chart: {
      height: 280,
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
    grid: {
      show: false
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
    colors: [themeColors.accent]
  };
  var oxygenChart = new ApexCharts(document.querySelector("#oxygen-chart"), oxygenChartOptions);
  oxygenChart.render(); //Overall Progress Chart

  var progressChartOptions = {
    series: [{
      name: "Progress (pt)",
      data: [31, 40, 28, 51, 42, 109, 100]
    }],
    chart: {
      type: 'area',
      height: 280,
      offsetX: 20,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth'
    },
    colors: [themeColors.accent],
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
  };
  var progressChart = new ApexCharts(document.querySelector("#progress-chart"), progressChartOptions);
  progressChart.render();
});