gulp   = require("gulp")
coffee = require("gulp-coffee")
sass   = require("gulp-ruby-sass")

gulp.task("default", ["compile"])
gulp.task("compile", ["compile:coffee", "compile:scss"])

gulp.task "compile:coffee", ->
  gulp.src("./assets/js/**.coffee").pipe(coffee()).pipe(gulp.dest("./assets/js"))

gulp.task "compile:scss", ->
  sass("./assets/css/**.scss").pipe(gulp.dest("./assets/css"))

gulp.task "watch", ->
  gulp.watch("./assets/css/**.scss", ["compile:scss"])
  gulp.watch("./assets/js/**.coffee", ["compile:coffee"])