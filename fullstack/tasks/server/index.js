import gulp from 'gulp';
var gulpSequence = require('gulp-sequence')

gulp.task('server.compile_server', gulpSequence('server.compile_tsc', 'server.compile_tsc_tests'));
