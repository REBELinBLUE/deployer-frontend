import $ from 'jquery';

import SharedFileCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';

const element = 'sharedfile';

const SharedFileView = ModelViewFactory(element, ['name', 'file']);

const getInput = () => {
  return {
    name: $(`#${element}_name`).val(),
    file: $(`#${element}_file`).val(),
    target_type: $('input[name="target_type"]').val(),
    target_id: parseInt($('input[name="target_id"]').val(), 10)
  };
};

export default CollectionViewFactory(element, SharedFileCollection, SharedFileView, getInput);
