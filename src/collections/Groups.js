import CollectionFactory from '../factories/CollectionFactory';
import Group from '../models/Group';

const GroupCollection = CollectionFactory(Group);

export default new GroupCollection();
