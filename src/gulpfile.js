const gulp = require('gulp');

gulp.task('webpack', (done) => {
    done();
});

gulp.task('less', (done) => {
    done();
});

gulp.task('default', gulp.series(gulp.parallel('webpack', 'less')), (done) => {
    done();
});
