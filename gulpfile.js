/* gulpfile.js */
/* globals require console */

(function() {

'use strict';

// Load some modules which are installed through NPM.
var del = require('del');
var runSequence = require('run-sequence');
var gulp = require('gulp');
var babel = require('gulp-babel');
var batch = require('gulp-batch');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');

// Directories
var src = 'src';
var dist = 'dist';

// Path globs
var paths = {
  jsx: [src + '/**/*.jsx'],
  js: [src + '/**/*.js'],
  fonts: [src + '/**/*.{eot,svg,ttf,woff,woff2}'],
  css: [src + '/**/*.css'],
  html: [src + '/**/*.html'],
  img: [
    src + '/**/*.png',
    src + '/**/*.jpg',
    src + '/**/*.jpeg',
    src + '/**/*.gif',
  ],
  assets: [
    src + '/**/*.html',
    src + '/**/*.js',
    src + '/**/*.jsx',
    src + '/**/*.css',
    src + '/**/*.less',
    src + '/**/*.png',
    src + '/**/*.jpg',
    src + '/**/*.jpeg',
    src + '/**/*.gif',
    src + '/**/*.json',
  ],
};

var monkeypatch = function monkeypatch(e) {
  var _this = this;
  console.log(e.toString());
  _this.emit('end');
};

gulp.task('clean', function(cb) {
  del([dist], cb);
});

gulp.task('copy-html', function() {
  gulp.src(paths.html)
  .pipe(plumber({ errorHandler: monkeypatch }))
  .pipe(gulp.dest(dist));
});

gulp.task('copy-css', function() {
  gulp.src(paths.css)
  .pipe(plumber({ errorHandler: monkeypatch }))
  .pipe(gulp.dest(dist));
});

gulp.task('copy-js', function() {
  gulp.src(paths.js)
  .pipe(plumber({ errorHandler: monkeypatch }))
  .pipe(gulp.dest(dist));
});

gulp.task('copy-fonts', function() {
  gulp.src(paths.fonts)
  .pipe(plumber({ errorHandler: monkeypatch }))
  .pipe(gulp.dest(dist));
});

gulp.task('build', function(cb) {
  runSequence(['copy-html', 'copy-css', 'copy-js', 'copy-fonts'], cb);
});

gulp.task('watch', function() {
  gulp.watch(paths.html, ['copy-html']);
  gulp.watch(paths.css, ['copy-css']);
  gulp.watch(paths.js, ['copy-js']);
  gulp.watch(paths.fonts, ['copy-fonts']);
});

gulp.task('dev', function(cb) {
  runSequence('clean', 'build', 'watch', 'serve', cb);
});

gulp.task('default', ['dev']);

gulp.task('serve', function() {
  gulp.src(src)
  .pipe(webserver({
    livereload: {
      enable: true,
      pollingInterval: 100,
    },
    open: true,
  }));
});

//
// Incident Form related tasks
// Vagrant keeps com.pge.gasops.director.indicators.incident_form in sync with the /src/local... folder on gd4x
// Gulp will sync com.pge.gasops.director.indicators.incident_form with the projects/bs/plugins... folder
var formSrc = 'com.pge.gasops.director.indicators.incident_form';
var formDist = '../../bs/plugins/com.pge.gasops/director/WebRoot/WEB-INF/classes/plugins/indicators/com.pge.gasops.director.indicators.incident_form';

gulp.task('incident-form', function() {
  gulp.watch(formSrc + '/**/*', ['sync:incident-form']);
});

gulp.task('clean:incident-form-dist', function(cb) {
  del([formDist], {
    force: true,
  }, cb);
});

gulp.task('sync:incident-form', ['clean:incident-form-dist'], function() {
  return gulp.src(formSrc + '/**/*', {
    base: formSrc,
    dot: true,
  }).pipe(gulp.dest(formDist));
});

})();

// END FILE
