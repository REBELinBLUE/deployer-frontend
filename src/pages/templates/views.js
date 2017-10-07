import TemplateCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class TemplateView extends ModelView {
  constructor(options) {
    super(options, '#template-template');
  }

  editModel() {
    this.populateDialog('template', ['name']);
  }
}

export default CollectionViewFactory('template', TemplateCollection, TemplateView);
