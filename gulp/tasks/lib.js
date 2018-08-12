const gulp = require('gulp');
const config = require('../config');
const $ = config.plugins;
const isProduction = config.isProduction;

gulp.task('lib', ['lib:js']);

gulp.task('lib:js', () => {
  gulp
    .src(config.src.lib.js)
    .pipe($.if(isProduction, $.uglify()))
    .pipe($.concat(config.lib.js))
    .pipe(gulp.dest(config.dist.js));
});
