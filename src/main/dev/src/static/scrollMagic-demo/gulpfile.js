var gulp = require('gulp');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleancss = require('postcss-clean');
var browserSync = require('browser-sync').create();

function refresh() {
    return gulp.src(['css/*.css'])
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
        'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/uikit/dist/css/uikit.css',
        'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/fullpage.js/dist/fullpage.css',
        'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/swiper/swiper-bundle.css',
        'css/*.css',
    ])
        .pipe(concat('root.min.css'))
        .pipe(postcss([autoprefixer(), cleancss()]))
        .pipe(gulp.dest('dist/css/'));
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
        'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/swiper/swiper-bundle.min.js',
        // '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/fullpage.js/dist/fullpage.min.js',
        'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/fullpage.js/dist/fullpage.extensions.min.js',
        'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/fullpage.js/vendors/scrolloverflow.min.js',
        'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
        'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/gsap/dist/*.js',
        'js/*.js',
    ])
        .pipe(concat('root.min.js'))
        .pipe(gulp.dest('dist/js/'))
}

function serve(){
    browserSync.init({
        server: ''
    });
    gulp.watch('*.html').on('change', css, browserSync.reload);
    gulp.watch('./css/*.css').on('change', css, browserSync.reload);
    gulp.watch('./js/*.js').on('change', css, browserSync.reload);
    gulp.watch('./**/**/*').on('change', function () {

        console.log("Watch hit");
        browserSync.reload();
    });
}

gulp.task('default', gulp.series(serve, css, js));
gulp.task('build', gulp.series(css, js));