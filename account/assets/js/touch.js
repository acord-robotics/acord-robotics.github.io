/*! touch.js | Huro | Css Ninja 2020-2021 */

/* ==========================================================================
Touch functions using Hammer.js
========================================================================== */
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") { _typeof = function (_typeof2) { function _typeof(_x) { return _typeof2.apply(this, arguments); } _typeof.toString = function () { return _typeof2.toString(); }; return _typeof; }(function (obj) { return typeof obj === "undefined" ? "undefined" : _typeof(obj); }); } else { _typeof = function (_typeof3) { function _typeof(_x2) { return _typeof3.apply(this, arguments); } _typeof.toString = function () { return _typeof3.toString(); }; return _typeof; }(function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj); }); } return _typeof(obj); }

$(document).ready(function () {
  (function (factory) {
    if (typeof define === 'function' && define.amd) {
      define(['jquery', 'hammerjs'], factory);
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
      factory(require('jquery'), require('hammerjs'));
    } else {
      factory(jQuery, Hammer);
    }
  })(function ($, Hammer) {
    function hammerify(el, options) {
      var $el = $(el);

      if (!$el.data("hammer")) {
        $el.data("hammer", new Hammer($el[0], options));
      }
    }

    $.fn.hammer = function (options) {
      return this.each(function () {
        hammerify(this, options);
      });
    }; // extend the emit method to also trigger jQuery events


    Hammer.Manager.prototype.emit = function (originalEmit) {
      return function (type, data) {
        originalEmit.call(this, type, data);
        $(this.element).trigger({
          type: type,
          gesture: data
        });
      };
    }(Hammer.Manager.prototype.emit);
  });

  $('.sidebar-panel li').on('click', function () {
    if (window.matchMedia("(max-width: 768px)").matches && window.matchMedia("(orientation:portrait)").matches) {
      $(this).closest('.sidebar-panel').removeClass('is-active');
      $('.huro-hamburger .icon-box-toggle').removeClass('active');
    }
  });

  if (typeof window.orientation !== 'undefined') {
    $('.sidebar-panel .inner').each(function () {
      var $this = $(this);
      var h = new Hammer(this);
      h.on("swipeleft", function () {
        console.log("Swipe left detected.");
        $this.closest('.sidebar-panel').removeClass('is-active');
        $('.huro-hamburger .icon-box-toggle').removeClass('active');
      });
    });
    $('.sidebar-search .inner').each(function () {
      var $this = $(this);
      var h = new Hammer(this);
      h.on("swipeleft", function () {
        console.log("Swipe left detected.");
        $this.closest('.sidebar-search').removeClass('is-active');
        $('.huro-hamburger .icon-box-toggle').removeClass('active');
      });
    });
    $('.is-messages #conversations-list').each(function () {
      var $this = $(this);
      var h = new Hammer(this);
      h.on("swipeleft", function () {
        console.log("Swipe left detected.");
        $this.closest('.is-messages').removeClass('is-active');
        $('.huro-hamburger .icon-box-toggle').removeClass('active');
      });
    });
    $('.main-sidebar .sidebar-inner, .view-wrapper').each(function () {
      var $this = $(this);
      var h = new Hammer(this);
      h.on("swiperight", function () {
        console.log("Swipe Right detected.");
        $('.sidebar-panel').addClass('is-active');
        $('.huro-hamburger .icon-box-toggle').addClass('active');
      });
    });
    $('.conversation-area .conversation').each(function () {
      var $this = $(this);
      var h = new Hammer(this);
      h.on("swipeleft", function () {
        console.log("Swipe left detected.");
        $this.closest('.conversation-area').removeClass('is-active');
      });
    });
  }
});