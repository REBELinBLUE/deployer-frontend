import moment from 'moment';

import UserCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class UserView extends ModelView {
  constructor(options) {
    super(options, '#user-template');
  }

  viewData() {
    const data = super.viewData();

    return {
      ...data,
      created: moment(data.created_at).format('Do MMMM YYYY h:mm:ss A'),
    };
  }

  editModel() {
    $('#user_id').val(this.model.id);
    $('#user_name').val(this.model.get('name'));
    $('#user_email').val(this.model.get('email'));
  }
}

export default CollectionViewFactory('user', UserCollection, UserView);

