import Backbone from 'backbone';

import routes from '../routes';

export const ADMIN = 1;
export const MANAGER = 2;
export const COLLABORATOR = 2;
export const VIEWER = 3;

export default class Group extends Backbone.Model {
  constructor(attributes, options) {
    super(attributes, options);

    this.urlRoot = routes.users;
  }

    isAdmin() {
        return parseInt(this.get('level'), 10) === ADMIN;
    }

    isManager() {
        return parseInt(this.get('level'), 10) === MANAGER;
    }

    isCollaborator() {
        return parseInt(this.get('level'), 10) === COLLABORATOR;
    }

    isViewer() {
        return parseInt(this.get('level'), 10) === VIEWER;
    }
}

