/*! components.js | Huro | Css Ninja. 2020-2021 */

/* ==========================================================================
Demo Components initialization file
========================================================================== */
"use strict";

var notyf;
$(document).ready(function () {
  //Notyf Toasts Configuration
  notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'right',
      y: 'bottom'
    },
    types: [{
      type: 'warning',
      background: themeColors.warning,
      icon: {
        className: 'fas fa-hand-paper',
        tagName: 'i',
        text: ''
      }
    }, {
      type: 'info',
      background: themeColors.info,
      icon: {
        className: 'fas fa-info-circle',
        tagName: 'i',
        text: ''
      }
    }, {
      type: 'primary',
      background: themeColors.primary,
      icon: {
        className: 'fas fa-car-crash',
        tagName: 'i',
        text: ''
      }
    }, {
      type: 'accent',
      background: themeColors.accent,
      icon: {
        className: 'fas fa-car-crash',
        tagName: 'i',
        text: ''
      }
    }, {
      type: 'purple',
      background: themeColors.purple,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: ''
      }
    }, {
      type: 'blue',
      background: themeColors.blue,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: ''
      }
    }, {
      type: 'green',
      background: themeColors.green,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: ''
      }
    }, {
      type: 'orange',
      background: themeColors.orange,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: ''
      }
    }]
  }); //Notyf Toasts Demos

  if ($('.toast-trigger').length) {
    $('#success-toast-demo').on('click', function () {
      notyf.success('Your changes have been successfully saved!');
    });
    $('#error-toast-demo').on('click', function () {
      notyf.error('Looks like something went wrong, try again later.');
    });
    $('#info-toast-demo').on('click', function () {
      notyf.open({
        type: 'info',
        message: 'This is some useful information that you might need.'
      });
    });
    $('#warning-toast-demo').on('click', function () {
      notyf.open({
        type: 'warning',
        message: 'Please be careful when driving back to home.'
      });
    });
    $('#purple-toast-demo').on('click', function () {
      notyf.open({
        type: 'purple',
        message: 'This is a nice looking purple toast notification.'
      });
    });
    $('#blue-toast-demo').on('click', function () {
      notyf.open({
        type: 'blue',
        message: 'This is a nice looking blue toast notification.'
      });
    });
    $('#green-toast-demo').on('click', function () {
      notyf.open({
        type: 'green',
        message: 'This is a nice looking green toast notification.'
      });
    });
    $('#orange-toast-demo').on('click', function () {
      notyf.open({
        type: 'orange',
        message: 'This is a nice looking orange toast notification.'
      });
    });
    $('#primary-toast-demo').on('click', function () {
      if ($('body').hasClass('is-dark')) {
        notyf.open({
          type: 'accent',
          message: 'Please be careful when driving back to home.'
        });
      } else {
        notyf.open({
          type: 'primary',
          message: 'Please be careful when driving back to home.'
        });
      }
    });
  } //Filepond


  FilePond.registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation, FilePondPluginFileValidateSize, FilePondPluginImageEdit);

  if ($('.filepond').length) {
    FilePond.create(document.querySelector('.filepond'));
  }

  if ($('.filepond-2-grid').length) {
    FilePond.create(document.querySelector('.filepond-2-grid'));
  }

  if ($('.filepond-3-grid').length) {
    FilePond.create(document.querySelector('.filepond-3-grid'));
  }

  if ($('.profile-filepond').length) {
    FilePond.create(document.querySelector('.profile-filepond'), {
      labelIdle: "<i class=\"lnil lnil-cloud-upload\"></>",
      imagePreviewHeight: 140,
      imageCropAspectRatio: '1:1',
      imageResizeTargetWidth: 140,
      imageResizeTargetHeight: 140,
      stylePanelLayout: 'compact circle',
      styleLoadIndicatorPosition: 'center bottom',
      styleProgressIndicatorPosition: 'right bottom',
      styleButtonRemoveItemPosition: 'left bottom',
      styleButtonProcessItemPosition: 'right bottom'
    });
  }

  if ($('.profile-filepond-small').length) {
    FilePond.create(document.querySelector('.profile-filepond-small'), {
      labelIdle: "<i class=\"lnil lnil-cloud-upload\"></>",
      imagePreviewHeight: 110,
      imageCropAspectRatio: '1:1',
      imageResizeTargetWidth: 110,
      imageResizeTargetHeight: 110,
      stylePanelLayout: 'compact circle',
      styleLoadIndicatorPosition: 'center bottom',
      styleProgressIndicatorPosition: 'right bottom',
      styleButtonRemoveItemPosition: 'left bottom',
      styleButtonProcessItemPosition: 'right bottom'
    });
  }

  if ($('.profile-filepond-tiny').length) {
    FilePond.create(document.querySelector('.profile-filepond-tiny'), {
      labelIdle: "<i class=\"lnil lnil-cloud-upload\"></>",
      imagePreviewHeight: 80,
      imageCropAspectRatio: '1:1',
      imageResizeTargetWidth: 80,
      imageResizeTargetHeight: 80,
      stylePanelLayout: 'compact circle',
      styleLoadIndicatorPosition: 'center bottom',
      styleProgressIndicatorPosition: 'right bottom',
      styleButtonRemoveItemPosition: 'left bottom',
      styleButtonProcessItemPosition: 'right bottom'
    });
  }

  if ($('.square-filepond').length) {
    FilePond.create(document.querySelector('.square-filepond'), {
      labelIdle: "<i class=\"lnil lnil-plus\"></>",
      imagePreviewHeight: 140,
      imageCropAspectRatio: '1:1',
      imageResizeTargetWidth: 140,
      imageResizeTargetHeight: 140,
      stylePanelLayout: 'compact circle',
      styleLoadIndicatorPosition: 'center bottom',
      styleProgressIndicatorPosition: 'right bottom',
      styleButtonRemoveItemPosition: 'left bottom',
      styleButtonProcessItemPosition: 'right bottom'
    });
  }

  if ($('.square-filepond-small').length) {
    FilePond.create(document.querySelector('.square-filepond-small'), {
      labelIdle: "<i class=\"lnil lnil-plus\"></>",
      imagePreviewHeight: 110,
      imageCropAspectRatio: '1:1',
      imageResizeTargetWidth: 110,
      imageResizeTargetHeight: 110,
      stylePanelLayout: 'compact circle',
      styleLoadIndicatorPosition: 'center bottom',
      styleProgressIndicatorPosition: 'right bottom',
      styleButtonRemoveItemPosition: 'left bottom',
      styleButtonProcessItemPosition: 'right bottom'
    });
  }

  if ($('.square-filepond-tiny').length) {
    FilePond.create(document.querySelector('.square-filepond-tiny'), {
      labelIdle: "<i class=\"lnil lnil-plus\"></>",
      imagePreviewHeight: 80,
      imageCropAspectRatio: '1:1',
      imageResizeTargetWidth: 80,
      imageResizeTargetHeight: 80,
      stylePanelLayout: 'compact circle',
      styleLoadIndicatorPosition: 'center bottom',
      styleProgressIndicatorPosition: 'right bottom',
      styleButtonRemoveItemPosition: 'left bottom',
      styleButtonProcessItemPosition: 'right bottom'
    });
  } //Light Gallery


  if ($('#lightgallery').length) {
    lightGallery(document.getElementById('lightgallery'));
  } //Video Gallery


  if ($('#videogallery').length) {
    lightGallery(document.getElementById('videogallery'));
  } //Picakday


  if ($('#pickaday-datepicker').length) {
    var picker = new Pikaday({
      field: document.getElementById('pickaday-datepicker'),
      format: 'D MMM YYYY',
      onSelect: function onSelect() {//Do your stuff
      }
    });
  } //Bulma datepicker extension


  if ($('#bulma-datepicker-1').length) {
    bulmaCalendar.attach('#bulma-datepicker-1', {
      color: themeColors.primary,
      lang: 'en'
    });
  }

  if ($('#bulma-datepicker-2').length) {
    bulmaCalendar.attach('#bulma-datepicker-2', {
      displayMode: 'dialog',
      startDate: new Date('02/11/2018'),
      minDate: '01/01/2018',
      maxDate: '12/31/2018',
      color: themeColors.primary,
      lang: 'en'
    });
  }

  if ($('#bulma-datepicker-3').length) {
    bulmaCalendar.attach('#bulma-datepicker-3', {
      displayMode: 'inline',
      startDate: new Date('02/11/2018'),
      minDate: '01/01/2018',
      maxDate: '12/31/2018',
      color: themeColors.primary,
      lang: 'en'
    });
  }

  if ($('#bulma-datepicker-4').length) {
    bulmaCalendar.attach('#bulma-datepicker-4', {
      color: themeColors.primary,
      lang: 'en'
    });
  }

  if ($('#bulma-datepicker-5').length) {
    bulmaCalendar.attach('#bulma-datepicker-5', {
      color: themeColors.primary,
      lang: 'en'
    });
  }

  if ($('#bulma-datepicker-6').length) {
    bulmaCalendar.attach('#bulma-datepicker-6', {
      color: themeColors.primary,
      lang: 'en'
    });
  }

  if ($('#bulma-datepicker-7').length) {
    bulmaCalendar.attach('#bulma-datepicker-7', {
      color: themeColors.primary,
      lang: 'en'
    });
  } //Choices js


  if ($('#choices-text-remove-button').length) {
    var textRemove = new Choices(document.getElementById('choices-text-remove-button'), {
      delimiter: ',',
      editItems: true,
      //maxItemCount: 5,
      removeItemButton: true
    });
  }

  if ($('#choices-multiple-remove-button').length) {
    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
      removeItemButton: true
    });
  } //Easyautocomplete


  if ($('#autocomplete-demo-simple').length) {
    var demoSimpleOptions = {
      url: "assets/data/user.json",
      getValue: "name",
      template: {
        type: "custom",
        method: function method(value, item) {
          return "\n                        <div class=\"template-wrapper\">\n                            <div class=\"entry-text\">\n                                <span>" + value + "</span>\n                            </div>\n                        </div>\n                    ";
        }
      },
      highlightPhrase: false,
      list: {
        maxNumberOfElements: 5,
        showAnimation: {
          type: "fade",
          //normal|slide|fade
          time: 400,
          callback: function callback() {}
        },
        match: {
          enabled: true
        },
        onChooseEvent: function onChooseEvent() {//do your stuff here
        }
      }
    };
    $("#autocomplete-demo-simple").easyAutocomplete(demoSimpleOptions);
  }

  if ($('#autocomplete-demo-subtext').length) {
    var demoSubtextOptions = {
      url: "assets/data/user.json",
      getValue: "name",
      template: {
        type: "custom",
        method: function method(value, item) {
          return "\n                        <div class=\"template-wrapper\">\n                            <div class=\"entry-text\">\n                                <span>" + value + "</span>\n                                <span>" + item.location + "</span>\n                            </div>\n                        </div>\n                    ";
        }
      },
      highlightPhrase: false,
      list: {
        maxNumberOfElements: 5,
        showAnimation: {
          type: "fade",
          //normal|slide|fade
          time: 400,
          callback: function callback() {}
        },
        match: {
          enabled: true
        },
        onChooseEvent: function onChooseEvent() {//do your stuff here
        }
      }
    };
    $("#autocomplete-demo-subtext").easyAutocomplete(demoSubtextOptions);
  }

  if ($('#autocomplete-demo-advanced').length) {
    var demoAdvancedOptions = {
      url: "assets/data/user.json",
      getValue: "name",
      template: {
        type: "custom",
        method: function method(value, item) {
          return "\n                        <div class=\"template-wrapper\">\n                            <div class=\"avatar-wrapper\">\n                                <img class=\"autocpl-avatar\" src=\"" + item.pic + "\">\n                                <img class=\"avatar-badge\" src=\"" + item.badge + "\">\n                            </div>\n                            <div class=\"entry-text\">\n                                <span>" + value + "</span>\n                                <span>" + item.location + "</span>\n                            </div>\n                        </div>\n                    ";
        }
      },
      highlightPhrase: false,
      list: {
        maxNumberOfElements: 5,
        showAnimation: {
          type: "fade",
          //normal|slide|fade
          time: 400,
          callback: function callback() {}
        },
        match: {
          enabled: true
        },
        onChooseEvent: function onChooseEvent() {//do your stuff here
        }
      }
    };
    $("#autocomplete-demo-advanced").easyAutocomplete(demoAdvancedOptions);
  } //NoUI Slider


  if ($('.noui-base-slider').length) {
    var sliders = document.getElementsByClassName('noui-base-slider');

    for (var i = 0; i < sliders.length; i++) {
      noUiSlider.create(sliders[i], {
        start: [10, 90],
        connect: true,
        orientation: "horizontal",
        range: {
          'min': 0,
          'max': 100
        }
      });
    }
  }

  if ($('.noui-vertical-slider').length) {
    var sliders2 = document.getElementsByClassName('noui-vertical-slider');

    for (var i = 0; i < sliders2.length; i++) {
      noUiSlider.create(sliders2[i], {
        start: [10, 90],
        connect: true,
        orientation: "vertical",
        range: {
          'min': 0,
          'max': 100
        }
      });
    }
  }

  if ($('#noui-range-slider').length) {
    var sliderRange = document.getElementById('noui-range-slider');
    noUiSlider.create(sliderRange, {
      start: [20],
      connect: [true, false],
      range: {
        'min': 0,
        'max': 100
      }
    });
  }

  if ($('.noui-tooltip-slider').length) {
    var tooltipSliders = document.getElementsByClassName('noui-tooltip-slider');

    for (var i = 0; i < tooltipSliders.length; i++) {
      var randomStart = Math.floor(Math.random() * 101);
      noUiSlider.create(tooltipSliders[i], {
        start: [randomStart],
        connect: [true, false],
        tooltips: [true],
        range: {
          'min': 0,
          'max': 100
        }
      });
    }
  } //Summernote Editor


  if ($('#summernote').length) {
    $('#summernote').summernote({
      placeholder: 'Hello stand alone ui',
      tabsize: 2,
      height: 250,
      // set editor height
      minHeight: null,
      // set minimum height of editor
      maxHeight: null,
      // set maximum height of editor
      focus: true,
      toolbar: [['style', ['style']], ['font', ['bold', 'underline', 'clear']], ['para', ['ul', 'ol', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture', 'video']], ['view', ['codeview', 'help']]]
    });
  } //Sun Editor


  if ($('#sun-editor').length) {
    var editor = SUNEDITOR.create(document.getElementById('sun-editor') || 'sun-editor', {
      width: '100%',
      height: 250,
      placeholder: 'Write your text here...' //mode: 'balloon-always'

    });
  }

  if ($('#sun-editor-balloon').length) {
    var _editor = SUNEDITOR.create(document.getElementById('sun-editor-balloon') || 'sun-editor-balloon', {
      width: '100%',
      height: 250,
      placeholder: 'Write your text here...',
      mode: 'balloon-always'
    });
  } //Video Player


  if ($('#video-player').length) {
    // get target from media with controls
    var $target = document.querySelector('audio[controls], video[controls]'); // assign media player from target (all these options represent the defaults)

    var player = new MediaPlayer($target, {
      prefix: 'media',
      lang: {
        play: 'play',
        pause: 'pause',
        mute: 'mute',
        unmute: 'unmute',
        volume: 'volume',
        currentTime: 'current time',
        remainingTime: 'remaining time',
        enterFullscreen: 'enter fullscreen',
        leaveFullscreen: 'leave fullscreen',
        download: 'download'
      },
      svgs: {
        play: '#symbol-play',
        pause: '#symbol-pause',
        mute: '#symbol-mute',
        unmute: '#symbol-unmute',
        volume: '#symbol-volume',
        currentTime: '#symbol-currentTime',
        remainingTime: '#symbol-remainingTime',
        enterFullscreen: '#symbol-enterFullscreen',
        leaveFullscreen: '#symbol-leaveFullscreen',
        download: '#symbol-download'
      },
      timeDir: 'ltr',
      volumeDir: 'ltr'
    });
  } //Alertify


  if ($('#alertify-demo-1').length) {
    $('#alertify-demo-1').on('click', function () {
      initConfirm('Standard Alert', 'Are you sure you want to perfom this action? You won\'t be able to recover or to revert it.', false, false, 'Delete', 'Cancel');
    });
  }

  if ($('#alertify-demo-2').length) {
    $('#alertify-demo-2').on('click', function () {
      initConfirm('Custom Alert', 'You can pass a callback function as a callback parameter to define what happens after the confirm button is clicked.', false, false, 'Callback', 'Cancel', function (closeEvent) {
        alert('The callback was executed!');
      });
    });
  } //Svg Circke Chart


  if ($('.circle-chart-wrapper').length) {
    $('.circle-chart-wrapper').each(function () {
      var $this = $(this);
      var completion = $this.attr('data-completion');
      $this.find('.circle-chart__circle').attr('stroke-dasharray', completion + ',100');
    });
  } //Demo Loaders


  if ($('#show-demo-loaders').length) {
    $('#show-demo-loaders').on('click', function () {
      var $this = $(this);
      $this.addClass('is-loading no-click');
      $('.has-loader').addClass('has-loader-active');
      setTimeout(function () {
        $('.has-loader').removeClass('has-loader-active');
        $this.removeClass('is-loading no-click');
      }, 3000);
    });
  }
});