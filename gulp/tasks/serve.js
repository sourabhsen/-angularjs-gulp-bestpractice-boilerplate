'use strict';
var config = require('../config');
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var spa         = require('browser-sync-spa');
var runSequence = require('run-sequence');
var httpProxy   = require('http-proxy');


browserSync.use(spa({
  selector: '[ng-app]' // Only needed for angular apps
}));

// TODO: condense callback for both env to take args for baseDir
function serveCallback() {
  browserSync.instance = browserSync.init({
      startPath: '/',
      notify  : false,
      port    : 3000,
      server: {
        baseDir    : ['build', './'],
      }
  });
}

/**
 * Create a development build and serve files from /build
 */
gulp.task('serve', function(){
  runSequence(
    'clean',
    ['scripts', 'wiredep'],
    'styles',
    'html',
    'copy',
    'inject',
    'watch',
    serveCallback
  );
});
