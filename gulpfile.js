var gulp = require('gulp'); 
var del = require("del");

var plugins = require("gulp-load-plugins")();

var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

var config = require("./config");

gulp.task('default',["mytask1"], function() 
	{ // place code for your default task here 
		console.log('Hello, Gulp!'); 
		});
		
		gulp.task('mytask1',['mytask2'], function() 
	{ // place code for your default task here 
		console.log('Hello, mytask1!'); 
		//cb();
		});
		
				gulp.task('mytask2', function() 
	{ // place code for your default task here 
		console.log('Hello, mytask2!'); 
		//cb();
		});
		
		gulp.task('output1', function() 
	{ 
		gulp.src("assets/bootstrap/**/*.js")
		.pipe(gulp.dest("output1"));
		});
		
		gulp.task('output2',["clean"], function() 
	{ 
		gulp.src("assets/bootstrap/**/*.js", {base:"assets"})
		.pipe(gulp.dest("output2"));
		});
		
		gulp.task('output3', function() 
	{ 
		gulp.src(["assets/vendor/**/*.js","assets/vendor/**/*.css"])
		.pipe(gulp.dest("output3"));
		});
		
		gulp.task('output4', function() 
	{ 
		gulp.src(["assets/vendor/angular/*.js","assets/vendor/angular-animate/angular-*.js"])
		.pipe(gulp.dest("output4"));
		});
		
		
		gulp.task('clean', function(cb) 
	{ 
		del(['output2/bootstrap/**']).then(cb());
		
		});
		
		gulp.task('watch', function(cb) 
	{ 
		gulp.watch(config.appPath + '/**/*.js', ["default"]);
		
		});
		
		
gulp.task('concat-app', function(cb) 
	{ 
		gulp.src('app/**/*.module.js')
		.pipe(plugins.concat('app-modules.js'))
		.pipe(gulp.dest("assets"))
		.pipe(uglify({mangle:false}))
		.pipe(rename({extname:'.min.js'}))
			.pipe(gulp.dest("assets"));
			
			gulp.src(['app/**/*.js','!app/**/*.module.js'])
		.pipe(concat('app-bundle.js'))
		.pipe(gulp.dest("assets"))
		.pipe(uglify({mangle:false}))
		.pipe(rename({extname:'.min.js'}))
			.pipe(gulp.dest("assets"));

		});
		
		
		