'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourceMaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack-stream');
const path = require('path');

const options = {
    default_js_file: './src/js/index.js',
    scripts: {
        src: './src/js/**/*.js',
        dest: './dist/js'
    },
    styles: {
        src: './src/styles/**/*.scss',
        dest: './dist/css'
    },
    html: {
        src: './src/html/**/*.html',
        dest: './dist/html'
    }
};

function styles() {
    return gulp.src(options.styles.src)
        .pipe(sourceMaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(options.styles.dest))
        .pipe(browserSync.stream())
}

function scripts() {
    return gulp.src(options.scripts.src)
        .pipe(
            webpack(
                {
                    mode: 'development',
                    devtool: 'source-map',
                    resolve: {
                        modules: [
                            path.resolve(__dirname, 'node_modules'),
                            path.resolve(__dirname, './src/js')
                        ]
                    },
                    output: {
                        filename: 'index.js',
                        path: path.resolve(__dirname, options.scripts.dest)
                    },
                    module: {
                        rules: [
                            {
                                test: /\.(js)$/,
                                exclude: /(node_modules)/,
                                loader: 'babel-loader',
                                query: {
                                    presets: [
                                        [
                                            "@babel/preset-env",
                                            {
                                                useBuiltIns: "usage",
                                                corejs: 3
                                            }
                                        ]
                                    ],
                                }
                            }
                        ]
                    },
                }
            )
        )
        .pipe(gulp.dest(options.scripts.dest))
        .pipe(browserSync.stream())
}

function html() {
    return gulp.src(options.html.src)
        .pipe(gulp.dest(options.html.dest))
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            basedir: './'
        }
    });

    gulp.watch(options.styles.src, styles);
    gulp.watch(options.scripts.src, scripts);
    gulp.watch(options.html.src, html);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series(gulp.parallel(styles, scripts, html)));
gulp.task('dev', gulp.series('build', 'watch'));