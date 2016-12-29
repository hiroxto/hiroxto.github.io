config =
  src :
    coffee : "./assets/js/**/*.coffee"
    scss   : [
      "./assets/css/**/*.scss"
    ]
    haml   : "./**/*.haml"
    fonts  : [
      "./node_modules/bootstrap-sass/assets/fonts/bootstrap/**"
      "./node_modules/font-awesome/fonts/**"
    ]
    lib    :
      js : [
        "./node_modules/jquery/dist/jquery.min.js"
        "./node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js"
      ]

  dist :
    js    : "./assets/js"
    css   : "./assets/css"
    html  : "./"
    fonts : "./assets/fonts"

  map : "./.map"

  lib   :
    js : "lib.js"

  plugins : require("gulp-load-plugins")({
    rename :
      "gulp-ruby-sass" : "sass"
      "gulp-ruby-haml" : "haml"
  })

module.exports = config