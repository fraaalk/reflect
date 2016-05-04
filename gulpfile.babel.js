'use strict';

import path from 'path';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSyncLib from 'browser-sync';
import pjson from './package.json';
import minimist from 'minimist';
import wrench from 'wrench';
import svgSprite from 'gulp-svg-sprite';

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
const plugins = gulpLoadPlugins();
// Create karma server
const KarmaServer = require('karma').Server;

let config = pjson.config;
let args = minimist(process.argv.slice(2));
let dirs = config.directories;
let taskTarget = args.production ? dirs.destination : dirs.temporary;
let spriteConfig = {
    "dest": "",
    "log": "info",
    "mode": {
        "symbol": {
            "dest": "_images",
            "inline": true
        }
    }
};

// Create a new browserSync instance
let browserSync = browserSyncLib.create();

// This will grab all js in the `gulp` directory
// in order to load all gulp tasks
wrench.readdirSyncRecursive('./gulp').filter((file) => {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(gulp, plugins, args, config, taskTarget, browserSync);
});

// Default task
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

// Generates Inline SVG
gulp.task('svgSprite', () => {
  gulp.src('src/_icons/*.svg')
    .pipe(svgSprite(spriteConfig))
    .pipe(gulp.dest('src/'));
});

// Build production-ready code
gulp.task('build', [
  'svgSprite',
  'copy',
  'imagemin',
  'jade',
  'sass',
  'browserify'
]);

// Server tasks with watch
gulp.task('serve', [
  'svgSprite',
  'imagemin',
  'copy',
  'jade',
  'sass',
  'browserify',
  'browserSync',
  'watch'
]);

// Testing
gulp.task('test', ['eslint'], (done) => {
  new KarmaServer({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: !args.watch,
    autoWatch: args.watch
  }, done).start();
});
