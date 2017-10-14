import CollectionFactory from '../factories/CollectionFactory';
import Command from '../models/Command';

const CommandCollection = CollectionFactory(Command);

export default new CommandCollection();
