/*! wizard-v1.js | Huro | Css ninja 2020-2021 */
"use strict";

var project = {
  customer: {},
  info: {},
  members: [],
  tools: []
};
var currentStep = 0;
var delay = 1200; //1200

function buildProjectPreview(object) {
  //1. Handle Project Type
  var typeIcon;

  if (object.type == 'UI/UX Design') {
    typeIcon = "\n            <div class=\"h-icon is-medium is-warning is-rounded\">\n                <i class=\"lnil lnil-vector-pen\"></i>\n            </div>\n        ";
  } else if (object.type == 'Web Development') {
    typeIcon = "\n            <div class=\"h-icon is-medium is-info is-rounded\">\n                <i class=\"lnil lnil-layout\"></i>\n            </div>\n        ";
  } else if (object.type == 'Marketing') {
    typeIcon = "\n            <div class=\"h-icon is-medium is-success is-rounded\">\n                <i class=\"lnil lnil-megaphone\"></i>\n            </div>\n        ";
  }

  var typeTemplate = "\n        <div class=\"media-flex-center\">\n            " + typeIcon + "\n            <div class=\"flex-meta\">\n                <span>" + object.type + "</span>\n                <span>Project Type</span>\n            </div>\n        </div>\n    ";
  $('#project-preview-type').find('.media-flex-center').remove();
  $('#project-preview-type').append(typeTemplate); //2. Project Name & description

  if (project.name != '') {
    $('#project-preview-title span').html(project.name);
  } else {
    $('#project-preview-title span').html('Project Name Goes Here');
  }

  if (project.description != '') {
    $('#project-preview-description').html(project.description);
  } else {
    $('#project-preview-description').html('You didn\'t enter any description. You can edit it anytime by clicking on the small edit icon.');
  } //3. Project Customer


  if (project.customer.logoUrl != undefined || project.customer.name != '') {
    $('#project-preview-customer-logo').attr('src', project.customer.logoUrl);
    $('#project-preview-customer-name').html(project.customer.name);
    $('#project-preview-customer-placeholder').addClass('is-hidden');
    $('#project-preview-customer-block').removeClass('is-hidden');
  } else {
    $('#project-preview-customer-block').addClass('is-hidden');
    $('#project-preview-customer-placeholder').removeClass('is-hidden');
  } //4. Project Info


  $('#project-preview-budget span').html(project.info.budget);

  if (project.info.date != '') {
    $('#project-preview-date span').html(project.info.date);
  } else {
    $('#project-preview-date span').html('Unset');
  }

  $('#project-preview-attachments span').html(project.info.attachments); //5. Team

  $('#project-preview-team .media-list-item:not(.is-owner)').remove();

  for (var m = 0; m < project.members.length; m++) {
    var teamTemplate = "\n            <div class=\"media-list-item\">\n                <div class=\"media-flex-center\">\n                    <div class=\"h-avatar\">\n                        <img class=\"avatar\" src=\"" + project.members[m].photoUrl + "\">\n                    </div>\n                    <div class=\"flex-meta\">\n                        <span>" + project.members[m].name + "</span>\n                        <span>Member</span>\n                    </div>\n                </div>\n            </div>\n        ";
    $('#project-preview-team').append(teamTemplate);
  } //6. Tools


  $('#project-preview-tools .media-list-item').remove();

  if (project.tools.length > 0) {
    $('#project-preview-tools-placeholder').addClass('is-hidden');
    $('#project-preview-tools').removeClass('is-hidden');

    for (var t = 0; t < project.tools.length; t++) {
      var toolTemplate = "\n                <div class=\"media-list-item\">\n                    <div class=\"media-flex-center\">\n                        <div class=\"h-avatar is-small\">\n                            <img class=\"avatar\" src=\"" + project.tools[t].photoUrl + "\">\n                        </div>\n                        <div class=\"flex-meta\">\n                            <span>" + project.tools[t].name + "</span>\n                            <span>" + project.tools[t].type + "</span>\n                        </div>\n                    </div>\n                </div>\n            ";
      $('#project-preview-tools').append(toolTemplate);
    }
  } else {
    $('#project-preview-tools').addClass('is-hidden');
    $('#project-preview-tools-placeholder').removeClass('is-hidden');
  }

  console.log(project);
}

function handleProgress(value) {
  $('#wizard-progress').val(value);
}

