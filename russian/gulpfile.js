'use strict';

const gulp = require("gulp");
const sass = require("gulp-sass");


//compile 
gulp.task("sass", () => gulp.src("src/scss/index.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("src/css")));


//compile and watch 
gulp.task("sass:watch", () => gulp.watch("src/scss/index.scss", ["sass"]));
