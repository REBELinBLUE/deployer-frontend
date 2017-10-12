import $ from 'jquery';

import VariableCollection from '../collections/Variables';
import CollectionViewFactory from '../factories/CollectionViewFactory';
import ModelViewFactory from '../factories/ModelViewFactory';
import bindDialogs from '../handlers/dialogs';

const element = 'variable';
const translationKey = 'variables';

const VariableView = ModelViewFactory(element, ['name', 'value']);

const getInput = () => ({
  name: $(`#${element}_name`).val(),
  value: $(`#${element}_value`).val(),
  target_type: $('input[name="target_type"]').val(),
  target_id: parseInt($('input[name="target_id"]').val(), 10),
});

bindDialogs(element, translationKey, getInput, VariableCollection);

export default CollectionViewFactory(element, VariableCollection, VariableView);
