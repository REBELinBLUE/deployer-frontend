import $ from 'jquery';

import GroupCollection from '../collections/Groups';
import CollectionViewFactory from '../factories/CollectionViewFactory';
import ModelViewFactory from '../factories/ModelViewFactory';
import routes from '../routes';
import reorderModels from '../handlers/reorderModels';

const element = 'group';

const GroupView = ModelViewFactory(element, ['name']);

reorderModels(element, routes.groupsReorder);

const getInput = () => ({
  name: $(`#${element}_name`).val(),
});

export default CollectionViewFactory(element, GroupCollection, GroupView, getInput);
