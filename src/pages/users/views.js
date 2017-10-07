import moment from 'moment';

import UserCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class UserView extends ModelView {
  constructor(options) {
    super(options, '#user-template');
  }

  viewData() {
    const data = this.model.toJSON();

    return {
      ...data,
      created: moment(data.created_at).format('Do MMMM YYYY h:mm:ss A'),
    };
  }

  editModel() {
    this.populateDialog('user', ['name', 'email']);
  }
}

export default CollectionViewFactory('user', UserCollection, UserView);

