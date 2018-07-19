gulp   = require("gulp")
config = require("../config")
$      = config.plugins

browserify = require('browserify')
vueify = require('vueify')
babelify = require('babelify')
source = require('vinyl-source-stream')
buffer = require('vinyl-buffer')
envify = require('envify/custom')

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
  gulp
    .src(config.src.scss)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
    .pipe($.cssmin())
    .pipe($.sourcemaps.write(config.map))
    .pipe(gulp.dest(config.dist.css))

gulp.task "compile:vue", ->
  browserify(config.src.vue, {
    debug: true,
    extensions: ['.js', '.vue'],
    transform: [
      vueify,
      babelify
    ]
  })
    .transform(
      { global: true },
      envify({ NODE_ENV: 'production' })
    )
    .bundle()
    .on("error", (err) ->
      console.log(err.message)
      console.log(err.stack)
    )
    .pipe($.plumber())
    .pipe(source(config.dist.vue))
    .pipe(buffer())
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.sourcemaps.write(config.map))
    .pipe(gulp.dest(config.dist.js));
