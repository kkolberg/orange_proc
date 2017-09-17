import gulp from "gulp";
import tsc from "gulp-typescript";
var merge = require('merge-stream');
const TS_CONFIG = "./tsconfig.json";
import sourcemaps from 'gulp-sourcemaps';
const path = require('path');

gulp.task("server.compile_tsc", () => {
  let tsconfigSrc = tsc.createProject(TS_CONFIG);

  let server = tsconfigSrc.src()
    .pipe(sourcemaps.init())
    .pipe(tsconfigSrc())
    .js
    .pipe(sourcemaps.write({
      sourceRoot: function (file) {
        return path.relative(path.join(file.cwd, file.path), file.base);
      }
    }))
    .pipe(gulp.dest("./dist/server"));

  let constants = gulp.src('server/constants/*')
    .pipe(gulp.dest('dist/server/constants'));

  return merge(server, constants);
});
