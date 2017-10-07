import NotificationCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionView';
import ModelView from '../../factories/ModelView';

class NotificationView extends ModelView {
  constructor(options) {
    super(options, '#notification-template');
  }

  viewData() {
    const data = super.viewData();

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

export default CollectionViewFactory('notification', NotificationCollection, NotificationView);
