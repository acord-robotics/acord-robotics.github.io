/*! finance-3.js | Huro | Css ninja 2020-2021 */
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

$(document).ready(function () {
  //Defaults
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


  var sparklineData = [472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415, 358, 271, 932, 534, 615, 278, 546, 435, 192, 465]; //Spark 1

  var spark1 = {
    chart: {
      id: 'sparkline1',
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
      data: randomizeArray(sparklineData)
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
  }; //Spark 2

  var spark2 = {
    chart: {
      id: 'sparkline2',
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
      data: randomizeArray(sparklineData)
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
  }; //Spark 3

  var spark3 = {
    chart: {
      id: 'sparkline3',
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
      data: randomizeArray(sparklineData)
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
  }; //Spark 4

  var spark4 = {
    chart: {
      id: 'sparkline3',
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
      data: randomizeArray(sparklineData)
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
  new ApexCharts(document.querySelector("#spark1"), spark1).render();
  new ApexCharts(document.querySelector("#spark2"), spark2).render();
  new ApexCharts(document.querySelector("#spark3"), spark3).render();
  new ApexCharts(document.querySelector("#spark4"), spark4).render(); //Revenue Chart

  var revenueOptions = {
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
  var revenueChart = new ApexCharts(document.querySelector("#revenue-chart"), revenueOptions);
  revenueChart.render(); //Sales Revenue Chart

  var optionsCircle = {
    series: [65],
    chart: {
      height: 130,
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
  var radialCircle = new ApexCharts(document.querySelector("#radial-circle"), optionsCircle);
  radialCircle.render(); //Small Radial 1

  var radialGroup1Options = {
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
  var radialGroup1 = new ApexCharts(document.querySelector("#group-radial-1"), radialGroup1Options);
  radialGroup1.render(); //Small Radial 2

  var radialGroup2Options = {
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
  var radialGroup2 = new ApexCharts(document.querySelector("#group-radial-2"), radialGroup2Options);
  radialGroup2.render(); //Small Radial 3

  var radialGroup3Options = {
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
  var radialGroup3 = new ApexCharts(document.querySelector("#group-radial-3"), radialGroup3Options);
  radialGroup3.render(); //Personal Score

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
      pattern: [themeColors.accent, themeColors.info, themeColors.orange, themeColors.green],
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
  }, 5000); //Bar Chart

  var barData = [{
    "x": 'Jan',
    "y": 322
  }, {
    "x": "Feb",
    "y": 459
  }, {
    "x": 'Mar',
    "y": 212
  }, {
    "x": 'Apr',
    "y": 345
  }, {
    "x": 'May',
    "y": 111
  }, {
    "x": 'Jun',
    "y": 189
  }, {
    "x": 'Jul',
    "y": 498
  }, {
    "x": 'Aug',
    "y": 612
  }, {
    "x": 'Sep',
    "y": 451
  }, {
    "x": 'Oct',
    "y": 248
  }, {
    "x": 'Nov',
    "y": 306
  }, {
    "x": 'Dec',
    "y": 366
  }];
  var barData2 = [{
    "x": 'Jan',
    "y": 25
  }, {
    "x": "Feb",
    "y": 49
  }, {
    "x": 'Mar',
    "y": 36
  }, {
    "x": 'Apr',
    "y": 84
  }, {
    "x": 'May',
    "y": 64
  }, {
    "x": 'Jun',
    "y": 131
  }, {
    "x": 'Jul',
    "y": 48
  }, {
    "x": 'Aug',
    "y": 144
  }, {
    "x": 'Sep',
    "y": 96
  }, {
    "x": 'Oct',
    "y": 11
  }, {
    "x": 'Nov',
    "y": 31
  }, {
    "x": 'Dec',
    "y": 8
  }];
  var barOptions = {
    series: [],
    chart: {
      height: 205,
      type: "bar",
      toolbar: {
        show: false
      }
    },
    colors: [themeColors.accent, themeColors.orange],
    dataLabels: {
      enabled: false
    },
    noData: {
      text: "Loading..."
    },
    xaxis: {
      type: "category",
      tickPlacement: "on",
      labels: {
        rotate: -45,
        rotateAlways: true
      }
    }
  };
  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barOptions);
  barChart.render();
  $.getJSON("https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly", function (response) {
    barChart.updateSeries([{
      name: "Orders",
      data: barData
    }]);
    $.getJSON("https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly2", function (response) {
      barChart.appendSeries({
        name: "Abandonned",
        data: barData2
      });
    });
  });
});