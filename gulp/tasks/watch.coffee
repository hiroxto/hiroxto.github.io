gulp   = require("gulp")
config = require("../config")
$      = config.plugins

gulp.task "watch", ->
  [
    "babel"
    "scss"
  ].forEach((name) ->
    gulp.start("watch:#{name}")
  )

gulp.task "watch:babel", ->
  $.watch(config.src.babel, -> gulp.start("compile:babel"))

gulp.task "watch:scss", ->
  $.watch(config.src.scss, -> gulp.start("compile:scss"))
