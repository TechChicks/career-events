'use strict';
 
var gulp					= require('gulp');
var browserSync 	= require('browser-sync');
var jade					= require('gulp-jade');
var sass 					= require('gulp-sass');
var sourcemaps 		= require('gulp-sourcemaps');
var autoprefixer 	= require('gulp-autoprefixer');
var nodemon 			= require('gulp-nodemon');

var reload      	= browserSync.reload;

var src = {
	scss: 'scss/**/*.scss',
	css:  'public/css',
	jade: 'views/*.jade'
};

// Default Task
gulp.task('default', ['browser-sync', 'compile'], function() {
	gulp.watch([src.scss], ['sass']);
	gulp.watch([src.jade], ['jade']);
});

// Compile
gulp.task('compile', ['sass']);

// Window Reload
gulp.task('bs-reload', function() {
	browserSync.reload();
});

// BrowserSync Settings
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
	proxy: "localhost:5000",
	port: 7000
  });
});

// Nodemon Initializer
gulp.task('nodemon', function(cb) {
	var called = false;
	return nodemon({
		script: 'app.js',
		ignore: [
		'gulpfile.js',
		'node_modules/'
		]
	})
	.on('start', function() {
		if (!called) {
			called = true;
			cb();
		}
	})
	.on('restart', function() {
		setTimeout(function() {
			reload({
				stream: false
			});
		}, 5000);
	});
});


// Jade 
gulp.task('jade', function() {
	gulp.src(src.jade)
	.pipe(reload({stream: true}));
});

// Sass Recipe
var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

var autoprefixerOptions = {
	browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
	return gulp
		.src(src.scss)
		.pipe(sass(sassOptions))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(gulp.dest(src.css))
		.pipe(reload({stream: true}));
});


