const ShellPlugin = require('webpack-shell-plugin');
const mix = require('laravel-mix');

const packages = 'node_modules';
const build = 'build';

const paths = {
  admin_lte: `${packages}/admin-lte`,
  bootstrap: `${packages}/bootstrap`,
  fontawesome: `${packages}/font-awesome`,
  ionicons: `${packages}/ionicons`,
  html5shiv: `${packages}/html5shiv`,
  respond: `${packages}/respond.js`,
  cropper: `${packages}/cropper`,
  toastr: `${packages}/toastr`,
  select2: `${packages}/select2`,
};


// Add shell command plugin configured to create JavaScript language file
mix
  .webpackConfig({
    plugins: [
      new ShellPlugin({
        onBuildStart: ['php ../deployer/application/artisan js-localization:export --quiet'],
      }),
    ],
  })
  .setPublicPath(`${build}/`)
  .js('src/app.js', `${build}/js/`)
  .autoload({
    jquery: ['$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery'],
    './utils/localization.js': ['Lang'],
  })
  .extract([
    'admin-lte', 'backbone', 'jquery', 'jquery-sortable', 'devbridge-autocomplete',
    'moment', 'underscore', 'brace', 'toastr', 'socket.io-client', 'bootstrap',
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
