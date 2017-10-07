import SharedFileCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class SharedFileView extends ModelView {
  constructor(options) {
    super(options, '#files-template');
  }

  editModel() {
    $('#file_id').val(this.model.id);
    $('#name').val(this.model.get('name'));
    $('#file').val(this.model.get('file'));
  }
}

export default CollectionViewFactory('file', SharedFileCollection, SharedFileView);
