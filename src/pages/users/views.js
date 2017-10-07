import UserCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

import { dateTimeFormatter } from '../../utils';

class UserView extends ModelView {
  constructor(options) {
    super(options, '#user-template');
  }

  viewData() {
    const data = this.model.toJSON();

    return {
      ...data,
      created: dateTimeFormatter(data.created_at),
    };
  }

  editModel() {
    this.populateDialog('user', ['name', 'email']);
  }
}

export default CollectionViewFactory('user', UserCollection, UserView);

