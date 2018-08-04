const gulp = require('gulp');
const config = require('../config');
const $ = config.plugins;

gulp.task('lint', ['lint:es']);

gulp.task('lint:es', () => {
  gulp
    .src(config.src.eslint)
    .pipe($.plumber())
    .pipe($.eslint(config.options.eslint))
    .pipe($.eslint.formatEach('compact', process.stderr));
});
