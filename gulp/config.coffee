config =
  src :
    coffee : "./assets/js/**/*.coffee"
    scss   : [
      "./assets/css/**/*.scss"
    ]
    haml   : "./**/*.haml"
    fonts  : "./bower_components/**/fonts/**"
    lib    :
      js : [
        "./bower_components/jquery/dist/jquery.min.js"
        "./bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js"
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