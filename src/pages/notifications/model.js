import Backbone from 'backbone';

import endpoints from '../../endpoints';

export default class Notification extends Backbone.Model {
  constructor(options) {
    super(options);

    this.urlRoot = endpoints.notifications;
  }

  isSlack() {
    return this.get('type') === 'slack';
  }

  isHipchat() {
    return this.get('type') === 'hipchat';
  }

  isMail() {
    return this.get('type') === 'mail';
  }

  isTwilio() {
    return this.get('type') === 'twilio';
  }
}

