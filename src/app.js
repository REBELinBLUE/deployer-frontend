import $ from 'jquery';
import toastr from 'toastr';
import Backbone from 'backbone';
import 'bootstrap';
import 'admin-lte';

import views from './pages/views';
import collections from './pages/collections';
import listener from './listener';

toastr.options.closeButton = true;
toastr.options.progressBar = true;
toastr.options.preventDuplicates = true;
toastr.options.closeMethod = 'fadeOut';
toastr.options.closeDuration = 300;
toastr.options.closeEasing = 'swing';
toastr.options.positionClass = 'toast-bottom-right';
toastr.options.timeOut = 5000;
toastr.options.extendedTimeOut = 7000;

$.ajaxPrefilter((options, originalOptions, jqXHR) => {
  jqXHR.setRequestHeader('X-CSRF-Token', $('meta[name="token"]').attr('content'));
});

// Needed for Backbone debugger
if (window.__backboneAgent) {
  window.__backboneAgent.handleBackbone(Backbone);
}

window.app = {
  project_id: null,
  views,
  collections,
  listener,
};
