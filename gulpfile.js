/* gulpfile.js */
/* globals require console */

(function() {

'use strict';

// Load some modules which are installed through NPM.
let del = require('del');
let runSequence = require('run-sequence');
let gulp = require('gulp');
let jscs = require('gulp-jscs');
let babel = require('gulp-babel');
let batch = require('gulp-batch');
let plumber = require('gulp-plumber');
let watch = require('gulp-watch');
let webserver = require('gulp-webserver');

let path = {
  src:   'src',
  build: 'build',
  dist:  'dist',
  libs:  '!src/assets/libs/**',
};

// Directories
let src = {
  glob: {
    libs:   ['src/assets/libs/**'],
    static: ['src/**/*.{json,xml,eot,svg,ttf,woff,woff2}', path.libs],
    css:    ['src/**/*.css', path.libs],
    html:   ['src/**/*.html', path.libs],
    js:     ['src/**/*.js', path.libs],
    img: [
      path.src + '/**/*.png',
      path.src + '/**/*.jpg',
      path.src + '/**/*.jpeg',
      path.src + '/**/*.gif',
    ],
    assets: [
      path.src + '/**/*.html',
      path.src + '/**/*.js',
      path.src + '/**/*.jsx',
      path.src + '/**/*.css',
      path.src + '/**/*.less',
      path.src + '/**/*.png',
      path.src + '/**/*.jpg',
      path.src + '/**/*.jpeg',
      path.src + '/**/*.gif',
      path.src + '/**/*.json',
    ],
  },
};

var monkeypatch = function monkeypatch(e) {
  var _this = this;
  console.log(e.toString());
  _this.emit('end');
};

gulp.task('clean:dist', function() {
  return del(['dist/**', '!dist'])
    .then(function(paths) {
      // console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

gulp.task('compile:js', function() {
  return gulp.src(src.glob.js)
    .pipe(plumber({ errorHandler: monkeypatch }))
    .pipe(jscs({
           fix: true
       }))
    .pipe(babel())
    .pipe(gulp.dest(path.dist));
});

gulp.task('copy:html', function() {
  return gulp.src(src.glob.html)
  .pipe(plumber({ errorHandler: monkeypatch }))
  .pipe(gulp.dest(path.dist));
});

gulp.task('copy:css', function() {
  return gulp.src(src.glob.css)
  .pipe(plumber({ errorHandler: monkeypatch }))
  .pipe(gulp.dest(path.dist));
});

gulp.task('copy:libs', function() {
  return gulp.src(src.glob.libs)
  .pipe(plumber({ errorHandler: monkeypatch }))
  .pipe(gulp.dest(path.dist + '/assets/libs'));
});

gulp.task('copy:static', function() {
  return gulp.src(src.glob.static)
  .pipe(plumber({ errorHandler: monkeypatch }))
  .pipe(gulp.dest(path.dist));
});

gulp.task('watch:src', function() {
  watch(src.glob.assets, function() {
    gulp.start('build:src');
  });
});

gulp.task('build:src', function() {
  runSequence('clean:dist', 'compile:js', ['copy:html', 'copy:css', 'copy:libs', 'copy:static']);
});

gulp.task('echo', function() {
  console.log('Working!');
});

gulp.task('serve:dist', function() {
  gulp.src(path.dist)
  .pipe(plumber({ errorHandler: monkeypatch }))
  .pipe(webserver({
    livereload: {
      enable: true,
      pollingInterval: 100,
    },
    open: true,
  }));
});

gulp.task('serve:src', function() {
  gulp.src(path.src)
  .pipe(plumber({ errorHandler: monkeypatch }))
  .pipe(webserver({
    livereload: {
      enable: true,
      pollingInterval: 100,
    },
    open: true,
  }));
});

gulp.task('serve:build', function() {
  gulp.src(path.build)
  .pipe(plumber({ errorHandler: monkeypatch }))
  .pipe(webserver({
    livereload: {
      enable: true,
      pollingInterval: 100,
    },
    open: true,
  }));
});

gulp.task('dev', function(cb) {
  runSequence('build:src', 'watch:src', 'serve:dist', cb);
});

gulp.task('default', ['dev']);

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
