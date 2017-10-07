import Backbone from 'backbone';

import endpoints from '../../endpoints';

export default class Group extends Backbone.Model {
  constructor(options) {
    super(options);

    this.urlRoot = endpoints.groups;
  }
}
