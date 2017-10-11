import './bootstrap';
import views from './views';
import models from './models';
import collections from './collections';
import listener from './listener';

window.app = {
  views,
  models,
  collections,
  listener,
  project_id: null,
};
