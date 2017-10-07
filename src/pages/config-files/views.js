import ConfigFileCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class ConfigFileView extends ModelView {
  constructor(options) {
    super(options, '#configfile-template');
  }
}

export default CollectionViewFactory('configfile', ConfigFileCollection, ConfigFileView);
