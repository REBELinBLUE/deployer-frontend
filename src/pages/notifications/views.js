import NotificationCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';

const element = 'notification';

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

  editModel() {
    super.editModel();
    console.error('Not yet implemented editModel() for notifications');

    const type = this.model.get('type');

    // FIXME: This is horrible
    $.each(this.model.get('config'), (field, value) => {
      $(`#channel-config-${type} #${element}_config_${field}`).val(value);
    });

    const properties = [
      'on_deployment_success', 'on_deployment_failure', 'on_link_down','on_link_still_down', 'on_link_recovered',
      'on_heartbeat_missing', 'on_heartbeat_still_missing', 'on_heartbeat_recovered',
    ];

    properties.forEach((field) => {
      $(`#${element}_${field}`).prop('checked', (this.model.get(field) === true));
    });
  }
}

/*

setTitleWithIcon(this.model.get('type'), 'edit');

    function setTitleWithIcon(type, action) {
        $('#notification .modal-title span').text(Lang.get('channels.' + action + '_' + type));

        var element = $('#notification .modal-title i').removeClass().addClass('fa');
        var icon = 'cogs';

        if (type === 'slack') {
            icon = 'slack';
        } else if (type === 'hipchat') {
            element.addClass('fa-flip-horizontal');
            icon = 'comment-o';
        } else if (type === 'mail') {
            icon = 'envelope-o';
        } else if (type === 'twilio') {
            icon = 'mobile';
        }

        element.addClass('fa-' + icon);

        $('#notification .modal-footer').show();
        $('.channel-config').hide();
        $('#channel-type').hide();
        $('#channel-name').show();
        $('#channel-triggers').show();
        $('#channel-config-' + type).show();
        $('#notification_type').val(type);
    }
 */

const getInput = () => {
  console.error('Not yet implemented getInput() for notifications');
  return {};
};

export default CollectionViewFactory(element, NotificationCollection, NotificationView, getInput);
