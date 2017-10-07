import TemplateCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';

const element = 'template';

const TemplateView = ModelViewFactory(element, ['name']);

export default CollectionViewFactory(element, TemplateCollection, TemplateView);
