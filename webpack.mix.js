const mix = require('laravel-mix');

const packages = 'node_modules';
const build = 'build';

const paths = {
  admin_lte: `${packages}/admin-lte`,
  ace: `${packages}/ace-code-editor/lib/ace`,
  backbone: `${packages}/backbone`,
  bootstrap: `${packages}/bootstrap`,
  underscore: `${packages}/underscore`,
  moment: `${packages}/moment`,
  jquery: `${packages}/jquery`,
  jquery_sortable: `${packages}/jquery-sortable`,
  jquery_complete: `${packages}/devbridge-autocomplete`,
  fontawesome: `${packages}/font-awesome`,
  socketio_client: `${packages}/socket.io-client`,
  ionicons: `${packages}/ionicons`,
  html5shiv: `${packages}/html5shiv`,
  respond: `${packages}/respond.js`,
  cropper: `${packages}/cropper`,
  toastr: `${packages}/toastr`,
  select2: `${packages}/select2`,
};

mix
  .setPublicPath(`${build}/`)
  .js('src/app.js', `${build}/js/`)
  .autoload({
    jquery: ['$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery'],
  })
  .extract([
    'admin-lte', 'backbone', 'jquery', 'jquery-sortable', 'moment',
    'underscore', 'brace', 'toastr', 'socket.io-client', 'bootstrap',
  ])
  .scripts([
    `${paths.html5shiv}/dist/html5shiv.js`,
    `${paths.respond}/dest/respond.src.js`,
  ], `${build}/js/ie.js`)
  .sourceMaps()
  .styles([
    'src/css/app.css',
    'src/css/console.css',
  ], `${build}/css/app.css`)
  .styles([
    `${paths.bootstrap}/dist/css/bootstrap.css`,
    `${paths.select2}/dist/css/select2.css`,
    `${paths.fontawesome}/css/font-awesome.css`,
    `${paths.ionicons}/dist/css/ionicons.css`,
    `${paths.admin_lte}/dist/css/AdminLTE.css`,
    `${paths.admin_lte}/dist/css/skins/_all-skins.css`,
    `${paths.toastr}/build/toastr.css`,
    `${paths.cropper}/dist/cropper.css`,
  ], `${build}/css/vendor.css`)
  .copy(`${paths.bootstrap}/fonts/**`, `${build}/fonts`)
  .copy(`${paths.fontawesome}/fonts/**`, `${build}/fonts`)
  .copy(`${paths.ionicons}/dist/fonts/**`, `${build}/fonts`)
  .version();

/*
    .scripts([
      `${paths.jquery_complete}/dist/jquery.autocomplete.js`,
      //`${paths.localization}/resources/js/localization.js`,
      `${paths.cropper}/dist/cropper.js`,
    ], `${build}/js/vendor.js`, packages)
 */


// Elixir.extend('lang', () => {
//   new Elixir.Task('lang', () => {
//     const command = shell('php artisan js-localization:export --quiet', {
//       cwd: '../../../',
//     });
//
//     return gulp.src('').pipe(command);
//   });
// });
