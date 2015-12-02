'use strict';
// Dependencies
var log          = require('./util/log');
var errorHandler = require('./util/errorHandler');

// default config
var defaultConfig = {
    root         : './',
    src          : 'src',
    build        : 'build',
    dist         : 'dist',
    index        : 'src/index.html',
    app          : 'src/app',
    tests        : [
     'src/app/**/*.spec.js'
    ],
    appjs        : [
      'src/**/*.js',
      '!src/app/**/*.spec.js',
      '!src/app/**/*.mock.js'
    ],
    gulpjs       : ['gulpfile.js', './gulp/**/*.js'],
    sass         : ['src/styles/styles.scss'],
    images       : ['src/images/**/*.*', '!src/images/icon-svg/*.*'],
    assets       : [
      'src/**/*.*',
      '!src/images/icon-svg/*.*',
      '!src/app/**/*.html',
      '!src/index.html',
      '!src/**/*.scss',
      '!src/**/*.js',
    ],
    fonts        : ['./bower_components/fontawesome/fonts/**/*.*', './bower_components/bootstrap-sass-official/assets/fonts/**/*.*'],
    sprites      : 'src/images/icon-svg/*',
    log          : log,
    errorHandler : errorHandler,
    inject       : {
      ignorePath   : [ 'src', '../dist/' ],
      addRootSlash : false,
      relative     : true
    },
    wiredep      : {
      bowerJson    : require('../bower.json'),
      directory    : './bower_components/',
      ignorePath   : '../..',
      exclude      : [/bootstrap-sass-official\/.*\.js/, /bootstrap\.css/]
    },
    jshint        : '.jshintrc',
    htmlhint      : '.htmlhintrc',
    htmlTemplates  : ['src/app/**/*.html', '!src/index.html' ],
    templateCache : {
      module  : 'admin-dashboard',
      root    : 'app'
    },
    deploy     : {
      displayName: 'Admin Dashboard',
      war: 'admindash-ui.war'
    }

};

module.exports = defaultConfig;
