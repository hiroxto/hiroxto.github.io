gulp   = require("gulp")
config = require("../config")
$      = config.plugins

gulp.task("lint", ["lint:es", "lint:coffee"])

gulp.task "lint:es", ->
  gulp.src(config.src.babel)
    .pipe($.plumber())
    .pipe($.eslint(config.options.eslint))
    .pipe($.eslint.formatEach("compact", process.stderr))

gulp.task "lint:coffee", ->
  gulp.src(config.src.coffee)
    .pipe($.plumber())
    .pipe($.coffeelint())
    .pipe($.coffeelint.reporter("coffeelint-stylish"))
