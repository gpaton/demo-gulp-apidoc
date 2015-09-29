'use strict';

var gulp   = require('gulp');
var apidoc = require('gulp-apidoc');

gulp.task('apidoc', function() {
    apidoc.exec({
        src: './src',
        dest: './apidoc',
        includeFilters: [ ".*\\.php$" ]
    });
});
