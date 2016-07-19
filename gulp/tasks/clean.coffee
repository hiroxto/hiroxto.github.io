gulp   = require("gulp")
del    = require("del")
config = require("../config")

gulp.task("clean", ["clean:js", "clean:css", "clean:font", "clean:map"])

gulp.task "clean:js", ->
  del(["#{config.dist.js}/**/*"])

gulp.task "clean:css", ->
  del(["#{config.dist.css}/**/*"])

gulp.task "clean:font", ->
  del(["#{config.dist.fonts}/**/*"])

gulp.task "clean:map", ->
  del(["./assets/**/.map"])