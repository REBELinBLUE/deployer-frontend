import VariableCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class VariableView extends ModelView {
  constructor(options) {
    super(options, '#variable-template');
  }
}

export default CollectionViewFactory('variable', VariableCollection, VariableView);
