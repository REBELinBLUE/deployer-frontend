import $ from 'jquery';
import 'select2';

import listener from '../listener';
import { MODEL_CHANGED } from '../listener/events';
import routes from '../routes';

const selectOptions = {
  width: '80%',
  minimumResultsForSearch: 6,
};

function resetWebhook(event) {
  const target = $(event.currentTarget);
  const projectId = target.data('project-id'); // FIXME: Can't we just use window.app.getProjectId();?
  const icon = $('i', target);

  if ($('.fa-spin', target).length > 0) {
    return;
  }

  target.attr('disabled', 'disabled');

  icon.addClass('fa-spin');

  $.ajax({
    type: 'GET',
    url: routes.webhook(projectId),
  }).done((data) => {
    $('#webhook').html(data.url);
  }).always(() => {
    icon.removeClass('fa-spin');
    target.removeAttr('disabled');
  });
}

function deploymentSource(event) {
  const target = $(event.currentTarget);

  $('div.deployment-source-container').hide();
  if (target.val() === 'branch') {
    $('#deployment_branch').parent('div').show();
  } else if (target.val() === 'tag') {
    $('#deployment_tag').parent('div').show();
  }
}

function resetDialog(dialog) {
  $(':input', dialog).not('.close').removeAttr('disabled');
  $('button.close', dialog).show();
  $('i.fa-spin', dialog).removeClass('fa-spin');
}

function resetOptions(selector, data) {
  const options = {
    ...selectOptions,
    data,
  };

  $('option', selector).remove();

  $(selector).select2('destroy');
  $(selector).select2(options);
}

function refreshBranches(event) {
  const target = $(event.currentTarget);
  const projectId = target.data('project-id'); // FIXME: Can't we just use window.app.getProjectId();?
  const icon = $('i', target);
  const dialog = target.parents('.modal');

  if ($('.fa-spin', target).length > 0) {
    return;
  }

  $(':input', dialog).not('.close').attr('disabled', 'disabled');
  $('button.close', dialog).hide();

  icon.addClass('fa-spin');

  $.ajax({
    type: 'POST',
    url: routes.branches(projectId),
  }).fail(() => resetDialog(dialog));
}

function triggerDeployment(event) {
  const target = $(event.currentTarget);
  const icon = target.find('i');
  const dialog = target.parents('.modal');
  const source = $('input[name="source"]:checked').val();

  $('.has-error', source).removeClass('has-error');

  if (source === 'branch' || source === 'tag') {
    if ($(`#deployment_${source}`).val() === '') {
      $(`#deployment_${source}`).parentsUntil('div').addClass('has-error');

      $('.callout-danger', dialog).show();
      event.stopPropagation();
      return;
    }
  }

  icon.addClass('fa-refresh fa-spin').removeClass('fa-save');
  $('button.close', dialog).hide();
}

// FIXME: Convert to class
export default () => {
  $('#new_webhook').on('click', resetWebhook);
  $('.deployment-source:radio').on('change', deploymentSource);
  $('button.btn-refresh-branches').on('click', refreshBranches);
  $('#reason button.btn-save').on('click', triggerDeployment);
  $('select.deployment-source').select2(selectOptions);

  $('#reason').on('show.bs.modal', (event) => {
    const dialog = $(event.currentTarget);

    $('.callout-danger', dialog).hide();
  });

  listener.on(`project:${MODEL_CHANGED}`, (data) => {
    if (parseInt(data.model.id, 10) === window.app.getProjectId()) {
      resetOptions('select.deployment-source#deployment_branch', data.model.branches);
      resetOptions('select.deployment-source#deployment_tag', data.model.tags);

      const dialog = $('.modal#reason');
      resetDialog(dialog);
    }
  });
};
