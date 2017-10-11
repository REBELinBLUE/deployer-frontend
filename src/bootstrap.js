import $ from 'jquery';
import toastr from 'toastr';
import Backbone from 'backbone';
import 'bootstrap';
import 'admin-lte';
import 'select2';

import localize from './utils/localization';
import './messages';

// Needed for Backbone debugger
if (typeof window.__backboneAgent === 'undefined') {
  window.__backboneAgent = { handleBackbone: () => {} };
}

window.__backboneAgent.handleBackbone(Backbone);

toastr.options.closeButton = true;
toastr.options.progressBar = true;
toastr.options.preventDuplicates = true;
toastr.options.closeMethod = 'fadeOut';
toastr.options.closeDuration = 300;
toastr.options.closeEasing = 'swing';
toastr.options.positionClass = 'toast-bottom-right';
toastr.options.timeOut = 5000;
toastr.options.extendedTimeOut = 7000;

const locale = $('meta[name="locale"]').attr('content');
localize.setLocale(locale || 'en');

const token = $('meta[name="csrf-token"]').attr('content');
$.ajaxPrefilter((options, originalOptions, jqXHR) => jqXHR.setRequestHeader('X-CSRF-Token', token));
