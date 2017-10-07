import Backbone from 'backbone';

import endpoints from '../../endpoints';

const OK = 0;
const UNTESTED = 1;
const MISSING = 2;

export default class Heartbeat extends Backbone.Model {
  constructor(options) {
    super(options);

    this.urlRoot = endpoints.heartbeats;
  }

  isOK() {
    return parseInt(this.get('status'), 10) === OK;
  }

  isUntested() {
    return parseInt(this.get('status'), 10) === UNTESTED;
  }

  isMissing() {
    return parseInt(this.get('status'), 10) === MISSING;
  }
}

