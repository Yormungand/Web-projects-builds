var gulp = require('gulp');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleancss = require('postcss-clean');
var browserSync = require('browser-sync').create();

function refresh() {
    return gulp.src(['css/template.css'])
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
}


/**
 * @function css()
 * @name css
 *  1. Idea project үүсэн хавтасны хажууд package.json үүсгэнэ
 *  2. npm install хийнэ.
 *  3.Сангаа дуудаж оруулахдаа "absolute path" -ыг зааж өгнө
 * @function
 * */
function css() {
    return gulp.src([
        '/Users/eku/IdeaProjects/Web projects builds/src/main/dev/node_modules/uikit/dist/css/uikit.min.css',
        '/Users/eku/IdeaProjects/Web projects builds/src/main/dev/node_modules/swiper/swiper-bundle.min.css',
        // '/Users/eku/IdeaProjects/Web projects builds/src/main/dev/node_modules/@fortawesome/fontawesome-free/css/all.css',
        // 'css/*.css',
    ])
        .pipe(concat('root.min.css'))
        .pipe(postcss([autoprefixer(), cleancss()]))
        .pipe(gulp.dest('css/'));
}


/**
 * @function js()
 * @name js
 *  1. Idea project үүсэн хавтасны хажууд package.json үүсгэнэ
 *  2. npm install хийнэ.
 *  3.Сангаа дуудаж оруулахдаа "absolute path" -ыг зааж өгнө
 * @function
 * */
function js() {
    return gulp.src([
        '/Users/eku/IdeaProjects/Web projects builds/src/main/dev/node_modules/jquery/dist/jquery.min.js',
        '/Users/eku/IdeaProjects/Web projects builds/src/main/dev/node_modules/swiper/swiper-bundle.min.js',
        '/Users/eku/IdeaProjects/Web projects builds/src/main/dev/node_modules/uikit/dist/js/uikit.min.js',
        'js/*.js',
    ])
        .pipe(concat('root.min.js'))
        .pipe(gulp.dest('js/'))
}

function serve(){
    browserSync.init({
        server: ''
    });
    gulp.watch('./*.html').on('change', css, browserSync.reload);
    gulp.watch('./css/*.css').on('change', css, browserSync.reload);
}

gulp.task('default', gulp.series(serve, css, js));
gulp.task('build', gulp.series(css, js));
