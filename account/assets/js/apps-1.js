/*! apps-1.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  var parentwidth = $(".fixed-parent").width();
  $(".fixed-child").width(parentwidth);
  $(window).on('resize', function () {
    parentwidth = $(".fixed-parent").width();
    $(".fixed-child").width(parentwidth + 20);
  });
  $(window).on('scroll', function () {
    var height = $(window).scrollTop();

    if (height > 80) {
      $(".sticky-panel").addClass('is-stretched');
    } else {
      $(".sticky-panel").removeClass('is-stretched');
    }
  });
  $('.icon-toolbar .inner-icon').on('click', function () {
    var targetSection = $(this).attr('data-section');
    var $container = $(this).closest('.icon-toolbar');
    $container.find('.inner-icon').removeClass('is-active');
    $(this).addClass('is-active');
    $('.side-section').removeClass('is-active');
    $('#' + targetSection).addClass('is-active');
  });
  $('.pill-carousel').slick({
    //centerMode: true,
    dots: false,
    infinite: true,
    variableWidth: true,
    centerPadding: '100px',
    prevArrow: "<div class='slick-custom is-prev'><i class='fas fa-angle-left'></i></div>",
    nextArrow: "<div class='slick-custom is-next'><i class='fas fa-angle-right'></i></div>",
    slidesToShow: 5
  });
  $('.slick-slider').on('click', '.slick-slide', function (e) {
    e.stopPropagation();
    var index = $(this).data("slick-index");

    if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
      $('.slick-slider').slick('slickGoTo', index);
    }
  });
});