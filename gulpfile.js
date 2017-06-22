'use strict';
var gulp=require('gulp');
var less=require('gulp-less');
gulp.task('say',function(){
	console.log('hello world');
});

gulp.task('copy',function()
{
	gulp.src('src/index.html')
	.pipe(gulp.dest('dist/'));
});


gulp.task('dist',function()
{
	gulp.watch('src/index.html',['copy']);
	gulp.watch('src/style/*.less',['style']);
});
gulp.task('style',function(){
	gulp.src('src/style/*.less')
	.pipe(less())
	.pipe(minify())
	.pipe(gulp.dest('dist/css/'));

});


var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// or...

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});


