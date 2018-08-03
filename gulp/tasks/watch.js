const gulp = require('gulp');
const config = require('../config');
const $ = config.plugins;

gulp.task('watch', () => {
  [
    'watch:vue',
    'watch:scss',
    'server'
  ].forEach((name) => {
    gulp.start(name);
  });
});

gulp.task('watch:vue', () => {
  $.watch(config.src.vue_watch, () => {
    gulp.start('compile:vue');
  });
});

gulp.task('watch:scss', () => {
  $.watch(config.src.scss, () => {
    gulp.start('compile:scss');
  });
});
