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
}

export default CollectionViewFactory('project', ProjectCollection, ProjectView);
