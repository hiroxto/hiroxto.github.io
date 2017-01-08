gulp   = require("gulp")
config = require("../config")
$      = config.plugins

gulp.task("compile", ["compile:coffee", "compile:scss", "compile:haml"])

gulp.task "compile:coffee", ["lint:coffee"], ->
  gulp.src(config.src.coffee)
  .pipe($.sourcemaps.init())
  .pipe($.coffee())
  .pipe($.uglify())
  .pipe($.sourcemaps.write(config.map))
  .pipe(gulp.dest(config.dist.js))

gulp.task "compile:scss", ->
  $.sass(config.src.scss)
  .pipe($.sourcemaps.init())
  .pipe($.cssmin())
  .pipe($.sourcemaps.write(config.map))
  .pipe(gulp.dest(config.dist.css))

gulp.task "compile:haml", ->
  gulp.src(config.src.haml)
  .pipe($.haml())
  .pipe(gulp.dest(config.dist.html))