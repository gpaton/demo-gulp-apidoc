'use strict';

var gulp   = require('gulp');
var apidoc = require('gulp-apidoc');

gulp.task('apidoc', function(done) {
    apidoc({
        src: './src',
        dest: './apidoc',
        includeFilters: [ ".*\\.php$" ]
    }, done);
});
