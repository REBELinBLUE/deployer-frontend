import './bootstrap';
import views from './views';
import models from './models';
import collections from './collections';
import listener from './listener';

let projectId = null;

window.app = {
  views,
  models,
  collections,
  listener,
  getProjectId: () => projectId,
  setProjectId: (newId) => {
    projectId = parseInt(newId, 10);
  },
};
