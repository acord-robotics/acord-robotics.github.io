/*! messaging-webapp.js | Huro | Css Ninja. 2020-2021 */

/* ==========================================================================
Messaging Webapp functions
========================================================================== */
"use strict";

$(document).ready(function () {
  //Scroll chat to bottom on load
  var scrollChat = $('.chat-area .simplebar-content-wrapper');
  scrollChat.scrollTop(scrollChat.prop("scrollHeight"));
  $('.conversations-mobile-trigger').on('click', function () {
    $('.conversation-area').addClass('is-active');
  });
  $('.conversation-area .conversation').on('click', function () {
    var $this = $(this);
    var conversationId = $this.attr('data-conversation-id');
    var photoUrl = $this.find('.avatar').attr('src');
    var username = $this.attr('data-detail-name');
    var text = $this.attr('data-detail-text');
    $this.siblings('.conversation').removeClass('active');
    $this.addClass('active');
    $('.conversation-area').removeClass('is-active');
    $('.chat-area-content').removeClass('is-active');
    $('#webapp-conversation-' + conversationId).addClass('is-active');
    $('#user-details-name').html(username);
    $('#user-details-title').html(text);

    if (photoUrl === undefined || photoUrl === null) {
      var fakeUrl = $this.find('.h-avatar').html();
      $('.user-pic .avatar:not(.is-fake)').addClass('is-hidden');
      $('.user-pic .avatar.is-fake').removeClass('is-hidden');
      $('.user-pic .avatar.is-fake').replaceWith(fakeUrl);
    } else {
      $('.user-pic .avatar.is-fake').addClass('is-hidden');
      $('.user-pic .avatar:not(.is-fake)').attr('src', photoUrl).removeClass('is-hidden');
    }

    scrollChat.scrollTop(scrollChat.prop("scrollHeight"));
  });
});