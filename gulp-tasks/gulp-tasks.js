var gulp = require('gulp')
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('scripts', function(){

	gulp.src('src/app/**/*.js')
		.pipe(concat('scripts'))
		.pipe(uglify().on('error', function(e){
			console.log( e ); //to know the error 
		}))
		.pipe(gulp.dest('dest'));

});