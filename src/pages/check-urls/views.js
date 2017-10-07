import moment from 'moment';

import CheckUrlCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class CheckUrlView extends ModelView {
  constructor(options) {
    super({
      ...options,
      events: {
        'click .btn-view': 'showLog',
      },
    }, '#checkurl-template');
  }

  showLog() {
    const modal = $('div.modal#result');

    modal.find('pre').text(this.model.get('last_log'));
    modal.find('.modal-title span').text('Log');
  }

  editModel() {
    this.populateDialog('url', ['name', 'url']);

    $(`#period_${this.model.get('period')}`).prop('checked', true);
  }

  viewData() {
    const data = this.model.toJSON();

    let css = 'primary';
    let icon = 'question';
    let status = 'Untested';
    let hasRun = false;
    let hasLog = false;

    if (this.model.isOffline()) {
      css = 'danger';
      icon = 'warning';
      status = 'Failed';
      hasRun = !!data.last_seen;
      hasLog = !!data.last_log;
    } else if (this.model.isOnline()) {
      css = 'success';
      icon = 'check';
      status = 'Online';
      hasRun = true;
    }

    return {
      ...data,
      status_css: css,
      icon_css: icon,
      status,
      has_run: hasRun,
      has_log: hasLog,
      interval_label: `${data.period} mins`,
      formatted_date: hasRun ? moment(data.last_seen).format('Do MMMM YYYY h:mm:ss A') : null,
    };
  }
}

export default CollectionViewFactory('checkurl', CheckUrlCollection, CheckUrlView);
