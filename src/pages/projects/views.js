import moment from 'moment';

import ProjectCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class ProjectView extends ModelView {
  constructor(options) {
    super(options, '#project-template');
  }

  viewData() {
    const data = this.model.toJSON();

    return {
      ...data,
      deploy: data.last_run ? moment(data.last_run).format('Do MMMM YYYY h:mm:ss A') : false,
    };
  }

  editModel() {
    this.populateDialog('project', [
      'name', 'repository', 'branch', 'group_id', 'builds_to_keep', 'url', 'build_url',
    ]);

    $('#project_allow_other_branch').prop('checked', (this.model.get('allow_other_branch') === true));
    $('#project_include_dev').prop('checked', (this.model.get('include_dev') === true));
    $('#project_private_key').val('');
  }
}

export default CollectionViewFactory('project', ProjectCollection, ProjectView);
