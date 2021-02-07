/*! landing.js | Huro | Css Ninja. 2020-2021 */

/* ==========================================================================
Landing page js
========================================================================== */
"use strict";

$(document).ready(function () {
  var el = document.querySelectorAll('[data-lazy-load]');
  var observer = lozad(el, {
    loaded: function loaded(el) {
      // Custom implementation on a loaded element
      el.parentNode.classList.add('loaded');
    }
  });
  observer.observe();
  $(window).on('scroll', function () {
    var height = $(window).scrollTop();

    if (height > 60) {
      $('.landing-page-wrapper .navbar').removeClass('is-docked');
    } else {
      $('.landing-page-wrapper .navbar').addClass('is-docked');
    }
  });
  $('#night-toggle--daynight, #navbar-night-toggle--daynight').on('change', function () {
    $('.landing-page-wrapper').toggleClass('is-dark');

    if ($(this).attr('id') === 'night-toggle--daynight') {
      if ($(this).prop('checked') === true) {
        $('#navbar-night-toggle--daynight').prop('checked', false);
      } else {
        $('#navbar-night-toggle--daynight').prop('checked', true);
      }
    } else {
      if ($(this).prop('checked') === true) {
        $('#night-toggle--daynight').prop('checked', false);
      } else {
        $('#night-toggle--daynight').prop('checked', true);
      }
    }
  });
  $(".landing-page-wrapper .navbar .nav-link").on("click", function () {
    $('.landing-page-wrapper .navbar .nav-link').removeClass('is-active');
    $(this).addClass('is-active');

    if ($(this).hasClass('is-scroll')) {
      var fromTop = 50;
      var href = $(this).attr('href');

      if (href !== undefined) {
        if (href.indexOf("#") !== -1) {
          var str = href;
          var res = str.split("#");
          console.log(res);
          var $target = $("#" + res[1]);

          if ($target.length) {
            $('html, body').animate({
              scrollTop: $target.offset().top - fromTop
            });
          }
        }
      }
    }
  });
  $('.landing-page-wrapper .navbar-burger').on('click', function () {
    if ($('.landing-page-wrapper .navbar-menu').hasClass('is-active')) {
      $('.landing-page-wrapper .navbar').removeClass('is-solid');
    } else {
      $('.landing-page-wrapper .navbar').addClass('is-solid');
    }

    $('.landing-page-wrapper .navbar-menu').toggleClass('is-active');
  });
  initBackToTop();
});