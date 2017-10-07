import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

export default class ModelView extends Backbone.View {
  constructor(options, element) {
    super({
      ...options,
      events: {
        'click .btn-edit': 'editModel',
      },
      tagName: 'tr',
    });

    this.template = _.template($(element).html());
  }

  initialize() {
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
    console.log('edit model', this.model.id);
  }
}
