import $ from 'jquery';

import TemplateCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';

const element = 'template';

const TemplateView = ModelViewFactory(element, ['name']);

const getInput = () => {
  return {
    name: $(`#${element}_name`).val()
  };
};

export default CollectionViewFactory(element, TemplateCollection, TemplateView, getInput);
