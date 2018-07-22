gulp   = require("gulp")
config = require("../config")
$      = config.plugins
isProduction = config.isProduction

gulp.task("lib", ["lib:js"])

gulp.task "lib:js", ->
  gulp.src(config.src.lib.js)
    .pipe($.if(!isProduction, $.sourcemaps.init()))
    .pipe($.if(isProduction, $.uglify()))
    .pipe($.concat(config.lib.js))
    .pipe($.if(!isProduction, $.sourcemaps.write(config.map)))
    .pipe(gulp.dest(config.dist.js))
