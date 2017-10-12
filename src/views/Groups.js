import $ from 'jquery';

import GroupCollection from '../collections/Groups';
import CollectionViewFactory from '../factories/CollectionViewFactory';
import ModelViewFactory from '../factories/ModelViewFactory';
import routes from '../routes';
import reorderModels from '../handlers/reorderModels';
import bindDialogs from '../handlers/dialogs';

const element = 'group';
const translationKey = 'groups';

const GroupView = ModelViewFactory(element, ['name']);

reorderModels(element, routes.groupsReorder);

const getInput = () => ({
  name: $(`#${element}_name`).val(),
});

bindDialogs(element, translationKey, getInput, GroupCollection);

export default CollectionViewFactory(element, GroupCollection, GroupView);
