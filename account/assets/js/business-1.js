/*! business-1.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  if ($('#app-flights').length) {
    //Datepickers
    var datepickers = document.querySelectorAll(".flight-datepicker");
    var buttons = document.querySelectorAll("button");
    var inputs = document.querySelectorAll("input");
    var picker = [];

    for (var i = 0; i < datepickers.length; i++) {
      var datepicker = datepickers[i];
      picker[i] = new Pikaday({
        field: datepicker,
        //minDate: new Date('2000-01-01'),
        //maxDate: new Date('2020-12-31'),
        format: 'DD MMM YYYY',
        onSelect: function onSelect() {//Do your stuff
        },
        firstDay: 1
      });
    }
  }
});