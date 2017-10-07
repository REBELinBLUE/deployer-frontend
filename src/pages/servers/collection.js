import CollectionFactory from '../../factories/CollectionFactory';
import Server from './model';

const ServerCollection = CollectionFactory(Server);

export default new ServerCollection();
