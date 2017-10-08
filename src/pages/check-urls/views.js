import CheckUrlCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';
import { dateTimeFormatter } from '../../utils';

const element = 'checkurl';

const ModelView = ModelViewFactory(
  element,
  ['name', 'url'],
  {
    'click .btn-view': 'showLog',
  }
);

class CheckUrlView extends ModelView {
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
      formatted_date: hasRun ? dateTimeFormatter(data.last_seen) : null,
    };
  }

  showLog() {
    const modal = $('div.modal#result');

    modal.find('pre').text(this.model.get('last_log'));
    modal.find('.modal-title span').text('Log');
  }

  editModel() {
    super.editModel();

    $(`#${element}_period_${this.model.get('period')}`).prop('checked', true);
  }
}

const getInput = () => {
  return {
    name: $(`#${element}_name`).val(),
    url: $(`#${element}_url`).val(),
    period: parseInt($('input[name=period]:checked').val(), 10),
    project_id: parseInt($('input[name="project_id"]').val(), 10)
  };
};

export default CollectionViewFactory(element, CheckUrlCollection, CheckUrlView, getInput);
