import ConfigFileCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';

const element = 'configfile';

const ModelView = ModelViewFactory(
  element,
  ['name', 'path'],
  {
    'click .btn-view': 'showFile',
  }
);

class ConfigFileView extends ModelView {
  showFile() {
    console.log('show file', this.model.id);
  }

  editModel() {
    super.editModel();

    $('#configfile_content').text(this.model.get('content'));
  }
}

export default CollectionViewFactory(element, ConfigFileCollection, ConfigFileView);
