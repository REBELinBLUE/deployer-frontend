import ace from 'brace';
import 'brace/mode/php';
import 'brace/mode/xml';
import 'brace/mode/ini';
import 'brace/mode/yaml';
import 'brace/mode/json';
import 'brace/mode/sh';
import $ from 'jquery';

import ConfigFileCollection from './collection';
import CollectionViewFactory from '../../factories/CollectionViewFactory';
import ModelViewFactory from '../../factories/ModelViewFactory';

const element = 'configfile';

const ModelView = ModelViewFactory(
  element,
  ['name', 'path'],
  {
    'click .btn-view': 'showFile',
  },
);

let editor;
let previewFile;

class ConfigFileView extends ModelView {
  showFile() {
    previewFile = this.model.get('path'); // FIXME: This is horrible
    $('#preview-content').text(this.model.get('content'));
  }

  editModel() {
    super.editModel();

    $(`#${element}_content`).text(this.model.get('content'));
  }
}

$(`div#view-${element}.modal`).on('show.bs.modal', () => {
  editor = ace.edit('preview-content');
  editor.setReadOnly(true);
  editor.getSession().setUseWrapMode(true);

  let extension = previewFile.substr(previewFile.lastIndexOf('.') + 1).toLowerCase();
  if (extension === 'yml') {
    extension = 'yaml';
  }

  if (['php', 'ini', 'yaml', 'sh', 'xml', 'json'].indexOf(extension) !== -1) {
    editor.getSession().setMode(`ace/mode/${extension}`);
  }
}).on('hidden.bs.modal', () => {
  editor.destroy();
  previewFile = null;
});

const getInput = () => {
  console.error('Need to implement editor for config files');
  return {
    name: $(`#${element}_name`).val(),
    path: $(`#${element}_path`).val(),
    content: editor.getValue(),
    target_type: $('input[name="target_type"]').val(),
    target_id: parseInt($('input[name="target_id"]').val(), 10),
  };
};

export default CollectionViewFactory(element, ConfigFileCollection, ConfigFileView, getInput);
