gulp   = require("gulp")
config = require("../config")
$      = config.plugins

gulp.task("lib", ["lib:js"])

gulp.task "lib:js", ->
  gulp.src(config.src.lib.js)
  .pipe($.sourcemaps.init())
  .pipe($.uglify())
  .pipe($.concat(config.lib.js))
  .pipe($.sourcemaps.write(config.map))
  .pipe(gulp.dest(config.dest.js))