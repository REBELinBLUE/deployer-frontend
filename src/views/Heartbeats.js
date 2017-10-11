import $ from 'jquery';

import HeartbeatCollection from '../collections/Heartbeats';
import CollectionViewFactory from '../factories/CollectionViewFactory';
import ModelViewFactory from '../factories/ModelViewFactory';
import { dateTimeFormatter } from '../utils/formatters';

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
    super.editModel();

    $(`#${element}_interval_${this.model.get('interval')}`).prop('checked', true);
  }
}

const getInput = () => ({
  name: $(`#${element}_name`).val(),
  interval: parseInt($('input[name=interval]:checked').val(), 10), // FIXME: Need a better selector
  project_id: parseInt($('input[name="project_id"]').val(), 10),
});

export default CollectionViewFactory(element, HeartbeatCollection, HeartbeatView, getInput);
