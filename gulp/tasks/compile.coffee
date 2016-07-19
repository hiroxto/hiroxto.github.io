gulp   = require("gulp")
config = require("../config")
$      = config.plugins

gulp.task("compile", ["compile:coffee", "compile:scss"])

gulp.task "compile:coffee", ->
  gulp.src(config.src.coffee)
  .pipe($.sourcemaps.init())
  .pipe($.coffee())
  .pipe($.sourcemaps.write(config.map))
  .pipe(gulp.dest(config.dist.coffee))

gulp.task "compile:scss", ->
  sass(config.dist.scss)
  .pipe($.sourcemaps.init())
  .pipe($.cssmin())
  .pipe($.sourcemaps.write(config.map))
  .pipe(gulp.dest(config.dist.scss))

gulp.task "compile:haml", ->
  gulp.src(config.src.haml)
  .pipe($.haml())
  .pipe(gulp.dest(config.dist.haml))