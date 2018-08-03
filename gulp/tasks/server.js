const gulp = require('gulp');
const config = require('../config');
const $ = config.plugins;

gulp.task('server', () => {
  $.connect.server({
    root: './',
    livereload: true,
    port: 8888
  });
});
