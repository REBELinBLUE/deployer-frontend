import $ from 'jquery';

import TemplateCollection from '../collections/Templates';
import CollectionViewFactory from '../factories/CollectionViewFactory';
import ModelViewFactory from '../factories/ModelViewFactory';

const element = 'template';

const TemplateView = ModelViewFactory(element, ['name']);

const getInput = () => ({
  name: $(`#${element}_name`).val(),
});

export default CollectionViewFactory(element, TemplateCollection, TemplateView, getInput);
