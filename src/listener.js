import $ from 'jquery';
import io from 'socket.io-client';

const socket = $('meta[name="socket_url"]').attr('content');
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

listener.on('connect', () => {
  $('#socket_offline').hide();
  hasConnectionError = false;
});

listener.on('reconnect', () => {
  $('#socket_offline').hide();
  hasConnectionError = false;
});

export default listener;
