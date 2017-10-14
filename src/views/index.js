import GroupsView from './Groups';
import UsersView from './Users';
import TemplatesView from './Templates';
import ProjectsView from './Projects';
import ServersView from './Servers';
import VariablesView from './Variables';
import SharedFilesView from './SharedFiles';
import ConfigFilesView from './ConfigFiles';
import NotificationsView from './Notifications';
import HeartbeatsView from './Heartbeats';
import CheckUrlsView from './CheckUrls';
import CommandsView from './Commands';
import ProfileView from './Profile';

ProfileView();

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
  Commands: CommandsView,
};
