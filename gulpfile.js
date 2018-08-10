const gulp = require('gulp')
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('scss', () => {
  gulp.src(['./**/*.scss', '!node_modules/**/*','!lib/**/*'])  // 选择所有文件夹下的scss文件，但不包括node_modules和lib文件夹下的文件
      .pipe(sass().on('error',sass.logError))  // 会将scss文件处理为css文件
      .pipe(cleanCss()) // 将css文件进行压缩处理
      .pipe(rename((path) => {  // 将css后缀名改为wxss文件
        path.extname = '.wxss'
      }))
      .pipe(gulp.dest('./')) // 将wxss问价放在对应的目录下
})

gulp.task('watch', () => {
  gulp.watch('./*.scss', ['scss']);
   gulp.watch('./pages/**/*', ['scss']);
})

gulp.task('default', ['watch'], () => {
  console.log('done')
})