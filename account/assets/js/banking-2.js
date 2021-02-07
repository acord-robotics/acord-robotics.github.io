/*! banking-2.js | Huro | Css ninja 2020-2021 */
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _options;

  //Credit Card carousel
  $('.cards-carousel-inner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    variableWidth: true,
    prevArrow: "<div class='slick-custom is-prev'><i class='fas fa-angle-left'></i></div>",
    nextArrow: "<div class='slick-custom is-next'><i class='fas fa-angle-right'></i></div>",
    slidesToShow: 2
  }); //Timeline Chart

  var options = (_options = {
    chart: {
      type: "area",
      height: 220,
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
      text: '',
      align: 'left'
    },
    legend: {
      position: 'top'
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Cash Expenses',
      data: generateDayWiseTimeSeries(0, 18)
    }, {
      name: 'Card Expenses',
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
      }
    }
  }, _defineProperty(_options, "legend", {
    position: 'top',
    horizontalAlign: 'left'
  }), _defineProperty(_options, "fill", {
    type: "solid",
    fillOpacity: 0.7
  }), _options);
  var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);
  chart.render();

  function generateDayWiseTimeSeries(s, count) {
    var values = [[4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5], [2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2]];
    var i = 0;
    var series = [];
    var x = new Date("11 Nov 2020").getTime();

    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }

    return series;
  }
});