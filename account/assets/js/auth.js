/*! components.js | Huro | Css Ninja. 2020-2021 */

/* ==========================================================================
Auth pages js
========================================================================== */
"use strict"; //Init Pageloader

initPageLoader();
$(document).ready(function () {
  if (env === 'development') {
    //Change demo images
    changeDemoImages();
  }

  feather.replace(); //Dark Mode

  initDarkMode(); //Login submission

  $('#login-submit').on('click', function () {
    var $this = $(this);
    $this.addClass('is-loading');
    setTimeout(function () {
      $this.removeClass('is-loading');
      $('#login-form').submit();
    }, 1000);
  }); //Reset password

  $('#forgot-link, #cancel-recover').on('click', function () {
    $(this).closest('.is-form').find('form, .form-text').toggleClass('is-hidden');
  }); //Signup Flow

  if ($('#huro-signup').length) {
    //Steps
    $('.step-icon').on('click', function () {
      var targetStep = $(this).attr('data-step');
      var progressValue = $(this).attr('data-progress');
      $(this).prevAll().addClass('is-done');
      $(this).removeClass('is-done').addClass('is-active');
      $(this).nextAll().removeClass('is-active is-done');
      $('#signup-steps-progress').val(progressValue);

      if (targetStep !== undefined) {
        $('.signup-columns').addClass('is-hidden');
        $('#' + targetStep).removeClass('is-hidden');
        $('.avatar-carousel').slick('setPosition');
        $('.card-bg').addClass('faded');
      }

      if (targetStep == 'signup-step-1') {
        $('.card-bg').removeClass('faded');
      }
    }); //Step 1 confirmation

    $('#confirm-step-1').on('click', function () {
      var $this = $(this);
      $this.addClass('is-loading');
      setTimeout(function () {
        $this.removeClass('is-loading');
        $('.card-bg').addClass('faded');
        $('.signup-steps').removeClass('is-hidden');
        $('#signup-step-1, #signup-step-2').toggleClass('is-hidden');
        $('.avatar-carousel').slick('setPosition');
      }, 1000);
    }); //Avatar carousel selector

    if ($('.avatar-carousel').length) {
      var carousel = $('.avatar-carousel');
      carousel.on('init', function () {
        feather.replace();
      });
      carousel.on('afterChange', function () {
        var currentAvatarUrl = $('.avatar-carousel').find('.slick-current img').attr('src');
        $('.picture-selector .image-container img').attr('src', currentAvatarUrl);
        $('#confirm-step-2').removeClass('is-disabled');
      });
      $('.avatar-carousel').slick({
        centerMode: true,
        dots: false,
        infinite: true,
        centerPadding: '100px',
        prevArrow: "<div class='slick-custom is-prev'><i data-feather='chevron-left'></i></div>",
        nextArrow: "<div class='slick-custom is-next'><i data-feather='chevron-right'></i></div>",
        slidesToShow: 3
      }); //Go to next avatar/skill when clicking on it

      $('.slick-slider').on('click', '.slick-slide', function (e) {
        e.stopPropagation();
        var index = $(this).data("slick-index");

        if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
          $('.slick-slider').slick('slickGoTo', index);
        }
      });
    } //Step 2 confirmation


    $('#confirm-step-2').on('click', function () {
      var $this = $(this);
      $this.addClass('is-loading');
      setTimeout(function () {
        $this.removeClass('is-loading'); //Activate step

        $('.step-icon:nth-child(2)').removeClass('is-inactive').trigger('click');
      }, 1000);
    }); //Go to onboarding

    $('#finish-signup').on('click', function () {
      var $this = $(this);
      $this.addClass('is-loading');
      $('.step-icon.is-inactive').removeClass('is-inactive').trigger('click');
      setTimeout(function () {
        $this.removeClass('is-loading');
        window.location.href = '/admin-dashboards-personal-1.html';
      }, 1400);
    });
  }
});