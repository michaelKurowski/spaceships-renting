'use strict'
 
const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../prod/css'))
})
 
gulp.task('copy', function () {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('../prod/'))
})


gulp.task('html:watch', function () {
  gulp.watch('./app/**/*.html', ['copy'])
})

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass'])
})

gulp.task('babel', () => {
    return gulp.src('./app/**/*.js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('../prod/'));
})
gulp.task('js:watch', () => {
    gulp.watch('./app/**/*.js', ['babel'])
})

gulp.task('default', function () {
  gulp.start('sass:watch', 'html:watch', 'js:watch')
})
