import $ from 'jquery';
import Backbone from 'backbone';
import ace from 'brace';
import 'brace/mode/sh';

import CommandsCollection from '../collections/Commands';
import ModelViewFactory from '../factories/ModelViewFactory';
import bindDialogs from '../handlers/dialogs';

const element = 'command';
const translationKey = 'commands';

const ModelView = ModelViewFactory(element, ['name', 'step', 'user']);

let editor;
$(`div#${element}.modal`)
  .on('show.bs.modal', () => {
    editor = ace.edit('command_script');
    editor.getSession().setMode('ace/mode/sh');

    // editor.setReadOnly(false);
    // editor.getSession().setUseWrapMode(true);
  })
  .on('hidden.bs.modal', () => {
    editor.setValue('');
    editor.gotoLine(1);
    editor.destroy();
    $(`#${element}_script`).text('');
  });


$(`#${element}_optional`).on('change', (event) => {
  $(`#${element}_default_on_row`).addClass('hide');

  if ($(event.currentTarget).is(':checked') === true) {
    $(`#${element}_default_on_row`).removeClass('hide');
  }
});

class CommandView extends ModelView {
  editModel() {
    super.editModel();

    $(`#${element}_script`).text(this.model.get('script'));
    $(`#${element}_optional`).prop('checked', (this.model.get('optional') === true));
    $(`#${element}_default_on`).prop('checked', (this.model.get('default_on') === true));

    $(`#${element}_default_on_row`).addClass('hide');
    if (this.model.get('optional') === true) {
      $(`#${element}_default_on_row`).removeClass('hide');
    }

    $(`.${element}-server`).prop('checked', false);
    $(this.model.get('servers')).each((index, server) => {
      $(`#${element}_server_${server.id}`).prop('checked', true);
    });
  }
}

const getInput = () => {
  const serverIds = [];
  $(`.${element}-server:checked`).each((index, server) => {
    serverIds.push(parseInt($(server).val(), 10));
  });

  return {
    name: $(`#${element}_name`).val(),
    script: editor.getValue(),
    user: $(`#${element}_user`).val(),
    step: $(`#${element}_step`).val(),
    target_type: $('input[name="target_type"]').val(),
    target_id: parseInt($('input[name="target_id"]').val(), 10),
    servers: serverIds,
    optional: $(`#${element}_optional`).is(':checked'),
    default_on: $(`#${element}_default_on`).is(':checked'),
  };
};

bindDialogs(element, translationKey, getInput, CommandsCollection);

export default class CommandsCollectionView extends Backbone.View {
  constructor(options) {
    super({
      ...options,
      el: '#app',
    });

    this.collection = CommandsCollection;

    this.$beforeList = $(`#${element}s-before .${element}-list tbody`);
    this.$afterList = $(`#${element}s-after .${element}-list tbody`);

    this.listeners();
    this.render();
  }

  listeners() {
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);
    this.listenTo(this.collection, 'remove', this.addAll);
    this.listenTo(this.collection, 'all', this.render);

    // FIXME: Socket.io listeners
  }

  render() {
    $(`.no-${element}s`).show();
    $(`.${element}-list`).hide();

    const before = this.collection.find(model => !model.isAfter());

    if (typeof before !== 'undefined') {
      $(`#${element}s-before .no-${element}s`).hide();
      $(`#${element}s-before .${element}-list`).show();
    } else {
      $(`#${element}s-before .no-${element}s`).show();
      $(`#${element}s-before .${element}-list`).hide();
    }

    const after = this.collection.find(model => model.isAfter());

    if (typeof after !== 'undefined') {
      $(`#${element}s-after .no-${element}s`).hide();
      $(`#${element}s-after .${element}-list`).show();
    } else {
      $(`#${element}s-after .no-${element}s`).show();
      $(`#${element}s-after .${element}-list`).hide();
    }
  }

  addOne(model) {
    const view = new CommandView({
      model,
    });

    if (model.isAfter()) {
      this.$afterList.append(view.render().el);
    } else {
      this.$beforeList.append(view.render().el);
    }
  }

  addAll() {
    this.$beforeList.html('');
    this.$afterList.html('');

    this.collection.each(this.addOne, this);
  }
}
// app.listener.on('command:REBELinBLUE\\Deployer\\Events\\ModelChanged', function (data) {
//     var command = app.Commands.get(parseInt(data.model.id));
//
//     if (command) {
//         command.set(data.model);
//     }
// });
//
// app.listener.on('command:REBELinBLUE\\Deployer\\Events\\ModelCreated', function (data) {
//     var target_type = $('input[name="target_type"]').val();
//     var target_id = $('input[name="target_id"]').val();
//     if (target_type == data.model.target_type && parseInt(data.model.target_id) === parseInt(target_id)) {
//         // Make sure the command is for this action (clone, install, activate, purge)
//         if (parseInt(data.model.step) + 1 === parseInt(app.command_action) || parseInt(data.model.step) - 1 === parseInt(app.command_action)) {
//             app.Commands.add(data.model);
//         }
//     }
// });
//
// app.listener.on('command:REBELinBLUE\\Deployer\\Events\\ModelTrashed', function (data) {
//     var command = app.Commands.get(parseInt(data.model.id));
//
//     if (command) {
//         app.Commands.remove(command);
//     }
// });

