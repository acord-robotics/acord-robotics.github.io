/*! business-2.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  var usersOptions = {
    series: [{
      name: 'New Users',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Renewals',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Resigns',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    chart: {
      height: 180,
      type: 'area',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    colors: [themeColors.purple, themeColors.accent, themeColors.orange],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [2],
      curve: 'smooth'
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: [{
      y: 0,
      offsetX: 0,
      offsetY: 0,
      labels: {
        show: false
      },
      padding: {
        left: 0,
        right: 0
      }
    }],
    tooltip: {
      x: {
        show: false,
        format: 'dd/MM/yy HH:mm'
      }
    }
  };
  var usersChart = new ApexCharts(document.querySelector("#users-chart"), usersOptions);
  usersChart.render();
  var sharingOptions = {
    series: [{
      data: [21, 22, 10, 28, 16, 21, 13, 30, 35, 41, 36, 26]
    }],
    chart: {
      height: 180,
      type: 'bar',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      events: {
        click: function click(chart, w, e) {}
      }
    },
    colors: [themeColors.accent, themeColors.orange, themeColors.purple],
    plotOptions: {
      bar: {
        columnWidth: '30px',
        distributed: true,
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: [{
      y: 0,
      offsetX: 0,
      offsetY: 0,
      labels: {
        show: false
      },
      padding: {
        left: 0,
        right: 0
      }
    }]
  };
  var sharingChart = new ApexCharts(document.querySelector("#shares-chart"), sharingOptions);
  sharingChart.render(); //Personal Score

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
      height: 235,
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
      name: "Renewals",
      data: barData
    }]);
    $.getJSON("https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly2", function (response) {
      barChart.appendSeries({
        name: "subscriptions",
        data: barData2
      });
    });
  }); //Datatable

  var moreIcon = feather.icons['more-horizontal'].toSvg();
  var rowAction = "\n        <div class=\"row-action\">\n            <button class=\"button h-button is-dark-outlined\">Profile</button>\n        </div>\n    ";
  var datatable = new DataTable(document.querySelector('#users-datatable'), {
    pageSize: 10,
    sort: {
      picture: false,
      name: true,
      location: false,
      type: true,
      action: false
    },
    filters: {
      picture: false,
      name: false,
      location: false,
      type: false,
      action: false
    },
    filterText: 'Type to Filter... ',
    filterInputClass: 'input',
    counterText: function counterText(currentPage, totalPage, firstRow, lastRow, totalRow) {
      return 'Showing ' + firstRow + ' to ' + lastRow + ' of ' + totalRow + ' items.';
    },
    counterDivSelector: '.datatable-info span',
    pagingDivSelector: "#paging-first-datatable",
    firstPage: false,
    lastPage: false,
    nextPage: '<i class="fas fa-angle-right"></i>',
    prevPage: '<i class="fas fa-angle-left"></i>',
    afterRefresh: function afterRefresh() {
      if (env === 'development') {
        changeDemoImages();
      }

      initDropdowns();
    },
    data: [{
      picture: "\n                    <div class=\"h-avatar\">\n                        <img class=\"avatar\" src=\"https://via.placeholder.com/150x150\" data-demo-src=\"assets/img/avatars/photos/8.jpg\" alt=\"\">\n                    </div>\n                ",
      name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Erik Kovalsky</span>',
      location: 'Los Angeles, CA',
      type: "\n                    <span class=\"tag is-rounded is-solid\">Customer</span>\n                ",
      action: "" + rowAction
    }, {
      picture: "\n                    <div class=\"h-avatar\">\n                        <img class=\"avatar\" src=\"https://via.placeholder.com/150x150\" data-demo-src=\"assets/img/avatars/photos/7.jpg\" alt=\"\">\n                    </div>\n                ",
      name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Alice Carasca</span>',
      location: 'San Diego, CA',
      type: "\n                    <span class=\"tag is-rounded is-solid\">Customer</span>\n                ",
      action: "" + rowAction
    }, {
      picture: "\n                    <div class=\"h-avatar\">\n                        <img class=\"avatar\" src=\"https://via.placeholder.com/150x150\" data-demo-src=\"assets/img/avatars/photos/13.jpg\" alt=\"\">\n                    </div>\n                ",
      name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Tara Svenson</span>',
      location: 'New York, NY',
      type: "\n                    <span class=\"tag is-rounded is-solid\">Supplier</span>\n                ",
      action: "" + rowAction
    }, {
      picture: "\n                    <div class=\"h-avatar\">\n                        <img class=\"avatar\" src=\"https://via.placeholder.com/150x150\" data-demo-src=\"assets/img/avatars/photos/5.jpg\" alt=\"\">\n                    </div>\n                ",
      name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Mary Lebowski</span>',
      location: 'Houston, TX',
      type: "\n                    <span class=\"tag is-rounded is-solid\">Customer</span>\n                ",
      action: "" + rowAction
    }, {
      picture: "\n                    <div class=\"h-avatar\">\n                        <span class=\"avatar is-fake is-info\">\n                            <span>K</span>\n                        </span>\n                    </div>\n                ",
      name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Kaylee Jennings</span>',
      location: 'Los Angeles, CA',
      type: "\n                    <span class=\"tag is-rounded is-solid\">Customer</span>\n                ",
      action: "" + rowAction
    }]
  });
  setTimeout(function () {
    //Change demo images
    if (env === 'development') {
      changeDemoImages();
    } //initUserPopovers();


    adjustDropdowns();
    customizeDatatable();
  }, 1000);
});