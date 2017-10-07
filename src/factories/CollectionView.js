import Backbone from 'backbone';

import listener from '../listener';
import { MODEL_CHANGED, MODEL_TRASHED, MODEL_CREATED } from '../events';

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

      listener.on(`${element}:${MODEL_CHANGED}`, (data) => {
        const model = this.collection.get(parseInt(data.model.id, 10));

        if (model) {
          model.set(data.model);
        }
      });

      listener.on(`${element}:${MODEL_TRASHED}`, (data) => {
        const model = this.collection.get(parseInt(data.model.id, 10));

        if (model) {
          this.collection.remove(model);
        }
      });

      listener.on(`${element}:${MODEL_CREATED}`, (data) => {
        console.log(`${element}:${MODEL_CREATED}`, data);
        // FIXME: Figure out how to get the project_id
        // if (parseInt(data.model.project_id, 10) === parseInt(app.project_id, 10)) {
        //   this.collection.add(data.model);
        // }
      });

      // FIXME: Figure out why if we do this collections is null in the method
      // listener.on(`${element}:${MODEL_CHANGED}`, this.modelChanged);
      // listener.on(`${element}:${MODEL_TRASHED}`, this.modelTrashed);
      // listener.on(`${element}:${MODEL_CREATED}`, this.modelCreated);
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
