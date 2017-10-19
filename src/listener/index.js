import $ from 'jquery';
import io from 'socket.io-client';

import * as events from './events';

const socket = $('meta[name="socket-url"]').attr('content');
const jwt = $('meta[name="jwt"]').attr('content');

let hasConnectionError = false;

const listener = io.connect(socket, {
  query: `jwt=${jwt}`,
  transports: ['websocket', 'polling'],
});

listener.on('connect_error', () => {
  if (!hasConnectionError) {
    $('#socket_offline').show();
  }

  hasConnectionError = true;
});

// FIXME: Can these be chained?
listener.on('connect', () => {
  $('#socket_offline').hide();
  hasConnectionError = false;
});

listener.on('reconnect', () => {
  $('#socket_offline').hide();
  hasConnectionError = false;
});

export default {
  // For backward compatibility
  on: (channel, callback) => {
    listener.on(channel, callback);
  },

  onUpdate: (model, callback) => {
    listener.on(`${model}:${events.MODEL_CHANGED}`, callback);
  },

  onCreate: (model, callback) => {
    listener.on(`${model}:${events.MODEL_CREATED}`, callback);
  },

  onTrash: (model, callback) => {
    listener.on(`${model}:${events.MODEL_TRASHED}`, callback);
  },
};
