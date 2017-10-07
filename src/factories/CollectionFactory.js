import Backbone from 'backbone';

export default class Collection extends Backbone.Collection {
  constructor(model) {
    super();

    this.model = model;
  }
}
