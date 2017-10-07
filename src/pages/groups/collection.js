import CollectionFactory from '../../factories/CollectionFactory';
import Group from './model';

const GroupCollection = CollectionFactory(Group);

export default new GroupCollection();
