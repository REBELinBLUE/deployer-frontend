import CollectionFactory from '../factories/CollectionFactory';
import ConfigFile from '../models/ConfigFile';

const ConfigFileCollection = CollectionFactory(ConfigFile);

export default new ConfigFileCollection();
