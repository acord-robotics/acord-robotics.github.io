/*! syntax.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  //DEMO SYNTAX HIGHLIGHTING
  $.when($('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
  })).done(function () {
    $('pre, code').each(function () {
      $(this).html($(this).html().trim());
    });
  });
  $('.code-trigger').on('click', function () {
    $(this).toggleClass('is-active');
    $(this).closest('.demo-card').find('.highlight-block').slideToggle('fast');
  });
});