import Backbone from 'backbone';

import routes from '../routes';

export default class Group extends Backbone.Model {
  constructor(attributes, options) {
    super(attributes, options);

    this.urlRoot = routes.commands;
  }

  isBefore() {
    return !this.isAfter();
  }

  isAfter() {
    return (parseInt(this.get('step'), 10) % 3 === 0);
  }
}
