import TemplateCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class TemplateView extends ModelView {
  constructor(options) {
    super(options, '#template-template');
  }

  editModel() {
    $('#template_id').val(this.model.id);
    $('#template_name').val(this.model.get('name'));
  }
}

export default CollectionViewFactory('template', TemplateCollection, TemplateView);
