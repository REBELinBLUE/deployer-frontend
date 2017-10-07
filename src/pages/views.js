import GroupsView from './groups/views';
import UsersView from './users/views';
import TemplatesView from './templates/views';
import ProjectsView from './projects/views';
import ServersView from './servers/views';
import VariablesView from './variables/views';
import SharedFilesView from './shared-files/views';
import ConfigFilesView from './config-files/views';
import NotificationsView from './notifications/views';
import HeartbeatsView from './heartbeats/views';
import CheckUrlsView from './check-urls/views';

export default {
  Groups: GroupsView,
  Users: UsersView,
  Templates: TemplatesView,
  Projects: ProjectsView,
  Servers: ServersView,
  Variables: VariablesView,
  SharedFiles: SharedFilesView,
  ConfigFiles: ConfigFilesView,
  Notifications: NotificationsView,
  Heartbeats: HeartbeatsView,
  CheckUrls: CheckUrlsView,
};
