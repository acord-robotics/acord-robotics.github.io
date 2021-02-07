/*! flex-list.js | Huro | Css Ninja 2020-2021 */

/* ==========================================================================
Flex Lists JS
========================================================================== */
"use strict";

function disableSearchWhenTableEmpty() {
  $('.is-slider .tabs li').on('click', function () {
    setTimeout(function () {
      if ($('.page-content.tabs-wrapper .tab-content.is-active .flex-table-item').length === 0) {
        $('.list-flex-toolbar input').addClass('is-disabled');
      } else {
        $('.list-flex-toolbar input').removeClass('is-disabled');
      }
    }, 400);
  });
}

$(document).ready(function () {
  //Flex List V1
  if ($('.flex-list-v1').length) {
    //Webapp Infinite scroll demo implementation
    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
          var clones = $('.flex-list-wrapper .flex-list-inner').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.flex-list-wrapper .flex-list-inner').append(clones);
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
  } //Flex List V2


  if ($('.flex-list-v2').length) {
    //Disable search when list is empty on tab change
    disableSearchWhenTableEmpty(); //Webapp Infinite scroll demo implementation

    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
          var clones = $('.tab-content.is-active .flex-list-inner').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.tab-content.is-active .flex-list-inner').append(clones);
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
  } //Flex List V3


  if ($('.flex-list-v3').length) {
    //Disable search when list is empty on tab change
    disableSearchWhenTableEmpty(); //Webapp Infinite scroll demo implementation

    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
          var clones = $('.tab-content.is-active .flex-list-inner').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.tab-content.is-active .flex-list-inner').append(clones);
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