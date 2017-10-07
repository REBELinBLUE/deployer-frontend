import SharedFileCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class SharedFileView extends ModelView {
  constructor(options) {
    super(options, '#files-template');
  }

  editModel() {
    this.populateDialog('shared_file', ['name', 'file']);
  }
}

export default CollectionViewFactory('file', SharedFileCollection, SharedFileView);
