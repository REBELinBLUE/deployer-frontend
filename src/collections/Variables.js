import CollectionFactory from '../factories/CollectionFactory';
import Variable from '../models/Variable';

const VariableCollection = CollectionFactory(Variable);

export default new VariableCollection();
