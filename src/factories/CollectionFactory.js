import Backbone from 'backbone';

export default (model) => {
  return class Collection extends Backbone.Collection {
    constructor(options) {
      super(options);

      this.model = model;
    }
  };
};
