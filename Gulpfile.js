var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;

gulp.task('sass', function() {

  return gulp.src('css/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('css'));
});

gulp.task('inject', function() {
  var injectFiles = gulp.src(['lib/bootstrap/css/bootstrap.min.css', 'public/css/main.css', 'assets/magnific-popup, magnific-popup.css']);

  gulp.src('index.html')
      .pipe(inject(injectFiles))
      .pipe(gulp.dest('./'));
});

gulp.task('sass-watch', function() {
  gulp.watch('./css/**/**/*.scss', ['sass']);

});
