gulp = require("gulp")

gulp.task("all", ["clean", "compile", "lib", "copy"])