import SharedFileCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class SharedFileView extends ModelView {
  constructor(options) {
    super(options, '#files-template');
  }
}

export default CollectionViewFactory('file', SharedFileCollection, SharedFileView);
