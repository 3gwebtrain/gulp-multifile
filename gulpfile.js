var gulp = require('gulp'),
	requireDir = require('require-dir')
	requireDir('./gulp-tasks');


gulp.task('default', ['scripts'], function(){

	//when changes happend we rebuild the uglify.
	gulp.watch('src/app/**/*.js', ['scripts']);

});