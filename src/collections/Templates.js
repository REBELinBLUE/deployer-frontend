import CollectionFactory from '../factories/CollectionFactory';
import Template from '../models/Template';

const TemplateCollection = CollectionFactory(Template);

export default new TemplateCollection();
