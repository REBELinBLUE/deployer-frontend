import GroupCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';

const element = 'group';

const GroupView = ModelViewFactory(element, ['name']);

const getInput = () => {
  return {
    name: $(`#${element}_name`).val()
  };
};

export default CollectionViewFactory(element, GroupCollection, GroupView, getInput);
