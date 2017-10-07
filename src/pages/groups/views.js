import GroupCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class GroupView extends ModelView {
  constructor(options) {
    super(options, '#group-template');
  }

  editModel() {
    this.populateDialog('group', ['name']);
  }
}

export default CollectionViewFactory('group', GroupCollection, GroupView);
