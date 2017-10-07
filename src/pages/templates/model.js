import Backbone from 'backbone';

import endpoints from '../../endpoints';

export default class Template extends Backbone.Model {
  constructor(options) {
    super(options);

    this.urlRoot = endpoints.templates;
  }
}

