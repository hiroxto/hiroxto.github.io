gulp   = require("gulp")
config = require("../config")
$      = config.plugins

gulp.task "watch", ->
  [
    "vue"
    "scss"
  ].forEach((name) ->
    gulp.start("watch:#{name}")
  )

gulp.task "watch:vue", ->
  $.watch(config.src.babel, -> gulp.start("compile:vue"))

gulp.task "watch:scss", ->
  $.watch(config.src.scss, -> gulp.start("compile:scss"))
