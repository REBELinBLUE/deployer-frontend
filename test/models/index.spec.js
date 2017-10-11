import checkUrlTests from './CheckUrl.spec';
import heartbeatTests from './Heartbeat.spec';
import notificationTests from './Notification.spec';
import serverTests from './Server.spec';

describe('Models', () => {
  checkUrlTests();
  heartbeatTests();
  notificationTests();
  serverTests();
});
