import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

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

  editModel() {
    console.error('The editModel() method should be overridden', this.model.id);
  }
}
