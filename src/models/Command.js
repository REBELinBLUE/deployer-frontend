import Backbone from 'backbone';

import routes from '../routes';

export default class Group extends Backbone.Model {
  constructor(options) {
    super(options);

    this.urlRoot = routes.commands;
  }

  isBefore() {
    return !this.isAfter();
  }

  isAfter() {
    return (parseInt(this.get('step'), 10) % 3 === 0);
  }
}
