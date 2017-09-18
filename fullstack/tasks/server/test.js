import gulp from "gulp";
import tsc from "gulp-typescript";
var merge = require('merge-stream');
const TS_CONFIG = "./tests/server/tsconfig.json";
import sourcemaps from 'gulp-sourcemaps';
const path = require('path');

var clean = require('gulp-clean');

gulp.task('clean-server-tests', function () {
    return gulp.src('dist/tests/server', { read: false })
        .pipe(clean({ force: true }));
});

gulp.task("server.compile_tsc_tests", ['clean-server-tests'], () => {
    let tsconfigSrc = tsc.createProject(TS_CONFIG);
    return tsconfigSrc.src()
        .pipe(sourcemaps.init())
        .pipe(tsconfigSrc())
        .js
        .pipe(sourcemaps.write({
            sourceRoot: function (file) {
                return path.relative(path.join(file.cwd, file.path), file.base);
            }
        }))
        .pipe(gulp.dest("dist"));
});
