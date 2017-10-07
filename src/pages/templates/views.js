import TemplateCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class TemplateView extends ModelView {
  constructor(options) {
    super(options, '#template-template');
  }

  viewData() {
    console.log('boo!');

    return super.viewData();
  }
}

export default CollectionViewFactory('template', TemplateCollection, TemplateView);
