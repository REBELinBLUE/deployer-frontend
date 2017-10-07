import SharedFileCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';

const element = 'sharedfile';

const SharedFileView = ModelViewFactory(element, ['name', 'file']);

export default CollectionViewFactory(element, SharedFileCollection, SharedFileView);
