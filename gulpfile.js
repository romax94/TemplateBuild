const gulp = require('gulp'),
	  jade = require('gulp-jade'),
	  stylus = require('gulp-stylus'),
	  autoprefixer = require('gulp-autoprefixer');

gulp.task('html', () => {
	gulp.src('./src/jade/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./dist/template'));
});

gulp.task('css', () => {
	gulp.src('./src/stylus/*.styl')
		.pipe(stylus({ 
			compess: false
		}))
		.pipe(autoprefixer({
			browsers: ['last 30 version'],
			cascade: false
		}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', () => {
	gulp.watch('./src/jade/*.jade', ['html']);
	gulp.watch('./src/stylus/*.styl', ['css']);
});

gulp.task('default', ['html', 'css', 'watch']);