import HeartbeatCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';
import { dateTimeFormatter } from '../../utils';

const element = 'heartbeat';

const ModelView = ModelViewFactory(element, ['name']);

class HeartbeatView extends ModelView {
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
      formatted_date: hasRun ? dateTimeFormatter(data.last_activity) : null,
    };
  }

  editModel() {
    this.editModel();

    $(`#${element}_interval_${this.model.get('interval')}`).prop('checked', true);
  }
}

export default CollectionViewFactory(element, HeartbeatCollection, HeartbeatView);
