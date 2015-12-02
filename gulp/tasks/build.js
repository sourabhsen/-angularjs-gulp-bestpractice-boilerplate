'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Build project but do not serve or watch
 */
gulp.task('build', function(){
  config.log('Building source --> /build');

  runSequence(
    'clean',
    ['scripts', 'styles', 'wiredep', 'sprite'],
    'copy',
    'inject'
  );
});


gulp.task('testAndBuild', function(){
  runSequence(
    ['clean:dist', 'test'],
    ['wiredep:dist','sprite:dist'],
    ['scripts:dist', 'styles:dist', 'html:dist', 'fonts:dist', 'apti-status'],
    'copy:dist',
    'inject:dist',
    'war'
  );
});
