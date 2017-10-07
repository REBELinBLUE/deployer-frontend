import ConfigFileCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class ConfigFileView extends ModelView {
  constructor(options) {
    super({
      ...options,
      events: {
        'click .btn-view': 'showFile',
      },
    }, '#configfile-template');
  }

  showFile() {
    console.log('show file', this.model.id);
  }
}

export default CollectionViewFactory('configfile', ConfigFileCollection, ConfigFileView);
