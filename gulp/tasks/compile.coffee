gulp   = require("gulp")
config = require("../config")
$      = config.plugins

gulp.task("compile", ["compile:babel", "compile:scss"])

gulp.task "compile:babel", ["lint:es"], ->
  gulp.src(config.src.babel)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.uglify())
    .pipe($.sourcemaps.write(config.map))
    .pipe(gulp.dest(config.dist.js))

gulp.task "compile:scss", ->
  $.sass(config.src.scss)
  .pipe($.sourcemaps.init())
  .pipe($.cssmin())
  .pipe($.sourcemaps.write(config.map))
  .pipe(gulp.dest(config.dist.css))
