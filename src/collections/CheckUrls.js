import CollectionFactory from '../factories/CollectionFactory';
import CheckUrl from '../models/CheckUrl';

const CheckUrlCollection = CollectionFactory(CheckUrl);

export default new CheckUrlCollection();
