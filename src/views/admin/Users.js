import $ from 'jquery';
import 'select2';

import localize from '../../utils/localization';
import UserCollection from '../../collections/Users';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';
import { dateTimeFormatter } from '../../utils/formatters';
import bindDialogs from '../../handlers/dialogs';

const element = 'user';
const translationKey = 'users';

const ModelView = ModelViewFactory(element, ['name', 'email', 'level']);

const selectOptions = {
  width: '100%',
  minimumResultsForSearch: Infinity,
};

// FIXME: Don't want this on every page
$(`#${element}_level`).select2(selectOptions);

class UserView extends ModelView {
  viewData() {
    const data = this.model.toJSON();

    let role = localize.get('users.collaborator');

    if (this.model.isAdmin()) {
      role = localize.get('users.admin');
    } else if (this.model.isManager()) {
      role = localize.get('users.manager');
    } else if (this.model.isViewer()) {
      role = localize.get('users.viewer');
    }

    return {
      ...data,
      role,
      created: dateTimeFormatter(data.created_at),
    };
  }
}

const getInput = () => ({
  name: $(`#${element}_name`).val(),
  email: $(`#${element}_email`).val(),
  level: parseInt($(`#${element}_level`).val(), 10),
  password: $(`#${element}_password`).val(),
  password_confirmation: $(`#${element}_password_confirmation`).val(),
});

bindDialogs(element, translationKey, getInput, UserCollection);

export default CollectionViewFactory(element, UserCollection, UserView);

