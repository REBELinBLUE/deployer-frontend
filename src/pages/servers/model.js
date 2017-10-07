import $ from 'jquery';
import Backbone from 'backbone';

import endpoints from '../../endpoints';

const SUCCESSFUL = 0;
const UNTESTED = 1;
const FAILED = 2;
const TESTING = 3;

export default class Server extends Backbone.Model {
  constructor(options) {
    super(options);

    this.urlRoot = endpoints.servers;
  }

  isSuccessful() {
    return parseInt(this.get('status'), 10) === SUCCESSFUL;
  }

  isUntested() {
    return parseInt(this.get('status'), 10) === UNTESTED;
  }

  isFailed() {
    return parseInt(this.get('status'), 10) === FAILED;
  }

  isTesting() {
    return parseInt(this.get('status'), 10) === TESTING;
  }

  testConnection() {
    this.set({
      status: TESTING,
    });

    const that = this;
    $.ajax({
      type: 'POST',
      url: `${this.urlRoot}/${this.get('id')}/test`,
    }).fail(() => {
      that.set({
        status: FAILED,
      });
    });
  }
}

