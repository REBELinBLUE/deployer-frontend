import CollectionFactory from '../../factories/CollectionFactory';
import ConfigFile from './model';

const ConfigFileCollection = CollectionFactory(ConfigFile);

export default new ConfigFileCollection();
