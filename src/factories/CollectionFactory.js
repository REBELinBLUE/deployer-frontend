import Backbone from 'backbone';

// FIXME: Change this to a factory
export default class Collection extends Backbone.Collection {
  constructor(model) {
    super();

    this.model = model;
  }
}
