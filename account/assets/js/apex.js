/*! apex.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  if ($('#apex-chart-1').length) {
    var options = {
      series: [{
        name: "Sales",
        data: [105, 414, 357, 511, 497, 621, 695, 912, 748]
      }],
      chart: {
        height: 280,
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
        curve: 'straight'
      },
      title: {
        text: 'Line Chart',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'],
          // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      }
    };
    var chart = new ApexCharts(document.querySelector("#apex-chart-1"), options);
    chart.render();
  }

  if ($('#apex-chart-2').length) {
    var options2 = {
      series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      }, {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      }, {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }],
      chart: {
        height: 280,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      title: {
        text: 'Multiple Lines',
        align: 'left'
      },
      legend: {
        tooltipHoverFormatter: function tooltipHoverFormatter(val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '';
        },
        position: 'top'
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      tooltip: {
        y: [{
          title: {
            formatter: function formatter(val) {
              return val + " (mins)";
            }
          }
        }, {
          title: {
            formatter: function formatter(val) {
              return val + " per session";
            }
          }
        }, {
          title: {
            formatter: function formatter(val) {
              return val;
            }
          }
        }]
      },
      grid: {
        borderColor: '#f1f1f1'
      }
    };
    var chart2 = new ApexCharts(document.querySelector("#apex-chart-2"), options2);
    chart2.render();
  }

  if ($('#apex-chart-4').length) {
    var options4 = {
      series: [{
        name: 'New members',
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 79]
      }],
      chart: {
        type: 'line',
        height: 280,
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'stepline'
      },
      colors: [themeColors.accent],
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Stepline Chart',
        align: 'left'
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    };
    var chart4 = new ApexCharts(document.querySelector("#apex-chart-4"), options4);
    chart4.render();
  }

  if ($('#apex-chart-5').length) {
    var options5 = {
      series: [{
        name: "Balance",
        data: series.monthDataSeries1.prices
      }],
      chart: {
        type: 'area',
        height: 280,
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
      stroke: {
        width: [2, 2, 2],
        curve: 'straight'
      },
      colors: [themeColors.accent],
      title: {
        text: 'Area Chart',
        align: 'left'
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: 'left'
      }
    };
    var chart5 = new ApexCharts(document.querySelector("#apex-chart-5"), options5);
    chart5.render();
  }

  if ($('#apex-chart-6').length) {
    var options6 = {
      series: [{
        name: 'Completed',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Pending',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chart: {
        height: 280,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
      title: {
        text: 'Multiple Area',
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
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    };
    var chart6 = new ApexCharts(document.querySelector("#apex-chart-6"), options6);
    chart6.render();
  }

  if ($('#apex-chart-7').length) {
    var ts1 = 1388534400000;
    var ts2 = 1388620800000;
    var ts3 = 1389052800000;
    var dataSet = [[], [], []];

    for (var i = 0; i < 12; i++) {
      ts1 = ts1 + 86400000;
      var innerArr = [ts1, dataSeries[2][i].value];
      dataSet[0].push(innerArr);
    }

    for (var i = 0; i < 18; i++) {
      ts2 = ts2 + 86400000;
      var innerArr = [ts2, dataSeries[1][i].value];
      dataSet[1].push(innerArr);
    }

    for (var i = 0; i < 12; i++) {
      ts3 = ts3 + 86400000;
      var innerArr = [ts3, dataSeries[0][i].value];
      dataSet[2].push(innerArr);
    }

    var options7 = {
      series: [{
        name: 'Desktops',
        data: dataSet[0]
      }, {
        name: 'Phones',
        data: dataSet[1]
      }, {
        name: 'Tablets',
        data: dataSet[2]
      }],
      chart: {
        type: 'area',
        stacked: false,
        height: 280,
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
      markers: {
        size: 0
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#8e8da4'
          },
          offsetX: 0,
          formatter: function formatter(val) {
            return (val / 1000000).toFixed(2);
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      xaxis: {
        type: 'datetime',
        tickAmount: 8,
        min: new Date("01/01/2014").getTime(),
        max: new Date("01/20/2014").getTime(),
        labels: {
          rotate: -15,
          rotateAlways: true,
          formatter: function formatter(val, timestamp) {
            return moment(new Date(timestamp)).format("DD MMM YYYY");
          }
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
      title: {
        text: 'Multiple Areas',
        align: 'left'
      },
      tooltip: {
        shared: true
      },
      stroke: {
        width: [2, 2, 2]
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center' //offsetX: -10

      }
    };
    var chart7 = new ApexCharts(document.querySelector("#apex-chart-7"), options7);
    chart7.render();
  }

  if ($('#apex-chart-8').length) {
    var options8 = {
      series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
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
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
      title: {
        text: 'Bar Chart',
        align: 'left'
      }
    };
    var chart8 = new ApexCharts(document.querySelector("#apex-chart-8"), options8);
    chart8.render();
  }

  if ($('#apex-chart-9').length) {
    var options9 = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      chart: {
        type: 'bar',
        height: 280,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple],
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center'
      },
      title: {
        text: 'Multiple Bars',
        align: 'left'
      },
      tooltip: {
        y: {
          formatter: function formatter(val) {
            return "$ " + val + "K";
          }
        }
      }
    };
    var chart9 = new ApexCharts(document.querySelector("#apex-chart-9"), options9);
    chart9.render();
  }

  if ($('#apex-chart-10').length) {
    var options10 = {
      series: [{
        name: 'Desktops',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'Phones',
        data: [13, 23, 20, 8, 13, 27]
      }, {
        name: 'Tablets',
        data: [11, 17, 15, 15, 21, 14]
      }, {
        name: 'Hybrid',
        data: [21, 7, 25, 13, 22, 8]
      }],
      chart: {
        type: 'bar',
        height: 280,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'top'
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT']
      },
      title: {
        text: 'Stacked Bars',
        align: 'left'
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center'
      },
      fill: {
        opacity: 1
      }
    };
    var chart10 = new ApexCharts(document.querySelector("#apex-chart-10"), options10);
    chart10.render();
  }

  if ($('#apex-chart-11').length) {
    var options11 = {
      series: [{
        name: 'Corporate',
        data: [{
          x: 'Team A',
          y: [1, 5]
        }, {
          x: 'Team B',
          y: [4, 6]
        }, {
          x: 'Team C',
          y: [5, 8]
        }, {
          x: 'Team D',
          y: [3, 11]
        }]
      }, {
        name: 'Service',
        data: [{
          x: 'Team A',
          y: [2, 6]
        }, {
          x: 'Team B',
          y: [1, 3]
        }, {
          x: 'Team C',
          y: [7, 8]
        }, {
          x: 'Team D',
          y: [5, 9]
        }]
      }],
      chart: {
        type: 'rangeBar',
        height: 280,
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
      title: {
        text: 'Range Column',
        align: 'left'
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center'
      },
      dataLabels: {
        enabled: true
      }
    };
    var chart11 = new ApexCharts(document.querySelector("#apex-chart-11"), options11);
    chart11.render();
  }

  if ($('#apex-chart-12').length) {
    var options12 = {
      series: [{
        name: 'Spaceships',
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      chart: {
        type: 'bar',
        height: 280,
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      title: {
        text: 'Horizontal Bar',
        align: 'left'
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany']
      }
    };
    var chart12 = new ApexCharts(document.querySelector("#apex-chart-12"), options12);
    chart12.render();
  }

  if ($('#apex-chart-13').length) {
    var options13 = {
      series: [{
        name: 'Completed',
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        name: 'Pending',
        data: [53, 32, 33, 52, 13, 44, 32]
      }],
      chart: {
        type: 'bar',
        height: 280,
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.green],
      title: {
        text: 'Horizontal Bar Multiple',
        align: 'left'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center'
      }
    };
    var chart13 = new ApexCharts(document.querySelector("#apex-chart-13"), options13);
    chart13.render();
  }

  if ($('#apex-chart-14').length) {
    var options14 = {
      series: [{
        data: [{
          x: 'Analysis',
          y: [new Date('2019-02-27').getTime(), new Date('2019-03-04').getTime()],
          fillColor: themeColors.accent
        }, {
          x: 'Design',
          y: [new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()],
          fillColor: themeColors.secondary
        }, {
          x: 'Coding',
          y: [new Date('2019-03-07').getTime(), new Date('2019-03-10').getTime()],
          fillColor: themeColors.orange
        }, {
          x: 'Testing',
          y: [new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()],
          fillColor: themeColors.info
        }, {
          x: 'Deployment',
          y: [new Date('2019-03-12').getTime(), new Date('2019-03-17').getTime()],
          fillColor: themeColors.purple
        }]
      }],
      title: {
        text: 'Timeline',
        align: 'left'
      },
      chart: {
        height: 280,
        type: 'rangeBar',
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function formatter(val, opts) {
          var label = opts.w.globals.labels[opts.dataPointIndex];
          var a = moment(val[0]);
          var b = moment(val[1]);
          var diff = b.diff(a, 'days');
          return label + ': ' + diff + (diff > 1 ? 'd' : 'd');
        },
        style: {
          colors: ['#f3f4f5', '#fff']
        }
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        show: false
      },
      grid: {
        row: {
          colors: ['transparent'],
          opacity: 1
        }
      }
    };
    var chart14 = new ApexCharts(document.querySelector("#apex-chart-14"), options14);
    chart14.render();
  }

  if ($('#apex-chart-15').length) {
    var generateData = function generateData(baseval, count, yrange) {
      var i = 0;
      var series = [];

      while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        ;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        series.push([x, y, z]);
        baseval += 86400000;
        i++;
      }

      return series;
    };

    var options15 = {
      series: [{
        name: 'Bubble1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Bubble2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Bubble3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Bubble4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }],
      chart: {
        height: 280,
        type: 'bubble',
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.8
      },
      title: {
        text: 'Bubble Chart'
      },
      xaxis: {
        tickAmount: 12,
        type: 'category'
      },
      yaxis: {
        max: 70
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center'
      }
    };
    var chart15 = new ApexCharts(document.querySelector("#apex-chart-15"), options15);
    chart15.render();
  }

  if ($('#apex-chart-16').length) {
    var generateDayWiseTimeSeries = function generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      var series = [];

      while (i < count) {
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push([baseval, y]);
        baseval += 86400000;
        i++;
      }

      return series;
    };

    var options16 = {
      series: [{
        name: 'Team 1',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Team 2',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Team 3',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Team 4',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Team 5',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60
        })
      }],
      title: {
        text: 'Scatter Chart'
      },
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
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      dataLabels: {
        enabled: false
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        max: 70
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center'
      }
    };
    var chart16 = new ApexCharts(document.querySelector("#apex-chart-16"), options16);
    chart16.render();
  }

  if ($('#apex-chart-17').length) {
    var options17 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 405,
        type: 'pie'
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.info, themeColors.purple],
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 315,
            toolbar: {
              show: false
            }
          },
          legend: {
            position: 'top'
          }
        }
      }],
      legend: {
        position: 'right',
        horizontalAlign: 'center'
      }
    };
    var chart17 = new ApexCharts(document.querySelector("#apex-chart-17"), options17);
    chart17.render();
  }

  if ($('#apex-chart-18').length) {
    var options18 = {
      series: [44, 55, 41, 17, 15],
      title: {
        text: 'Donut Chart'
      },
      chart: {
        width: 405,
        type: 'donut'
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 280,
            toolbar: {
              show: false
            }
          },
          legend: {
            position: 'top'
          }
        }
      }],
      legend: {
        position: 'right',
        horizontalAlign: 'center'
      }
    };
    var chart18 = new ApexCharts(document.querySelector("#apex-chart-18"), options18);
    chart18.render();
  }

  if ($('#apex-chart-19').length) {
    var options19 = {
      series: [70],
      title: {
        text: 'Radial Bar'
      },
      chart: {
        height: 295,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%'
          }
        }
      },
      labels: ['Power']
    };
    var chart19 = new ApexCharts(document.querySelector("#apex-chart-19"), options19);
    chart19.render();
  }

  if ($('#apex-chart-20').length) {
    var options20 = {
      series: [44, 55, 67, 83],
      title: {
        text: 'Radial Bar Multiple'
      },
      chart: {
        height: 295,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px'
            },
            value: {
              fontSize: '16px'
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function formatter(w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
    };
    var chart20 = new ApexCharts(document.querySelector("#apex-chart-20"), options20);
    chart20.render();
  }

  if ($('#apex-chart-21').length) {
    var options21 = {
      series: [67],
      title: {
        text: 'Radial Bar Gauge'
      },
      chart: {
        height: 295,
        type: 'radialBar',
        offsetY: -10,
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: undefined,
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: '22px',
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
      labels: ['Median Ratio']
    };
    var chart21 = new ApexCharts(document.querySelector("#apex-chart-21"), options21);
    chart21.render();
  }

  if ($('#apex-chart-22').length) {
    var options22 = {
      series: [76],
      title: {
        text: 'Radial Bar Gauge'
      },
      chart: {
        height: 295,
        type: 'radialBar',
        //offsetY: -20,
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
        padding: {//top: -10
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
    var chart22 = new ApexCharts(document.querySelector("#apex-chart-22"), options22);
    chart22.render();
  }

  if ($('#apex-chart-23').length) {
    var options23 = {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20]
      }],
      chart: {
        height: 350,
        type: 'radar',
        toolbar: {
          show: false
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      title: {
        text: 'Radar Chart'
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June']
      }
    };
    var chart23 = new ApexCharts(document.querySelector("#apex-chart-23"), options23);
    chart23.render();
  }
});