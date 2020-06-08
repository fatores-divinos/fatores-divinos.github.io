const {src, dest, series, parallel} = require('gulp');
const sass = require('gulp-sass');

function clean(cb) {
  // body omitted
  cb();
}

function bulmaTranspile() {
  return src('app/scss/bulma-style.scss')
    .pipe(sass())
    .pipe(dest('dist/css'));
}

function sassTranspile(cb) {
  // body omitted
  cb();
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function publish(cb) {
  // body omitted
  cb();
}

exports.build = series(
  clean,
  parallel(
    bulmaTranspile,
    sassTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);