function goToStep(step) {
  currentStep = step;
  $('.wizard-v1-wrapper .inner-wrapper').removeClass('is-active');
  $('#wizard-step-' + step).addClass('is-active');
  var stepTitle = $('.inner-wrapper.is-active').attr('data-step-title');
  var titleHtml = "\n        <span class=\"title-wrap\">Step " + (step + 1) + ": <span>" + stepTitle + "</span></span>\n    ";
  $('.is-wizard-title').html(titleHtml);
  $('.project-preview-loader').addClass('is-active');

  if (currentStep > 0) {
    $('.wizard-buttons').addClass('is-active');
  }

  if (currentStep == 0) {
    handleProgress(15);
    $('.wizard-buttons').removeClass('is-active');
  } else if (currentStep == 1) {
    handleProgress(25);
  } else if (currentStep == 2) {
    handleProgress(45);
  } else if (currentStep == 3) {
    handleProgress(60);
  } else if (currentStep == 4) {
    handleProgress(75);
  } else if (currentStep == 5) {
    handleProgress(85);
  } else if (currentStep == 6) {
    handleProgress(95);
    buildProjectPreview(project);
    setTimeout(function () {
      $('.project-preview-loader').removeClass('is-active');
    }, 800);
  } else if (currentStep == 7) {
    handleProgress(100);
    $('.wizard-buttons').removeClass('is-active');
    $('.wizard-dropdown').addClass('is-hidden');
  }

  $('[data-dropdown-step="' + step + '"]').removeClass('is-disabled');
}

function initPermissions() {
  $('.permission-level-inner').off().on('click', function () {
    var $this = $(this);
    var progress = $this.attr('data-progress');
    $this.closest('.permission-levels').find('.progress').val(progress);
    $this.addClass('is-active');
    $this.closest('.permission-level').prevAll().find('.permission-level-inner').addClass('is-active');
    $this.closest('.permission-level').nextAll().find('.permission-level-inner').removeClass('is-active');
  });
}

function removeMember() {
  $('.invited-member .cancel-button').off().on('click', function () {
    $(this).closest('.invited-member').remove();
    var memberCount = $('.invited-member').length;

    if (memberCount === 0) {
      $('.empty-wrap').removeClass('is-hidden');
    }
  });
}

function addMember(MemberId, MemberPhoto, MemberName) {
  var template = "\n        <div id=\"invited-member-" + MemberId + "\" class=\"invited-member\">\n            <div class=\"h-avatar is-medium\">\n                <img class=\"avatar\" src=\"" + MemberPhoto + "\" alt=\"\">\n            </div>\n            <div class=\"meta\">\n                <span>Invited</span>\n                <p class=\"dark-inverted\">" + MemberName + "</p>\n            </div>\n            <div class=\"actions\">\n                <div class=\"permissions\">\n                    <div class=\"permission-levels\">\n                        <div class=\"permission-level hint--bubble hint--primary hint--top\" aria-label=\"Reader\">\n                            <div class=\"permission-level-inner is-active\" data-progress=\"20\"></div>\n                        </div>\n                        <div class=\"permission-level hint--bubble hint--primary hint--top\" aria-label=\"Collaborator\">\n                            <div class=\"permission-level-inner\" data-progress=\"50\"></div>\n                        </div>\n                        <div class=\"permission-level hint--bubble hint--primary hint--top\" aria-label=\"Manager\">\n                            <div class=\"permission-level-inner\" data-progress=\"68\"></div>\n                        </div>\n                        <div class=\"permission-level hint--bubble hint--primary hint--top\" aria-label=\"Owner\">\n                            <div class=\"permission-level-inner\" data-progress=\"100\"></div>\n                        </div>\n                        <progress class=\"progress permissions-progress is-primary is-tiny\" value=\"20\" max=\"100\">20%</progress>\n                    </div>\n                </div>\n                <button class=\"button is-circle cancel-button hint--top hint--bubble hint--primary\" aria-label=\"Cancel Invite\">\n                    <i class=\"fas fa-times\"></i>\n                </button>\n            </div>\n        </div>\n    ";
  $('.empty-wrap').addClass('is-hidden');

  if ($('#invited-member-' + MemberId).length) {
    notyf.open({
      type: 'warning',
      message: 'You already Invited ' + MemberName
    });
  } else {
    $('.members-list').append(template);
    removeMember();
    initPermissions();
  }
}

