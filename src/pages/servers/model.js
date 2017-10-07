import Backbone from 'backbone';

import endpoints from '../../endpoints';

const SUCCESSFUL = 0;
const UNTESTED = 1;
const FAILED = 2;
const TESTING = 3;

// FIXME: Change to a model factory!
export default class Server extends Backbone.Model {
  constructor(options) {
    super(options);

    this.urlRoot = endpoints.servers;
  }

  isSuccessful() {
    return this.get('status') === SUCCESSFUL;
  }

  isUntested() {
    return this.get('status') === UNTESTED;
  }

  isFailed() {
    return this.get('status') === FAILED;
  }

  isTesting() {
    return this.get('status') === TESTING;
  }
}

