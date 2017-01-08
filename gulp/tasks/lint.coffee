config = require("../config")
$      = config.plugins

gulp.task("lint", ["lint:coffee"])

gulp.task "lint:coffee", ->
  gulp.src(config.src.coffee)
    .pipe($.plumber())
    .pipe($.coffeelint())
    .pipe($.coffeelint.reporter("coffeelint-stylish"))
