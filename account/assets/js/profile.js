/*! profile.js | Huro | Css Ninja 2020-2021 */

/* ==========================================================================
Tile Grids JS
========================================================================== */
"use strict";

$(document).ready(function () {
  //User profile
  if ($('#user-profile').length) {
    $('.languages-donut').peity('donut', {
      delimiter: null,
      fill: [themeColors.accent, '#efefef', themeColors.primaryMedium],
      height: 50,
      innerRadius: 22,
      radius: 8,
      width: 50
    });
  } //Edit profile


  if ($('#edit-profile').length) {
    /*$(window).on('scroll', function () {
        var height = $(window).scrollTop();
        if (height > 80) {
            $(".stuck-header").addClass('is-stuck');
        } else {
            $(".stuck-header").removeClass('is-stuck');
        }
    });*/
    $('.profile-h-avatar .edit-button').on('click', function () {
      var $container = $(this).closest('.profile-h-avatar');
      $container.find('.edit-button, .avatar, .filepond-profile-wrap').toggleClass('is-hidden');
    });
    $('.add-setting-item, .fieldset-heading a').on('click', function () {
      var $fieldset = $(this).closest('.fieldset');
      $fieldset.find('.setting-item, .setting-form').toggleClass('is-hidden');
      $fieldset.find('.fieldset-heading h4, .fieldset-heading p, .fieldset-heading a').toggleClass('is-hidden');
    });
    $('#save-button').on('click', function () {
      var $this = $(this);
      $this.addClass('is-loading');
      setTimeout(function () {
        $this.removeClass('is-loading');
        $('.profile-h-avatar').find('.is-back, .filepond-profile-wrap').addClass('is-hidden');
        $('.profile-h-avatar').find('.is-edit, .avatar').removeClass('is-hidden');
        notyf.success('Your changes have been successfully saved!');
      }, 1200);
    });
  }
});