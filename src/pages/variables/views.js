import VariableCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';

const element = 'variable';

const VariableView = ModelViewFactory(element, ['name', 'value']);

export default CollectionViewFactory(element, VariableCollection, VariableView);
