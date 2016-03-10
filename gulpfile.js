"use strict"

let gulp = require('gulp');
let server = require('gulp-express')

gulp.task('default', function() {
  // place code for your default task here
});

/*
  https://www.npmjs.com/package/gulp-express
  https://github.com/gulpjs/gulp/blob/master/docs/API.md
*/

gulp.task('serve', function () {
  server.run(['bin/www'])
  gulp.watch(['app.js', 'routes/**/*.js'], server.run)
})
