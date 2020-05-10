const gulp = require('gulp');

gulp.task('webpack', (done) => {
    const webpack = require('webpack-stream');
    const config = require('./webpack.config.js');
    gulp.src('./js/**/*.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('../www/js'));
    done();
});

gulp.task('less', (done) => {
    const less = require('gulp-less');
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('../www/css'));
    done();
});

gulp.task('default', gulp.series(gulp.parallel('webpack', 'less')), (done) => {
    done();
});
