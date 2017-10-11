import Backbone from 'backbone';

import routes from '../routes';

export default class Project extends Backbone.Model {
  constructor(options) {
    super(options);

    this.urlRoot = routes.projects;
  }
}

