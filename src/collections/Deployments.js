import CollectionFactory from '../factories/CollectionFactory';
import Deployment from '../models/Deployment';

const DeploymentCollection = CollectionFactory(Deployment);

export default new DeploymentCollection();
