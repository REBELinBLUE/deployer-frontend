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

  editModel() {
    // FIXME: Standardise names
    $('#config_file_id').val(this.model.id);
    $('#config-file-name').val(this.model.get('name'));
    $('#config-file-path').val(this.model.get('path'));
    $('#config-file-content').text(this.model.get('content'));
  }
}

export default CollectionViewFactory('configfile', ConfigFileCollection, ConfigFileView);
