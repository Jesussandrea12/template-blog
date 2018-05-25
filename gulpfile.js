const gulp = require('gulp')
const postcss = require('gulp-postcss')
const rucksack = require('rucksack-css')
const cssnested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const atImport = require('postcss-import')
const mixins = require('postcss-mixins')
const csswring = require('csswring')
const mqpacker = require('css-mqpacker')
// const uglify = require('gulp-uglify')
const browserSync = require('browser-sync').create()

// Servidor de desarrollo
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})

// Tarea para procesar el CSS
gulp.task('css', function () {
  var processors = [
    atImport(),
    mixins(),
    rucksack(),
    cssnested,
    cssnext({ browsers: ['last 2 versions']}),
    mqpacker()
  ]

  return gulp.src('./src/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream())
})

// Tarea para vigilar los cambios
gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['css'])
  gulp.watch('./src/**/*.css', ['css'])
  gulp.watch('./assets/js/*.js').on('change', browserSync.reload)
  gulp.watch('./*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch', 'serve'])
