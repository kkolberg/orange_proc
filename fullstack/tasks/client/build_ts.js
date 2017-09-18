import gulp from "gulp";
import tsc from "gulp-typescript";
import { base, tasks } from "./const";

const TS_CONFIG = base.ROOT + "tsconfig.json";
var clean = require('gulp-clean');

gulp.task('clean-scripts', function () {
  return gulp.src('dist/client', { read: false })
    .pipe(clean());
});

gulp.task(tasks.CLIENT_BUILD_TS, ['clean-scripts'], () => {
  let _tsProject = tsc.createProject(TS_CONFIG);

  return _tsProject.src()
    .pipe(_tsProject())
    .js
    .pipe(gulp.dest("."));
});
