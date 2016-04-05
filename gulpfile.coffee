gulp   = require("gulp")
coffee = require("gulp-coffee")
sass   = require("gulp-ruby-sass")
haml   = require("gulp-ruby-haml")
uglify = require("gulp-uglify")
concat = require("gulp-concat")
cssmin = require("gulp-cssmin")
sourcemaps = require("gulp-sourcemaps")

gulp.task("default", ["compile"])
gulp.task("compile", ["js", "css"])

gulp.task "compile:coffee", ->
  gulp.src("./assets/js/**.coffee")
  .pipe(sourcemaps.init())
  .pipe(coffee())
  .pipe(sourcemaps.write(".map"))
  .pipe(gulp.dest("./assets/js"))

gulp.task "compile:scss", ->
  sass("./assets/css/**.scss")
  .pipe(sourcemaps.init())
  .pipe(cssmin())
  .pipe(sourcemaps.write(".map"))
  .pipe(gulp.dest("./assets/css"))

gulp.task "compile:haml", ->
  gulp.src("./**.haml")
  .pipe(haml())
  .pipe(gulp.dest("./"))

gulp.task "watch", ->
  gulp.watch("./assets/js/**.coffee", ["js"])
  gulp.watch("./assets/css/**.scss", ["css"])
  gulp.watch("./**.haml", ["compile:haml"])

gulp.task "js", ["compile:coffee"], ->
  gulp.src([
    "./bower_components/jquery/dist/jquery.min.js"
    "./bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js"
    "./assets/js/to-top.js"
  ])
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(concat("lib.js"))
  .pipe(sourcemaps.write("./.map"))
  .pipe(gulp.dest("./assets/js/"))

gulp.task "css", ["compile:scss"], ->
  gulp.src("./assets/css/*.css")
  .pipe(sourcemaps.init())
  .pipe(cssmin())
  .pipe(sourcemaps.write("./.map"))
  .pipe(gulp.dest("./assets/css/"))

gulp.task "copy:font", ->
  gulp.src([
    "./bower_components/bootstrap-sass/assets/fonts/bootstrap/**"
    "./bower_components/font-awesome/fonts/**"
  ])
  .pipe(gulp.dest("./assets/fonts/"))