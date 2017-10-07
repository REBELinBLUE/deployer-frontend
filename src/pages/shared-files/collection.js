import CollectionFactory from '../../factories/CollectionFactory';
import SharedFile from './model';

const SharedFileCollection = CollectionFactory(SharedFile);

export default new SharedFileCollection();
