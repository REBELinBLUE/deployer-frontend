import GroupCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';

const element = 'group';

const GroupView = ModelViewFactory(element, ['name']);

export default CollectionViewFactory(element, GroupCollection, GroupView);
