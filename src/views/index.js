import GroupsView from './admin/Groups';
import UsersView from './admin/Users';
import TemplatesView from './admin/Templates';
import ProjectsView from './admin/Projects';
import ServersView from './Servers';
import VariablesView from './Variables';
import SharedFilesView from './SharedFiles';
import ConfigFilesView from './ConfigFiles';
import NotificationsView from './Notifications';
import HeartbeatsView from './Heartbeats';
import CheckUrlsView from './CheckUrls';
import CommandsView from './Commands';
import ProfileView from './Profile';
import ProjectView from './Project';
import DeploymentView from './Deployments';

export default {
  Groups: GroupsView,
  Users: UsersView,
  Templates: TemplatesView,
  Projects: ProjectsView,
  Project: ProjectView,
  Profile: ProfileView,
  Servers: ServersView,
  Variables: VariablesView,
  SharedFiles: SharedFilesView,
  ConfigFiles: ConfigFilesView,
  Notifications: NotificationsView,
  Heartbeats: HeartbeatsView,
  CheckUrls: CheckUrlsView,
  Commands: CommandsView,
  Deployment: DeploymentView,
};
