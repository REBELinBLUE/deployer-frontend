import CollectionFactory from '../factories/CollectionFactory';
import Project from '../models/Project';

const ProjectCollection = CollectionFactory(Project);

export default new ProjectCollection();
