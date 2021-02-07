/*! forms.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  if ($('#form-layout-4').length) {
    //Init datepickers
    var datepickers = document.querySelectorAll('.form-datepicker');
    var datePicker = [];
    console.log(datepickers.length);

    for (var i = 0; i < datepickers.length; i++) {
      datePicker[i] = new Pikaday({
        field: datepickers[i],
        firstDay: 1,
        format: 'MMM D, YYYY',
        onSelect: function onSelect() {//Do your stuff
        }
      });
    }
  }
});