'use strict';

var fs          = require('fs');
var onlyScripts = require('./util/script-filter');
var tasks       = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);
var gulp        = require('gulp');

gulp.task('default', ['apidoc']);

tasks.forEach(function(task) {
	require('./tasks/' + task);
});

