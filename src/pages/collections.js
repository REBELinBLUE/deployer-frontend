import GroupsCollection from './groups/collection';
import UsersCollection from './users/collection';
import TemplatesCollection from './templates/collection';
import ProjectsCollection from './projects/collection';
import ServersCollection from './servers/collection';
import VariablesCollection from './variables/collection';
import SharedFilesCollection from './shared-files/collection';
import ConfigFilesCollection from './config-files/collection';
import NotificationsCollection from './notifications/collection';
import HeartbeatsCollection from './heartbeats/collection';
import CheckUrlsCollection from './check-urls/collection';

export default {
  Groups: GroupsCollection,
  Users: UsersCollection,
  Templates: TemplatesCollection,
  Projects: ProjectsCollection,
  Servers: ServersCollection,
  Variables: VariablesCollection,
  SharedFiles: SharedFilesCollection,
  ConfigFiles: ConfigFilesCollection,
  Notifications: NotificationsCollection,
  Heartbeats: HeartbeatsCollection,
  CheckUrls: CheckUrlsCollection,
};
