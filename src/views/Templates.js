import $ from 'jquery';

import TemplateCollection from '../collections/Templates';
import CollectionViewFactory from '../factories/CollectionViewFactory';
import ModelViewFactory from '../factories/ModelViewFactory';
import bindDialogs from '../handlers/dialogs';

const element = 'template';
const translationKey = 'templates';

const TemplateView = ModelViewFactory(element, ['name']);

const getInput = () => ({
  name: $(`#${element}_name`).val(),
});

bindDialogs(element, translationKey, getInput, TemplateCollection);

export default CollectionViewFactory(element, TemplateCollection, TemplateView);
