import Backbone from 'backbone';

// FIXME: This isn't actually a factory so could be moved
export default class Collection extends Backbone.Collection {
  constructor(model) {
    super();

    this.model = model;
  }
}
