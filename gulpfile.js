/**
 * Created by s.zhitenev on 12.01.2016.
 *
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');

gulp.task('core-min-js', function(){

    var pathToJs = [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/bootstrap.js',
        'node_modules/underscore/underscore.js',
        'node_modules/backbone/backbone.js',
        'node_modules/handlebars/dist/handlebars.js'
    ];

    return gulp.src(pathToJs)
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename('libs.min.js'))
        .pipe(gulp.dest('dist/js'));

});

gulp.task('core-min-css', function(){

    var pathToCss = ['node_modules/bootstrap/dist/css/bootstrap.min.css'];

    return gulp.src(pathToCss)
        .pipe(gulp.dest('dist/css'));

});

gulp.task('main-min-js', function(){

    var pathToJs = ['src/main.js'];

    return gulp.src(pathToJs)
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('dist/js'))

});