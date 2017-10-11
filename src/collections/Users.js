import CollectionFactory from '../factories/CollectionFactory';
import User from '../models/User';

const UserCollection = CollectionFactory(User);

export default new UserCollection();
