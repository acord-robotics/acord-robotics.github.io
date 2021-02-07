/*! list-view.js | Huro | Css Ninja 2020-2021 */

/* ==========================================================================
List Views JS
========================================================================== */
"use strict";

function disableSearchWhentListEmpty() {
  $('.is-slider .tabs li').on('click', function () {
    setTimeout(function () {
      if ($('.page-content.tabs-wrapper .tab-content.is-active .list-view-item').length === 0) {
        $('.list-view-toolbar input').addClass('is-disabled');
      } else {
        $('.list-view-toolbar input').removeClass('is-disabled');
      }
    }, 400);
  });
}

$(document).ready(function () {
  //List View V1
  if ($('.list-view-v1').length) {
    //Webapp Infinite scroll demo implementation
    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight) {
          var clones = $('.list-view .list-view-inner').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.list-view .list-view-inner').append(clones);
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
  } //List View V2


  if ($('.list-view-v2').length) {
    //Disable search when list is empty on tab change
    disableSearchWhentListEmpty(); //Webapp Infinite scroll demo implementation

    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight) {
          var clones = $('.list-view .tab-content.is-active .list-view-inner').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.list-view .tab-content.is-active .list-view-inner').append(clones);
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
  } //List View V3


  if ($('.list-view-v3').length) {
    //Disable search when list is empty on tab change
    disableSearchWhentListEmpty(); //Webapp Infinite scroll demo implementation

    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight) {
          var clones = $('.list-view .tab-content.is-active .list-view-inner').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.list-view .tab-content.is-active .list-view-inner').append(clones);
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
  } //List View V4


  if ($('.list-view-v4').length) {
    //Disable search when list is empty on tab change
    disableSearchWhentListEmpty(); //Webapp Infinite scroll demo implementation

    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight) {
          var clones = $('.list-view .tab-content.is-active .list-view-inner').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.list-view .tab-content.is-active .list-view-inner').append(clones);
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