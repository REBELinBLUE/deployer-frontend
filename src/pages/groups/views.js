import GroupCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class GroupView extends ModelView {
  constructor(options) {
    super(options, '#group-template');
  }

  editModel() {
    $('#group_id').val(this.model.id);
    $('#group_name').val(this.model.get('name'));
  }
}

export default CollectionViewFactory('group', GroupCollection, GroupView);
