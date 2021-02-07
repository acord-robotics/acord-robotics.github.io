/*! finance-1.js | Huro | Css ninja 2020-2021 */
"use strict";

function initCharts() {
  $('*[data-vivus]').each(function () {
    var vivusId = $(this).attr('id');

    if (vivusId !== undefined) {
      new Vivus(vivusId, {
        duration: 200,
        dashGap: 1,
        onReady: function onReady(myVivus) {
          // `el` property is the SVG element
          myVivus.el.setAttribute('width', '250');
        }
      });
    }
  });
}

$(document).ready(function () {
  if ($('#app-home')) {
    //Init charts
    initCharts();
  }
});