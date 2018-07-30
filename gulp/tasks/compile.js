const gulp = require("gulp");
const config = require("../config");
const $ = config.plugins;
const isProduction = config.isProduction;

const browserify = require("browserify");
const vueify = require("vueify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const envify = require("envify/custom");

gulp.task("compile", [
    "compile:vue",
    "compile:scss",
]);

gulp.task("compile:vue", () => {
    let browser = browserify(config.src.vue, {
        debug: true,
        extensions: [".js", ".vue"],
        transform: [
            vueify,
            babelify
        ]
    });

    if (isProduction) {
        browser = browser.transform(
            {global: true},
            envify({NODE_ENV: "production"})
        );
    }

    browser
        .bundle()
        .on("error", (err) => {
            console.log(err.message);
            console.log(err.stack);
        })
        .pipe($.plumber())
        .pipe(source(config.dist.vue))
        .pipe(buffer())
        .pipe($.if(!isProduction, $.sourcemaps.init()))
        .pipe($.if(isProduction, $.uglify()))
        .pipe($.if(!isProduction, $.sourcemaps.write(config.map)))
        .pipe(gulp.dest(config.dist.js));
});

gulp.task("compile:scss", () => {
    gulp
        .src(config.src.scss)
        .pipe($.plumber())
        .pipe($.if(!isProduction, $.sourcemaps.init()))
        .pipe($.sass({outputStyle: "expanded"})
            .on("error", $.sass.logError))
        .pipe($.if(isProduction, $.cssmin()))
        .pipe($.if(!isProduction, $.sourcemaps.write(config.map)))
        .pipe(gulp.dest(config.dist.css));
});
