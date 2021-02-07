/*! board.js | Huro | Css Ninja 2020-2021 */

/* ==========================================================================
Project Board JS
========================================================================== */
"use strict";

$(document).ready(function () {
  if ($('#project-board').length) {
    //Update column items count after a task has been moved
    var drop = function drop(el) {
      $('.kanban-column').each(function () {
        var taskCount = $(this).find('.kanban-card').length;
        $('.column-title h3 span:nth-child(2)', this).html(taskCount);
        $('.collapsed-content .task-count span', this).html(taskCount);

        if (taskCount == 0) {
          $(this).addClass('is-empty');
        } else {
          $(this).removeClass('is-empty');
        }
      });
    };
    /* ============================================================================
        2. New Tasks
    ============================================================================ */
    //Demo animation when a new task is approved


    /* ============================================================================
        1. Drag and Drop
    ============================================================================ */
    //Instantiate Dragula js
    var drake = dragula([document.querySelector('#kanban-1'), document.querySelector('#kanban-2'), document.querySelector('#kanban-3')]).on('drop', drop);
    $('.kanban-card.is-new .card-footer-item:nth-child(2)').on('click', function () {
      var $this = $(this);
      var title = $this.closest('.kanban-card').find('.card-title').text();
      $this.closest('.kanban-card').css({
        'transform': 'translateY(-40px)',
        'opacity': 0
      });
      setTimeout(function () {
        $this.closest('.kanban-card').remove();
        $('#kanban-1').prepend("\n                    <div class=\"kanban-card gelatine\">\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">" + title + "</h4>\n                            <div class=\"kanban-card-stats\">\n                                <span>\n                                    <i data-feather=\"clock\"></i>\n                                    2 weeks\n                                </span>\n                                <div class=\"avatar-stack\">\n                                    <div class=\"h-avatar is-small\">\n                                        <img class=\"avatar\" src=\"https://via.placeholder.com/150x150\"\n                                            data-demo-src=\"assets/img/avatars/svg/2.gif\" alt=\"\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                ");

        if (env === 'development') {
          changeDemoImages();
        }
      }, 400);
      setTimeout(function () {
        $('.kanban-column').each(function () {
          var taskCount = $(this).find('.kanban-card').length;
          $('.column-title h3 span:nth-child(2)', this).html(taskCount);
          $('.collapsed-content .task-count span', this).html(taskCount);

          if (taskCount == 0) {
            $(this).addClass('is-empty');
          } else {
            $(this).removeClass('is-empty');
          }
        });
      }, 600);
    });
    /* ============================================================================
        4. Kanban Features
    ============================================================================ */

    var initialName = ''; //Kanban column rename

    $('.kanban-rename').on('click', function () {
      initialName = $(this).closest('.column-title').find('.column-name').text();
      console.log(initialName);
      $(this).closest('.column-title').find('h3, .input').toggleClass('is-hidden');
      $(this).closest('.column-title').find('.input').focus();
    });
    $('.rename-input').on('blur', function () {
      var inputText = $(this).val();
      $(this).val('');

      if (inputText.length == 0) {
        $(this).closest('.column-title').find('.column-name').text(initialName);
        $(this).closest('.kanban-column').find('.collapsed-content .collapsed-text').text(initialName);
        $(this).closest('.column-title').find('h3, .input').toggleClass('is-hidden');
      } else {
        $(this).closest('.column-title').find('.column-name').text(inputText);
        $(this).closest('.kanban-column').find('.collapsed-content .collapsed-text').text(inputText);
        $(this).closest('.column-title').find('h3, .input').toggleClass('is-hidden');
      }
    }); //Kanban column collapse

    $('.kanban-collapse').on('click', function () {
      $(this).closest('.column').removeClass('is-one-fifth').addClass('is-1 is-mini').find('.kanban-column').addClass('is-collapsed');
    });
    $('.expand-button').on('click', function () {
      $(this).closest('.column').removeClass('is-1 is-mini').addClass('is-one-fifth').find('.kanban-column').removeClass('is-collapsed');
    });
  }
});