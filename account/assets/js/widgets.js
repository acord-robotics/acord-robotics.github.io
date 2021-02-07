/*! widgets.js | Huro | Css ninja 2020-2021 */

/*
    1. Gauge Widget (UI Widgets)
    2. Trend Widget (UI Widgets)
    3. Social Bar Widget (UI Widgets)
    4. Line Stats Widget (Stat Widgets)
    5. Area Stats Widget (Stat Widgets)
    6. Spark Tile Widget (Stat Widgets)
    7. Flex Stat Widget (Stat Widgets)
    8. Grouped Stat Widget (Stat Widgets)
*/
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

$(document).ready(function () {
  /* ==========================================================================
  1. Gauge Widget (UI Widgets)
  ========================================================================== */
  if ($('#gauge-holder').length) {
    var gaugeWidgetChart = bb.generate({
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
      gauge: {},
      color: {
        pattern: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple],
        threshold: {
          values: [30, 60, 90, 100]
        }
      },
      size: {
        height: 120
      },
      padding: {
        bottom: 20
      },
      legend: {
        show: false,
        position: "inset"
      },
      bindto: "#gauge-holder"
    });
    setTimeout(function () {
      gaugeWidgetChart.load({
        columns: [["data", 10]]
      });
    }, 1000);
    setTimeout(function () {
      gaugeWidgetChart.load({
        columns: [["data", 50]]
      });
    }, 2000);
    setTimeout(function () {
      gaugeWidgetChart.load({
        columns: [["data", 70]]
      });
    }, 3000);
    setTimeout(function () {
      gaugeWidgetChart.load({
        columns: [["data", 0]]
      });
    }, 4000);
    setTimeout(function () {
      gaugeWidgetChart.load({
        columns: [["data", 100]]
      });
    }, 5000);
  }
  /* ==========================================================================
  2. Trend Widget (UI Widgets)
  ========================================================================== */


  if ($('#trend-chart').length) {
    var options6 = {
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }],
      chart: {
        height: '200px',
        width: '100%',
        type: 'line',
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.purple, themeColors.orange],
      grid: {
        show: false,
        padding: {
          left: -20,
          right: 0
        }
      },
      padding: {
        bottom: 0,
        left: 0,
        right: 0
      },
      legend: {
        show: false,
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
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false,
          offsetX: -40
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    };
    var trendWidgetChart = new ApexCharts(document.querySelector("#trend-chart"), options6);
    trendWidgetChart.render();
  }
  /* ==========================================================================
  3. Social Bar Widget (UI Widgets)
  ========================================================================== */


  $('.social-buttons-widget .inner-button').on('click', function () {
    var $container = $(this).closest('.social-buttons-widget');
    $container.find('.inner-button').removeClass('is-active');
    $(this).addClass('is-active');
  });
  /* ==========================================================================
  4. Line Stats Widget (Stat Widgets)
  ========================================================================== */

  if ($('#line-stats-widget-chart').length) {
    var lineStatsChartOptions = {
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
    var lineStatsChart = new ApexCharts(document.querySelector("#line-stats-widget-chart"), lineStatsChartOptions);
    lineStatsChart.render();
  }
  /* ==========================================================================
  5. Area Stats Widget (Stat Widgets)
  ========================================================================== */


  if ($('#area-stats-widget-chart').length) {
    var areaStatsChartOptions = {
      series: [{
        name: 'Returning',
        data: [318.42, 407.16, 284.12, 517.00, 452.45, 1209.34, 1010.11]
      }, {
        name: 'Newcomers',
        data: [112.42, 324.45, 457.5, 312.75, 342.45, 527.56, 414.75]
      }, {
        name: 'Abandonned',
        data: [787.89, 534.46, 365.78, 107.45, 145.78, 54.42, 27.12]
      }],
      chart: {
        height: 250,
        type: 'area',
        offsetY: -10,
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.info, themeColors.orange],
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        show: false
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
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val;
          }
        }
      }
    };
    var areaStatsChart = new ApexCharts(document.querySelector("#area-stats-widget-chart"), areaStatsChartOptions);
    areaStatsChart.render();
  }
  /* ==========================================================================
  6. Spark Tile Widget (Stat Widgets)
  ========================================================================== */


  if ($('.spark-tile-widget').length) {
    Apex.grid = {
      padding: {
        right: 0,
        left: 0
      }
    };
    Apex.dataLabels = {
      enabled: false
    }; //Array Utility

    var randomizeArray = function randomizeArray(arg) {
      var array = arg.slice();
      var currentIndex = array.length,
          temporaryValue,
          randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }; // data for the sparklines that appear below header area


    var sparklineWidgetData = [472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415, 358, 271, 932, 534, 615, 278, 546, 435, 192, 465]; //Spark 1

    if ($('#widget-spark-1').length) {
      var sparkWidget1 = {
        chart: {
          id: 'sparklineWidget1',
          group: 'sparklines',
          type: 'area',
          height: 130,
          sparkline: {
            enabled: true
          }
        },
        colors: [themeColors.orange],
        stroke: {
          width: [2],
          curve: 'straight'
        },
        fill: {
          opacity: 1
        },
        series: [{
          name: 'Total Sales',
          data: randomizeArray(sparklineWidgetData)
        }],
        labels: [].concat(_toConsumableArray(Array(24).keys())).map(function (n) {
          return "2020-10-0" + (n + 1);
        }),
        yaxis: {
          min: 0
        },
        xaxis: {
          type: 'datetime'
        },
        title: {
          text: 'Total Sales',
          offsetX: 5,
          style: {
            fontSize: '24px',
            cssClass: 'apexcharts-yaxis-title',
            color: themeColors.lightText
          }
        },
        subtitle: {
          text: '9,374',
          offsetX: 5,
          style: {
            fontSize: '24px',
            fontWeight: '600',
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      };
      new ApexCharts(document.querySelector("#widget-spark-1"), sparkWidget1).render();
    } //Spark 2


    if ($('#widget-spark-2').length) {
      var sparkWidget2 = {
        chart: {
          id: 'sparklineWidget2',
          group: 'sparklines',
          type: 'area',
          height: 130,
          sparkline: {
            enabled: true
          }
        },
        colors: [themeColors.info],
        stroke: {
          width: [2],
          curve: 'straight'
        },
        fill: {
          opacity: 1
        },
        series: [{
          name: 'Total Profit',
          data: randomizeArray(sparklineWidgetData)
        }],
        labels: [].concat(_toConsumableArray(Array(24).keys())).map(function (n) {
          return "2020-10-0" + (n + 1);
        }),
        yaxis: {
          min: 0
        },
        xaxis: {
          type: 'datetime'
        },
        title: {
          text: 'Total Profit',
          offsetX: 5,
          style: {
            fontSize: '24px',
            cssClass: 'apexcharts-yaxis-title',
            color: themeColors.lightText
          }
        },
        subtitle: {
          text: '$24,273.31',
          offsetX: 5,
          style: {
            fontSize: '24px',
            fontWeight: '600',
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      };
      new ApexCharts(document.querySelector("#widget-spark-2"), sparkWidget2).render();
    } //Spark 3


    if ($('#widget-spark-3').length) {
      var sparkWidget3 = {
        chart: {
          id: 'sparklineWidget3',
          group: 'sparklines',
          type: 'area',
          height: 130,
          sparkline: {
            enabled: true
          }
        },
        colors: [themeColors.accent],
        stroke: {
          width: [2],
          curve: 'straight'
        },
        fill: {
          opacity: 1
        },
        series: [{
          name: 'Total Orders',
          data: randomizeArray(sparklineWidgetData)
        }],
        labels: [].concat(_toConsumableArray(Array(24).keys())).map(function (n) {
          return "2020-10-0" + (n + 1);
        }),
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          min: 0
        },
        title: {
          text: 'Total Orders',
          offsetX: 5,
          style: {
            fontSize: '24px',
            cssClass: 'apexcharts-yaxis-title',
            color: themeColors.lightText
          }
        },
        subtitle: {
          text: '4,361',
          offsetX: 5,
          style: {
            fontSize: '24px',
            fontWeight: '600',
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      };
      new ApexCharts(document.querySelector("#widget-spark-3"), sparkWidget3).render();
    } //Spark 4


    if ($('#widget-spark-4').length) {
      var sparkWidget4 = {
        chart: {
          id: 'sparklineWidget3',
          group: 'sparklines',
          type: 'area',
          height: 130,
          sparkline: {
            enabled: true
          }
        },
        colors: [themeColors.green],
        stroke: {
          width: [2],
          curve: 'straight'
        },
        fill: {
          opacity: 1
        },
        series: [{
          name: 'Consolidated Profit',
          data: randomizeArray(sparklineWidgetData)
        }],
        labels: [].concat(_toConsumableArray(Array(24).keys())).map(function (n) {
          return "2020-10-0" + (n + 1);
        }),
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          min: 0
        },
        title: {
          text: 'Consolidated Profit',
          offsetX: 5,
          style: {
            fontSize: '24px',
            fontWeight: '500',
            cssClass: 'apexcharts-yaxis-title',
            color: themeColors.lightText
          }
        },
        subtitle: {
          text: '$16,264.37',
          offsetX: 5,
          style: {
            fontSize: '24px',
            fontWeight: '600',
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      };
      new ApexCharts(document.querySelector("#widget-spark-4"), sparkWidget4).render();
    }
  }
  /* ==========================================================================
  7. Flex Stat Widget (Stat Widgets)
  ========================================================================== */


  if ($('#flex-stat-circle').length) {
    var flexStatCircleOptions = {
      series: [65],
      chart: {
        height: 130,
        type: 'radialBar',
        offsetX: -10,
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
              show: false,
              fontSize: "12px",
              fontWeight: 400,
              offsetY: 5,
              color: themeColors.lightText
            },
            value: {
              show: true,
              fontWeight: 600,
              fontFamily: 'Roboto, sans-serif',
              color: themeColors.purple,
              fontSize: "16px",
              offsetY: 5
            }
          }
        }
      },
      labels: ['Progress']
    };
    var flexStatCircle = new ApexCharts(document.querySelector("#flex-stat-circle"), flexStatCircleOptions);
    flexStatCircle.render();
  }

  if ($('#flex-stat-radial').length) {
    var flexStatRadialOptions = {
      series: [65],
      chart: {
        height: 160,
        type: 'radialBar',
        offsetX: -15,
        offsetY: -10,
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.info, themeColors.secondary],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '13px',
              fontWeight: '600',
              color: themeColors.lightText,
              show: false
            },
            value: {
              offsetY: 5,
              fontSize: '16px',
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
    var flexStatRadial = new ApexCharts(document.querySelector("#flex-stat-radial"), flexStatRadialOptions);
    flexStatRadial.render();
  }
  /* ==========================================================================
  8. Grouped Stat Widget (Stat Widgets)
  ========================================================================== */


  if ($('.chart-group').length) {
    if ($('#widget-group-radial-1').length) {
      //Small Radial 1
      var widgetRadialGroup1Options = {
        series: [31],
        chart: {
          height: 80,
          type: 'radialBar',
          offsetY: -10,
          toolbar: {
            show: false
          }
        },
        colors: [themeColors.info],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '35%'
            },
            dataLabels: {
              show: false
            }
          }
        },
        labels: ['']
      };
      var widgetRadialGroup1 = new ApexCharts(document.querySelector("#widget-group-radial-1"), widgetRadialGroup1Options);
      widgetRadialGroup1.render();
    }

    if ($('#widget-group-radial-2').length) {
      //Small Radial 2
      var widgetRadialGroup2Options = {
        series: [53],
        chart: {
          height: 80,
          type: 'radialBar',
          offsetY: -10,
          toolbar: {
            show: false
          }
        },
        colors: [themeColors.orange],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '35%'
            },
            dataLabels: {
              show: false
            }
          }
        },
        labels: ['']
      };
      var widgetRadialGroup2 = new ApexCharts(document.querySelector("#widget-group-radial-2"), widgetRadialGroup2Options);
      widgetRadialGroup2.render();
    }

    if ($('#widget-group-radial-3').length) {
      //Small Radial 3
      var widgetRadialGroup3Options = {
        series: [84],
        chart: {
          height: 80,
          type: 'radialBar',
          offsetY: -10,
          toolbar: {
            show: false
          }
        },
        colors: [themeColors.green],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '35%'
            },
            dataLabels: {
              show: false
            }
          }
        },
        labels: ['']
      };
      var widgetRadialGroup3 = new ApexCharts(document.querySelector("#widget-group-radial-3"), widgetRadialGroup3Options);
      widgetRadialGroup3.render();
    }

    if ($('#widget-group-radial-4').length) {
      var widgetRadialGroup4Options = {
        series: [57],
        chart: {
          height: 100,
          type: 'radialBar',
          //offsetY: -20,
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        colors: [themeColors.accent],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
              size: '35%'
            },
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
                show: false,
                offsetY: -2,
                fontSize: '22px'
              }
            }
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
      var widgetRadialGroup4 = new ApexCharts(document.querySelector("#widget-group-radial-4"), widgetRadialGroup4Options);
      widgetRadialGroup4.render();
    }

    if ($('#widget-group-radial-5').length) {
      var widgetRadialGroup5Options = {
        series: [36],
        chart: {
          height: 100,
          type: 'radialBar',
          //offsetY: -20,
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        colors: [themeColors.orange],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
              size: '35%'
            },
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
                show: false,
                offsetY: -2,
                fontSize: '22px'
              }
            }
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
      var widgetRadialGroup5 = new ApexCharts(document.querySelector("#widget-group-radial-5"), widgetRadialGroup5Options);
      widgetRadialGroup5.render();
    }

    if ($('#widget-group-radial-6').length) {
      var widgetRadialGroup6Options = {
        series: [88],
        chart: {
          height: 100,
          type: 'radialBar',
          //offsetY: -20,
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        colors: [themeColors.green],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
              size: '35%'
            },
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
                show: false,
                offsetY: -2,
                fontSize: '22px'
              }
            }
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
      var widgetRadialGroup6 = new ApexCharts(document.querySelector("#widget-group-radial-6"), widgetRadialGroup6Options);
      widgetRadialGroup6.render();
    }
  }
});