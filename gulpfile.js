'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var copy = require('gulp-contrib-copy');

const APP_DIR = './app';

gulp.task('clean', function(){

  gulp.src(APP_DIR + '/css')
    .pipe(clean());

  gulp.src(APP_DIR + '/images')
    .pipe(clean());
});

gulp.task('styles', function () {

  gulp.src(APP_DIR + '/bower_components/synbydesign-design/src/images/**/*')
    .pipe(copy())
    .pipe(gulp.dest( APP_DIR + '/images'));

  gulp.src(APP_DIR + '/bower_components/synbydesign-design/src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest( APP_DIR + '/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});