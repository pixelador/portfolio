var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');


gulp.task('sass', function() {
    gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('.'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./sass/*.scss', ['sass']);
})