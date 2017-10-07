import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// FIXME: Change to use the spread operator
export default (element, fields, events) => {
  return class ModelView extends Backbone.View {
    constructor(options) {
      super({
        ...options,
        events: {
          ...events,
          'click .btn-edit': 'editModel',
        },
        tagName: 'tr',
      });

      this.template = _.template($(`#${element}-template`).html());

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

    populateDialog(prefix, properties) {
      $(`#${prefix}_id`).val(this.model.get('id'));

      properties.forEach((field) => {
        $(`#${prefix}_${field}`).val(this.model.get(field));
      });
    }

    editModel() {
      console.error('The editModel() method should be overridden', this.model.id);

      this.populateDialog(element, fields);
    }
  };
};
