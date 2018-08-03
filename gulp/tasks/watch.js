const gulp = require('gulp');
const config = require('../config');
const $ = config.plugins;

gulp.task('watch', () => {
  [
    'vue',
    'scss'
  ].forEach((name) => {
    gulp.start(`watch:${name}`);
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
