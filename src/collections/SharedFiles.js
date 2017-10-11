import CollectionFactory from '../factories/CollectionFactory';
import SharedFile from '../models/SharedFile';

const SharedFileCollection = CollectionFactory(SharedFile);

export default new SharedFileCollection();
