var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
  // Node source
  gulp.src("es6/**/*.js")
    .pipe(babel({presets: ["es2015"]}))
    .pipe(gulp.dest("dist"));
  // Browser source
  gulp.src("public/es6/**/*.js")
    .pipe(babel({presets: ["es2015"]}))
    .pipe(gulp.dest("public/dist"));
});
