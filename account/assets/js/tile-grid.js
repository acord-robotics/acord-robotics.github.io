/*! tile-grid.js | Huro | Css Ninja 2020-2021 */

/* ==========================================================================
Tile Grids JS
========================================================================== */
"use strict";

$(document).ready(function () {
  //Tile Grid V1
  if ($('.tile-grid-v1').length) {
    //Webapp Infinite scroll demo implementation
    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
          var clones = $('.tile-grid .columns').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.tile-grid .columns').append(clones);
              counter = counter + 1;
            }, 1200);
          } else {
            setTimeout(function () {
              $('.loader, .loader-end').toggleClass('is-hidden');
            }, 1200);
          }
        }
      });
    }
  }
});