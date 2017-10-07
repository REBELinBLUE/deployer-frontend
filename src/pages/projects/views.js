import moment from 'moment';

import ProjectCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class ProjectView extends ModelView {
  constructor(options) {
    super(options, '#project-template');
  }

  viewData() {
    const data = super.viewData();

    return {
      ...data,
      deploy: data.last_run ? moment(data.last_run).format('Do MMMM YYYY h:mm:ss A') : false,
    };
  }

  editModel() {
    $('#project_id').val(this.model.id);
    $('#project_name').val(this.model.get('name'));
    $('#project_repository').val(this.model.get('repository'));
    $('#project_branch').val(this.model.get('branch'));
    $('#project_group_id').val(this.model.get('group_id'));
    $('#project_builds_to_keep').val(this.model.get('builds_to_keep'));
    $('#project_url').val(this.model.get('url'));
    $('#project_build_url').val(this.model.get('build_url'));
    $('#project_allow_other_branch').prop('checked', (this.model.get('allow_other_branch') === true));
    $('#project_include_dev').prop('checked', (this.model.get('include_dev') === true));
    $('#project_private_key').val('');
  }
}

export default CollectionViewFactory('project', ProjectCollection, ProjectView);
