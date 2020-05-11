import Backbone from 'backbone';

import routes from '../routes';

export default class ConfigFile extends Backbone.Model {
  constructor(attributes, options) {
    super(attributes, options);

    this.urlRoot = routes.config;
  }
}
