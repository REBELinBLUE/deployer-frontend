import VariableCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class VariableView extends ModelView {
  constructor(options) {
    super(options, '#variable-template');
  }

  editModel() {
    $('#variable_id').val(this.model.id);
    $('#variable_name').val(this.model.get('name'));
    $('#variable_value').val(this.model.get('value'));
  }
}

export default CollectionViewFactory('variable', VariableCollection, VariableView);
