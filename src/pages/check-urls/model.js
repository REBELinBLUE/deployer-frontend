import Backbone from 'backbone';

import endpoints from '../../endpoints';

const ONLINE = 0;
const UNTESTED = 1;
const OFFLINE = 2;

export default class Heartbeat extends Backbone.Model {
  constructor(options) {
    super(options);

    this.urlRoot = endpoints.urls;
  }

  isOnline() {
    return parseInt(this.get('status'), 10) === ONLINE;
  }

  isUntested() {
    return parseInt(this.get('status'), 10) === UNTESTED;
  }

  isOffline() {
    return parseInt(this.get('status'), 10) === OFFLINE;
  }
}

