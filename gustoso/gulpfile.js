'use strict';

let gulp = require('gulp');
let watch=require('gulp-watch');
let cleanCSS = require('gulp-clean-css');  
let concat  = require('gulp-concat'); 
let   uglify = require('gulp-uglify'); 
let  imagemin = require('gulp-imagemin');
let fontmin = require('gulp-fontmin');
let jquery = require('gulp-jquery');


gulp.task('minify-css', () => {
    return gulp.src([
                'app/css/bootstrap.css',
                'app/css/bootstrap-grid.css',
                'app/css/css-common.css',
                 'app/css/css.css'
        ]) 
  	
   .pipe(cleanCSS())
   .pipe(concat('min.css'))
   .pipe(gulp.dest('dist'));
});


gulp.task('scripts', function() {
    return gulp.src([ 
        'app/js/jquery.easing.1.3.js', 
     
        'app/js/local.js'
        ])
        .pipe(concat('min.js')) 
        .pipe(gulp.dest('dist')); 
});


gulp.task('images', function() {
    gulp.src('app/i/**/*') 
        .pipe(imagemin()) 
        .pipe(gulp.dest('dist/i')) 

});

gulp.task('fonts', function () {
    return gulp.src('app/fonts/scriptina/*.ttf')
        .pipe(fontmin({
            text: 'scriptina',
        }))
        .pipe(gulp.dest('dist/fonts/scriptina'));
});

gulp.task('watch', function () {
	gulp.watch('app/css/**/*.css', ['css']); 
	gulp.watch('app/js/**/*.js', ['js']);
	gulp.watch('app/i/**/*', ['i']);
	gulp.watch('app/fonts/scriptina/**/*', ['fonts']);
});





