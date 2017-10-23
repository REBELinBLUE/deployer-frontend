import CollectionFactory from '../factories/CollectionFactory';
import Log from '../models/Log';

const LogCollection = CollectionFactory(Log);

export default new LogCollection();
