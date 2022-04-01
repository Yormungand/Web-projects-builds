let gulp = require('gulp');
let concat = require('gulp-concat');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cleancss = require('gulp-clean-css');
let browserSync = require('browser-sync').create();
let cssnext = require("postcss-cssnext")
let uglify = require("gulp-uglify")

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
 *  3. Сангаа дуудаж оруулахдаа "absolute path" -ыг зааж өгнө
 * @function
 * */
function css() {
    return gulp.src([
        // 'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/uikit/dist/css/uikit.css',
        // 'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/fullpage.js/dist/fullpage.css',
        // 'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/swiper/swiper-bundle.css',
        'css/*.css',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/uikit/dist/css/uikit.css',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/fullpage.js/dist/fullpage.css',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/swiper/swiper-bundle.css',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/perfect-scrollbar/css/perfect-scrollbar.css',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/atropos/atropos.less',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/globals/global.css',
    ])
        .pipe(cleancss())
        .pipe(concat('root.min.css'))
        .pipe(postcss([], [autoprefixer(), cleancss]))
        .pipe(browserSync.stream())
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
        // 'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/swiper/swiper-bundle.min.js',
        // 'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/uikit/dist/js/uikit.min.js',
        // 'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/fullpage.js/dist/fullpage.extensions.min.js',
        // 'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/fullpage.js/vendors/scrolloverflow.min.js',
        // 'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
        // 'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/axios/dist/axios.min.js',
        // 'C:/Users/jturb/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/gsap/dist/*.js',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/swiper/swiper-bundle.min.js',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/uikit/dist/js/uikit.min.js',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/fullpage.js/dist/fullpage.extensions.min.js',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/fullpage.js/vendors/scrolloverflow.min.js',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/axios/dist/axios.min.js',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/gsap/dist/*.js',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/jquery/dist/jquery.js',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/perfect-scrollbar/dist/perfect-scrollbar.js',
        '/home/turbold/IdeaProjects/Web-projects-builds/src/main/dev/node_modules/atropos/atropos.js',
        'js/*.js',
    ])
        .pipe(uglify())
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