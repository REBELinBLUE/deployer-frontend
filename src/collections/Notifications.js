import CollectionFactory from '../factories/CollectionFactory';
import Notification from '../models/Notification';

const NotificationCollection = CollectionFactory(Notification);

export default new NotificationCollection();
