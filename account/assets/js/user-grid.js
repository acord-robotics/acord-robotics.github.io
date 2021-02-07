/*! user-grids.js | Huro | Css Ninja 2020-2021 */

/* ==========================================================================
User Grids JS
========================================================================== */
"use strict";

$(document).ready(function () {
  //User Grid V1 and V2
  if ($('.user-grid-v1, .user-grid-v2').length) {
    //Webapp Infinite scroll demo implementation
    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
          var clones = $('.user-grid .columns').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.user-grid .columns').append(clones);
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
  } //User Grid V3


  if ($('.user-grid-v3').length) {
    $('.icon-tabs .tab-item').on('click', function () {
      console.log('clicked');
      var $container = $(this).closest('.icon-tabs-wrapper');
      var target = $(this).attr('data-target-section');
      $(this).siblings('.tab-item').removeClass('is-active');
      $(this).addClass('is-active');
      $container.find('.icon-tabs-content').removeClass('is-active');
      $container.find('.' + target).addClass('is-active');
    });
    $('.mini-line-chart').peity('line', {
      delimiter: ",",
      fill: null,
      height: 45,
      max: null,
      min: 0,
      stroke: themeColors.primary,
      strokeWidth: 1.6,
      width: 130
    });
    $('.mini-bar-chart').peity('bar', {
      delimiter: ",",
      fill: [themeColors.accent],
      height: 45,
      max: null,
      min: 0,
      padding: 0.1,
      width: 100
    });
    $('.mini-donut-chart').peity('donut', {
      delimiter: null,
      fill: [themeColors.accent, '#efefef', themeColors.primaryMedium],
      height: 45,
      innerRadius: 18,
      radius: 8,
      width: 45
    });
    $('.updating-chart').each(function () {
      var updatingChart = $(this).peity('line', {
        delimiter: ",",
        fill: null,
        height: 45,
        max: null,
        min: 0,
        stroke: themeColors.accent,
        strokeWidth: 1.6,
        width: 100
      });
      setInterval(function () {
        var random = Math.round(Math.random() * 10);
        var values = updatingChart.text().split(",");
        values.shift();
        values.push(random);
        updatingChart.text(values.join(",")).change();
      }, 1000);
    }); //Infinite Scroll

    $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
        var clones = $('.user-grid .columns').html();
        $('.infinite-scroll-loader').addClass('is-active');

        if (counter < 2) {
          setTimeout(function () {
            $('.infinite-scroll-loader').removeClass('is-active');
            $('.user-grid .columns').append(clones);
            counter = counter + 1;
          }, 1200);
        } else {
          setTimeout(function () {
            $('.loader, .loader-end').toggleClass('is-hidden');
          }, 1200);
        }
      }
    });
  } //User Grid V4


  if ($('.user-grid-v4').length) {
    //Infinite Scroll
    $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
        var clones = $('.user-grid .columns').html();
        $('.infinite-scroll-loader').addClass('is-active');

        if (counter < 2) {
          setTimeout(function () {
            $('.infinite-scroll-loader').removeClass('is-active');
            $('.user-grid .columns').append(clones);
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
});