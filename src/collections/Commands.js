import CollectionFactory from '../factories/CollectionFactory';
import Command from '../models/Command';

const Collection = CollectionFactory(Command);

class CommandCollection extends Collection {
  constructor(options) {
    super(options);

    this.comparator = 'order';
  }

  nextOrder() {
    if (!this.length) {
      return 1;
    }

    return this.last().get('order') + 1;
  }
}

export default new CommandCollection();
