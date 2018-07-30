const gulp = require("gulp");
const del = require("del");
const config = require("../config");

gulp.task("clean", [
    "clean:js",
    "clean:css",
    "clean:map"
]);

gulp.task("clean:js", () => {
    del([`${config.dist.js}/**/*.js`]);
});

gulp.task("clean:css", () => {
    del([`${config.dist.css}/**/*.css`]);
});

gulp.task("clean:map", () => {
    del(["./assets/**/.map"]);
});
