import CollectionFactory from '../../factories/CollectionFactory';
import Notification from './model';

const NotificationCollection = CollectionFactory(Notification);

export default new NotificationCollection();
