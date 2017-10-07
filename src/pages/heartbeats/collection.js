import CollectionFactory from '../../factories/CollectionFactory';
import Heartbeat from './model';

const HeartbeatCollection = CollectionFactory(Heartbeat);

export default new HeartbeatCollection();
