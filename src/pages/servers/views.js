import $ from 'jquery';

import ServerCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';
import { logFormatter } from '../../utils';

const element = 'server';

const ModelView = ModelViewFactory(
  element,
  ['name', 'ip_address', 'port', 'user', 'path'],
  {
    'click .btn-test': 'testConnection',
    'click .btn-view': 'showLog',
  }
);

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

const getInput = () => {
  return {
    name: $(`#${element}_name`).val(),
    ip_address: $(`#${element}_ip_address`).val(),
    port: $(`#${element}_port`).val(),
    user: $(`#${element}_user`).val(),
    path: $(`#${element}_path`).val(),
    deploy_code: $(`#${element}_deploy_code`).is(':checked'),
    project_id: parseInt($('input[name="project_id"]').val(), 10),
    add_commands: $(`#${element}_commands`).is(':checked')
  };
};

export default CollectionViewFactory(element, ServerCollection, ServerView, getInput);
