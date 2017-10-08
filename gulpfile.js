// TODO: Replace with webpack and babel
const Elixir = require('laravel-elixir');
// const gulp = require('gulp');
// const shell = require('gulp-shell');

require('laravel-elixir-remove');

// Elixir.extend('lang', () => {
//   new Elixir.Task('lang', () => {
//     const command = shell('php artisan js-localization:export --quiet', {
//       cwd: '../../../',
//     });
//
//     return gulp.src('').pipe(command);
//   });
// });

const packages = 'node_modules';
const build = 'build';

Elixir.config.publicPath = 'build';

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
  // localization: '../../../vendor/andywer/js-localization',
};

Elixir((mix) => {
  mix
    // .lang()
    .styles([
      `${paths.bootstrap}/dist/css/bootstrap.css`,
      `${paths.select2}/dist/css/select2.css`,
      `${paths.fontawesome}/css/font-awesome.css`,
      `${paths.ionicons}/dist/css/ionicons.css`,
      `${paths.admin_lte}/dist/css/AdminLTE.css`,
      `${paths.admin_lte}/dist/css/skins/_all-skins.css`,
      `${paths.toastr}/build/toastr.css`,
      `${paths.cropper}/dist/cropper.css`,
    ], `${build}/css/vendor.css`, './')
    .styles([
      'src/css/app.css',
      'src/css/console.css',
    ], `${build}/css/app.css`, './')
    .scripts([
      `${paths.html5shiv}/dist/html5shiv.js`,
      `${paths.respond}/dest/respond.src.js`,
    ], `${build}/js/ie.js`, packages)
    .scripts([
      `${paths.jquery}/dist/jquery.js`,
      `${paths.jquery_sortable}/source/js/jquery-sortable.js`,
      `${paths.jquery_complete}/dist/jquery.autocomplete.js`,
      `${paths.underscore}/underscore.js`,
      `${paths.moment}/moment.js`,
      `${paths.bootstrap}/dist/js/bootstrap.js`,
      `${paths.select2}/dist/js/select2.js`,
      `${paths.admin_lte}/dist/js/adminlte.js`,
      `${paths.backbone}/backbone.js`,
      `${paths.socketio_client}/dist/socket.io.js`,
      //`${paths.localization}/resources/js/localization.js`,
      `${paths.toastr}/toastr.js`,
      `${paths.cropper}/dist/cropper.js`,
      `${paths.ace}/ace.js`,
      `${paths.ace}/mode/sh.js`,
      `${paths.ace}/mode/php.js`,
      `${paths.ace}/mode/yaml.js`,
      `${paths.ace}/mode/ini.js`,
      `${paths.ace}/mode/xml.js`,
      `${paths.ace}/mode/json.js`,
    ], `${build}/js/vendor.js`, packages)
    .rollup('app.js', `${build}/js`, './src')
    .copy(`${paths.admin_lte}/bootstrap/fonts/**`, `${build}/fonts`)
    .copy(`${paths.fontawesome}/fonts/**`, `${build}/fonts`)
    .copy(`${paths.ionicons}/fonts/**`, `${build}/fonts`)
    .version([
      'css/app.css',
      'css/vendor.css',
      'js/app.js',
      'js/ie.js',
      'js/vendor.js',
    ], build);
});
