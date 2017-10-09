import $ from 'jquery';

import GroupCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';
import endpoints from '../../endpoints';
import reorderModels from '../../handlers/reorderModels';

const element = 'group';

const GroupView = ModelViewFactory(element, ['name']);

reorderModels(element, endpoints.groupsReorder);

const getInput = () => {
  return {
    name: $(`#${element}_name`).val(),
  };
};

export default CollectionViewFactory(element, GroupCollection, GroupView, getInput);
