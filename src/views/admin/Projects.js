import $ from 'jquery';
import 'select2';

import ProjectCollection from '../../collections/Projects';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';
import { dateTimeFormatter } from '../../utils/formatters';
import bindDialogs from '../../handlers/dialogs';

const element = 'project';
const translationKey = 'projects';

const ModelView = ModelViewFactory(
  element,
  ['name', 'repository', 'branch', 'group_id', 'builds_to_keep', 'url', 'build_url'],
);

const selectOptions = {
  width: '100%',
  minimumResultsForSearch: Infinity,
};

// FIXME: Don't want this on every page
$(`#${element}_group_id`).select2(selectOptions);
$(`#${element}_template_id`).select2(selectOptions);

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

const getInput = () => ({
  name: $(`#${element}_name`).val(),
  repository: $(`#${element}_repository`).val(),
  branch: $(`#${element}_branch`).val(),
  group_id: parseInt($(`#${element}_group_id`).val(), 10),
  builds_to_keep: $(`#${element}_builds_to_keep`).val(),
  url: $(`#${element}_url`).val(),
  build_url: $(`#${element}_build_url`).val(),
  template_id: $(`#${element}_template_id`) ? parseInt($(`#${element}_template_id`).val(), 10) : null,
  allow_other_branch: $(`#${element}_allow_other_branch`).is(':checked'),
  include_dev: $(`#${element}_include_dev`).is(':checked'),
  private_key: $(`#${element}_private_key`).val(),
});

bindDialogs(element, translationKey, getInput, ProjectCollection);

export default CollectionViewFactory(element, ProjectCollection, ProjectView);
