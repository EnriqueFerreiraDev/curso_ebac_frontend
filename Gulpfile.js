const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Tarefa para compilar SASS
gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Tarefa para comprimir imagens
gulp.task('imagemin', function () {
  return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Tarefa para comprimir JavaScript
gulp.task('uglify', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
});

// Tarefa de watch para automatizar as tarefas
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/images/**/*', gulp.series('imagemin'));
  gulp.watch('src/js/**/*.js', gulp.series('uglify'));
});

// Tarefa padrão que executa todas as tarefas acima
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify', 'watch'));
