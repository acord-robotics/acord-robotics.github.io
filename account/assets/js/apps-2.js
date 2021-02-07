/*! apps-2.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  //Sidebar menu
  $('.inbox-sidebar .inbox-menu li a').on('click', function () {
    $('.inbox-sidebar .inbox-menu li a').removeClass('is-active');
    $(this).addClass('is-active');
  }); //Search contacts

  $('.title-wrap .search-button, .title-wrap .cancel-search-button').on('click', function () {
    $(this).closest('.title-wrap').find('.control, h3, .button').toggleClass('is-hidden');
    $(this).closest('.title-wrap').find('input').val('').focus();
  }); //Check all messages

  $('.check-all-action').on('click', function () {
    if ($(this).hasClass('is-checked')) {
      $(this).removeClass('is-checked');
      $('.inbox-messages .messages-list').find('input').prop('checked', false);
    } else {
      $(this).addClass('is-checked');
      $('.inbox-messages .messages-list').find('input').prop('checked', true);
    }
  }); //Demo change messages

  $('.inbox-message').on('click', function () {
    var targetMessage = $(this).attr('data-message');
    $('.inbox-message').removeClass('is-selected');
    $(this).addClass('is-selected').removeClass('is-unread');
    $('.inbox-message-overlay').addClass('is-active tablet-active');
    setTimeout(function () {
      $('.inbox-message-details').addClass('is-hidden').removeClass('mobile-active tablet-active');
      $('#' + targetMessage).removeClass('is-hidden').addClass('mobile-active tablet-active');
    }, 450);
    setTimeout(function () {
      $('.inbox-message-overlay').removeClass('is-active tablet-active');
    }, 1300);
  }); //Open compose panel

  $('.compose-button').on('click', function () {
    $('.compose-panel').addClass('is-active');
  }); //Close compose-panel

  $('.compose-panel-close').on('click', function () {
    $('.compose-panel').removeClass('is-active');
  }); //Close details section when in mobile mode

  $('.inbox-close-details-mobile').on('click', function () {
    $('.inbox-message-details').removeClass('mobile-active tablet-active');
    $('.inbox-message-overlay').removeClass('tablet-active');
  }); //Open menu sidebar on mobile

  $('.mobile-menu-action').on('click', function () {
    $('.inbox-sidebar').addClass('mobile-active');
  }); //Close menu sidebar on mobile

  $('.inbox-close-sidebar-mobile').on('click', function () {
    $('.inbox-sidebar').removeClass('mobile-active');
  });
});