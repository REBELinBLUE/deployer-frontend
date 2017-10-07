import ProjectCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';
import { dateTimeFormatter } from '../../utils';

const element = 'project';

const ModelView = ModelViewFactory(
  element,
  ['name', 'repository', 'branch', 'group_id', 'builds_to_keep', 'url', 'build_url']
);

class ProjectView extends ModelView {
  viewData() {
    const data = this.model.toJSON();

    return {
      ...data,
      deploy: data.last_run ? dateTimeFormatter(data.last_run) : null,
    };
  }

  editModel() {
    super.editModel();

    $(`#${element}_allow_other_branch`).prop('checked', (this.model.get('allow_other_branch') === true));
    $(`#${element}_include_dev`).prop('checked', (this.model.get('include_dev') === true));
    $(`#${element}_private_key`).val('');
  }
}

export default CollectionViewFactory(element, ProjectCollection, ProjectView);
