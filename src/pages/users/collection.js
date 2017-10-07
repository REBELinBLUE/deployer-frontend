import CollectionFactory from '../../factories/CollectionFactory';
import User from './model';

const UserCollection = CollectionFactory(User);

export default new UserCollection();
