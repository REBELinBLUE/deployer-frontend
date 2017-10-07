import Backbone from 'backbone';

export default (element, Collection, ModelView) => {
  return class CollectionView extends Backbone.View {
    constructor(options) {
      super({
        ...options,
        el: `#${element}_list tbody`,
      });

      this.collection = Collection;

      this.listeners();
      this.render();
    }

    render() {
      if (this.collection.length) {
        $(`#no_${element}s`).hide();
        $(`#${element}_list`).show();
      } else {
        $(`#no_${element}s`).show();
        $(`#${element}_list`).hide();
      }
    }

    listeners() {
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'reset', this.addAll);
      this.listenTo(this.collection, 'remove', this.addAll);
      this.listenTo(this.collection, 'all', this.render);
    }

    addOne(model) {
      const view = new ModelView({
        model,
      });

      this.$el.append(view.render().el);
    }

    addAll() {
      this.$el.html('');

      this.collection.each(this.addOne, this);
    }
  };
};
