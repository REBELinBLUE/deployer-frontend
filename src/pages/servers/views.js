import ServerCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class ServerView extends ModelView {
  constructor(options) {
    super({
      ...options,
      events: {
        'click .btn-test': 'testConnection',
        'click .btn-view': 'showLog',
      },
    }, '#server-template');
  }

  showLog() {
    console.log('show log', this.model.id);
  }

  testConnection() {
    console.log('test connection', this.model.id);
  }

  viewData() {
    const data = super.viewData();

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
    $('#server_id').val(this.model.id);
    $('#server_name').val(this.model.get('name'));
    $('#server_address').val(this.model.get('ip_address'));
    $('#server_port').val(this.model.get('port'));
    $('#server_user').val(this.model.get('user'));
    $('#server_path').val(this.model.get('path'));

    $('#server_deploy_code').prop('checked', (this.model.get('deploy_code') === true));
  }
}

export default CollectionViewFactory('server', ServerCollection, ServerView);
