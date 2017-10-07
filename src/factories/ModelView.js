import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// FIXME: Change to a factory?
export default class ModelView extends Backbone.View {
  constructor(options, element) {
    super({
      ...options,
      events: {
        ...options.events,
        'click .btn-edit': 'editModel',
      },
      tagName: 'tr',
    });

    this.template = _.template($(element).html());

    this.listeners();
  }

  listeners() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  }

  viewData() {
    return this.model.toJSON();
  }

  render() {
    this.$el.html(this.template(this.viewData()));

    return this;
  }

  populateDialog(prefix, fields) {
    $(`#${prefix}_id`).val(this.model.get('id'));

    fields.forEach((field) => {
      $(`#${prefix}_${field}`).val(this.model.get(field));
    });
  }

  editModel() {
    console.error('The editModel() method should be overridden', this.model.id);
  }
}
