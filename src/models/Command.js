import Backbone from 'backbone';

import routes from '../routes';

export default class Group extends Backbone.Model {
  constructor(options) {
    super(options);

    this.urlRoot = routes.commands;
  }

  // FIXME: Not sure this'll work
  // defaults() {
  //   return {
  //     order: app.models.Commands.nextOrder(),
  //   };
  // }

  isAfter() {
    return (parseInt(this.get('step'), 10) % 3 === 0);
  }
}
