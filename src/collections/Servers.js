import CollectionFactory from '../factories/CollectionFactory';
import Server from '../models/Server';

const ServerCollection = CollectionFactory(Server);

export default new ServerCollection();
