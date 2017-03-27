var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', ['js', 'sass'], function () {
    return true;
});

gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./js'));
});

gulp.task('flexible', function () {
    return gulp.src('./src/js/flexible/*.js')
        .pipe(concat('flexible.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./js'));
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({
            //outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css'));
});