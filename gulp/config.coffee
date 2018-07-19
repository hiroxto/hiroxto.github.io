config =
  src :
    babel  : "./assets-src/js/**/*.js"
    scss   : "./assets-src/scss/**/*.scss"
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
    fonts : "./assets/fonts"

  map : "./.map"

  lib   :
    js : "lib.js"

  options :
    eslint :
      configFile : ".eslintrc.yml"

  plugins : require("gulp-load-plugins")()

module.exports = config
