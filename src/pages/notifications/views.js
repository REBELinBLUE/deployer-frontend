import NotificationCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';

const element = 'notification';

// FIXME: Still need to do the editModel() method
const ModelView = ModelViewFactory(element, ['name', 'type']);

class NotificationView extends ModelView {
  viewData() {
    const data = this.model.toJSON();

    let icon = 'cogs';
    let label = 'Custom';

    if (this.model.isSlack()) {
      icon = 'slack';
      label = 'Slack';
    } else if (this.model.isHipchat()) {
      icon = 'comment-o fa-flip-horizontal';
      label = 'Hipchat';
    } else if (this.model.isMail()) {
      icon = 'envelope-o';
      label = 'E-mail';
    } else if (this.model.isTwilio()) {
      icon = 'mobile';
      label = 'SMS';
    }

    return {
      ...data,
      icon,
      label,
    };
  }
}

export default CollectionViewFactory(element, NotificationCollection, NotificationView);
