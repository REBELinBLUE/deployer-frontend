import $ from 'jquery';

import UserCollection from '../collections/Users';
import CollectionViewFactory from '../factories/CollectionViewFactory';
import ModelViewFactory from '../factories/ModelViewFactory';
import { dateTimeFormatter } from '../utils/formatters';

const element = 'user';
const translationKey = 'users';

const ModelView = ModelViewFactory(element, ['name', 'email']);

class UserView extends ModelView {
  viewData() {
    const data = this.model.toJSON();

    return {
      ...data,
      created: dateTimeFormatter(data.created_at),
    };
  }
}

const getInput = () => ({
  name: $(`#${element}_name`).val(),
  email: $(`#${element}_email`).val(),
  password: $(`#${element}_password`).val(),
  password_confirmation: $(`#${element}_password_confirmation`).val(),
});

export default CollectionViewFactory(element, UserCollection, UserView, getInput, translationKey);