$(document).ready(function () {
  //Step 1 card buttons
  $('.type-select-button').on('click', function () {
    var $this = $(this);
    var projectType = $(this).closest('.wizard-card').find('h3').text();
    project.type = projectType;
    $this.addClass('is-loading');
    setTimeout(function () {
      $this.removeClass('is-loading');
      goToStep(currentStep + 1);
    }, delay);
  }); //Wizard buttons

  $('.wizard-button-next').on('click', function () {
    var $this = $(this);
    $this.addClass('is-loading');

    if (currentStep == 1) {
      project.name = $('#project-name').val();
      project.description = $('#project-description').val();
    } else if (currentStep == 2) {
      project.customer.logoUrl = $('.media-flex-center:not(.is-hidden) #customer-logo').attr('src');
      project.customer.name = $('.media-flex-center:not(.is-hidden) #customer-name').text();
      project.info.date = $('#project-end-date').val();
      project.info.budget = $('.budget-item-inner.is-active span').text();
    } else if (currentStep == 3) {
      project.info.attachments = $('.preview-box').length;
    } else if (currentStep == 4) {
      project.members.splice(0, project.members.length);
      var invitedCount = $('.invited-member').length;

      if (invitedCount > 0) {
        $('.invited-member').each(function () {
          var memberPhoto = $(this).find('img').attr('src');
          var memberName = $(this).find('.meta p').text();
          project.members.push({
            name: memberName,
            photoUrl: memberPhoto
          });
        });
      }
    } else if (currentStep == 5) {
      project.tools.splice(0, project.tools.length);
      var toolsCount = $('.tool-card input:checked').length;

      if (toolsCount > 0) {
        $('.tool-card input:checked').each(function () {
          var container = $(this).closest('.tool-card');
          var toolPhoto = container.find('img').attr('src');
          var toolName = container.find('.flex-meta span:first-child').text();
          var toolType = container.find('.flex-meta span:nth-child(2)').text();
          project.tools.push({
            name: toolName,
            photoUrl: toolPhoto,
            type: toolType
          });
        });
      }
    }

    setTimeout(function () {
      $this.removeClass('is-loading');
      goToStep(currentStep + 1);
    }, delay);
  });
  $('.wizard-button-previous').on('click', function () {
    var $this = $(this);
    $this.addClass('is-loading');
    setTimeout(function () {
      $this.removeClass('is-loading');
      goToStep(currentStep - 1);
    }, delay);
  }); //Wizard nav dropdown

  $('#wizard-navigation-dropdown .dropdown-item').on('click', function () {
    var targetStep = parseInt($(this).attr('data-dropdown-step'));
    goToStep(targetStep);
  }); //Init datepickers

  var datepickers = document.querySelectorAll('.form-datepicker');
  var datePicker = [];
  console.log(datepickers.length);

  for (var i = 0; i < datepickers.length; i++) {
    datePicker[i] = new Pikaday({
      field: datepickers[i],
      firstDay: 1,
      format: 'MMM D, YYYY',
      onSelect: function onSelect() {//Do your stuff
      }
    });
  } //Autocomplete


  var customerOptions = {
    url: "assets/data/companies.json",
    getValue: "name",
    template: {
      type: "custom",
      method: function method(value, item) {
        return "\n                    <div class=\"template-wrapper\">\n                        <div class=\"avatar-wrapper\">\n                            <img class=\"autocpl-avatar\" src=\"" + item.pic + "\">\n                        </div>\n                        <div class=\"entry-text\">\n                            <span>" + value + "</span>\n                            <span>" + item.location + "</span>\n                        </div>\n                    </div>\n                ";
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
      onChooseEvent: function onChooseEvent() {
        var value = $("#customers-search").getSelectedItemData();
        $('#customer-logo').attr('src', value.pic);
        $('#customer-name').html(value.name);
        $('#customer-location').html(value.location);
        $('.project-customer').find('.field, .media-flex-center').toggleClass('is-hidden'); //console.log('You chose the customer named ' + value + ' and who lives in ' + item.location);
      }
    }
  };
  $("#customers-search").easyAutocomplete(customerOptions); //Remove Customer

  $('#remove-customer').on('click', function () {
    $("#customers-search").val('');
    $('.project-customer').find('.field, .media-flex-center').toggleClass('is-hidden');
  });
  $('.project-budget .budget-item-inner').on('click', function () {
    var $container = $(this).closest('.project-budget');
    $container.find('.budget-item-inner').removeClass('is-active');
    $(this).addClass('is-active');
  });
  $('.toggle-uploader-link').on('click', function () {
    $('.uploader, .page-placeholder.is-files').toggleClass('is-hidden');
  }); //Add Members

  var members = 0;
  $('.toggle-members-link').on('click', function () {
    $('.project-team-wrapper, .page-placeholder.is-people').toggleClass('is-hidden');
  });

  if ($('#add-member').length) {
    var membersOptions = {
      url: "assets/data/user.json",
      getValue: "name",
      template: {
        type: "custom",
        method: function method(value, item) {
          return "\n                        <div class=\"template-wrapper\">\n                            <div class=\"avatar-wrapper\">\n                                <img class=\"autocpl-avatar\" src=\"" + item.pic + "\" alt=\"\">\n                            </div>\n                            <div class=\"entry-text\">\n                                <span>" + value + "</span>\n                                <span>" + item.position + "</span>\n                            </div>\n                        </div>\n                    ";
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
        onChooseEvent: function onChooseEvent() {
          //Get the user name from the autocomplete
          var memberName = $('#add-member').val();
          var memberPhoto = $('#add-member').getSelectedItemData().pic;
          var memberId = $('#add-member').getSelectedItemData().id;
          addMember(memberId, memberPhoto, memberName); //empty the input for next use

          $('#add-member').val(''); //Increment instructor variable

          members = members + 1;
        }
      }
    };
    $("#add-member").easyAutocomplete(membersOptions);
  } //Preview


  $('.edit-icon').on('click', function () {
    var targetStep = parseInt($(this).attr('data-step-edit'));
    goToStep(targetStep);
  });
});