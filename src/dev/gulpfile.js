'use strict'
 
const gulp = require('gulp')
const sass = require('gulp-sass')
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../prod/css'))
})
 
gulp.task('copy', function () {
  return gulp.src('./app/*')
    .pipe(gulp.dest('../prod/'))
})


gulp.task('files:watch', function () {
  gulp.watch('./app/*', ['copy'])
})

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass'])
})


gulp.task('default', function () {
  gulp.start('sass:watch', 'files:watch')
})