import CollectionFactory from '../factories/CollectionFactory';
import Heartbeat from '../models/Heartbeat';

const HeartbeatCollection = CollectionFactory(Heartbeat);

export default new HeartbeatCollection();
