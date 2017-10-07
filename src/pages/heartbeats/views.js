import moment from 'moment';

import HeartbeatCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class HeartbeatView extends ModelView {
  constructor(options) {
    super(options, '#heartbeat-template');
  }

  viewData() {
    const data = this.model.toJSON();

    let css = 'primary';
    let icon = 'question';
    let status = 'Untested';
    let hasRun = false;

    if (this.model.isOK()) {
      css = 'success';
      icon = 'check';
      status = 'OK';
      hasRun = true;
    } else if (this.model.isMissing()) {
      css = 'danger';
      icon = 'warning';
      status = 'Missing';
      hasRun = !!data.last_activity;
    }

    return {
      ...data,
      status_css: css,
      icon_css: icon,
      status,
      has_run: hasRun,
      interval_label: `${data.interval} mins`,
      formatted_date: hasRun ? moment(data.last_activity).format('Do MMMM YYYY h:mm:ss A') : null,
    };
  }

  editModel() {
    this.populateDialog('heartbeat', ['name']);

    $(`#heartbeat_interval_${this.model.get('interval')}`).prop('checked', true);
  }
}

export default CollectionViewFactory('heartbeat', HeartbeatCollection, HeartbeatView);
