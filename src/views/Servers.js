import $ from 'jquery';
import 'devbridge-autocomplete';

import ServerCollection from '../collections/Servers';
import CollectionViewFactory from '../factories/CollectionViewFactory';
import ModelViewFactory from '../factories/ModelViewFactory';
import { logFormatter } from '../utils/formatters';
import routes from '../routes';
import reorderModels from '../handlers/reorderModels';

const element = 'server';
const fields = ['name', 'ip_address', 'port', 'user', 'path'];

const ModelView = ModelViewFactory(
  element,
  fields,
  {
    'click .btn-test': 'testConnection',
    'click .btn-view': 'showLog',
  },
);

$(`#${element} #${element}_name`).autocomplete({
  serviceUrl: routes.serversAutocomplete,
  dataType: 'json',
  noCache: true,
  preserveInput: true,
  transformResult: response => ({
    suggestions: $.map(response.suggestions, dataItem => ({
      value: `${dataItem.name} (${dataItem.user}@${dataItem.ip_address})`,
      data: dataItem,
    })),
  }),
  onSelect: (suggestion) => {
    fields.forEach((field) => {
      $(`#${element}_${field}`).val(suggestion.data[field]);
    });

    $(`#${element}_deploy_code`).prop('checked', suggestion.data.deploy_code);
  },
});

class ServerView extends ModelView {
  viewData() {
    const data = this.model.toJSON();

    let css = 'primary';
    let icon = 'question';
    let status = 'Untested';
    let hasLog = false;

    if (this.model.isSuccessful()) {
      css = 'success';
      icon = 'check';
      status = 'Successful';
    } else if (this.model.isTesting()) {
      css = 'warning';
      icon = 'spinner fa-pulse';
      status = 'Testing';
    } else if (this.model.isFailed()) {
      css = 'danger';
      icon = 'warning';
      status = 'Failed';
      hasLog = !!data.connect_log;
    }

    return {
      ...data,
      status_css: css,
      icon_css: icon,
      status,
      has_log: hasLog,
    };
  }

  editModel() {
    super.editModel();

    $(`#${element}_deploy_code`).prop('checked', (this.model.get('deploy_code') === true));
  }

  showLog() {
    const modal = $('div.modal#result');

    modal.find('pre').html(logFormatter(this.model.get('connect_log')));
    modal.find('.modal-title span').text('View Log');
  }

  testConnection() {
    if (this.model.isTesting()) {
      return;
    }

    this.model.testConnection();
  }
}

reorderModels(element, routes.serversReorder);

const getInput = () => ({
  name: $(`#${element}_name`).val(),
  ip_address: $(`#${element}_ip_address`).val(),
  port: $(`#${element}_port`).val(),
  user: $(`#${element}_user`).val(),
  path: $(`#${element}_path`).val(),
  deploy_code: $(`#${element}_deploy_code`).is(':checked'),
  project_id: parseInt($('input[name="project_id"]').val(), 10),
  add_commands: $(`#${element}_commands`).is(':checked'),
});

export default CollectionViewFactory(element, ServerCollection, ServerView, getInput);
