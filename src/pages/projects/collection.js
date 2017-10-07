import CollectionFactory from '../../factories/CollectionFactory';
import Project from './model';

const ProjectCollection = CollectionFactory(Project);

export default new ProjectCollection();
