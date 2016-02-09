module.exports = function (grunt) {

  var time = require('time-grunt');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    notify: {
      options: {
        title: 'Task complete',
        message: 'jshint has finished linting and jasmine finished tests'
      },

      dev: {}
    },

    jshint: {
      options: {
        debug: true,
        eqeqeq: true,
        strict: true,
        unused: true,
        expr: true,
        undef: true,
        devel: true,
        jasmine: true,
        globals: {
          'require': true,
          'module': true
        },

        ignores: [
          'node_modules/**',
          'Gruntfile.js'
        ]
      },

      dev: {
        src: [
          '**/*.js'
        ]
      }
    },

    jasmine_nodejs: {
      options: {
        specNameSuffix: 'spec.js',
        useHelpers: false,
        matchall: false,
        stopOnFailure: false,
        reporters: {
          console: {
            colors: true,
            cleanStack: 1,
            verbosity: 4,
            listStile: 'indent',
            activity: true
          }
        }
      },

      dev: {
        specs: [
          'test/specs/**'
        ]
      }
    },

    watch: {
      options: {},

      dev: {
        files: [
          '**/*.js',
          '!node_modules/**'
        ],

        tasks: ['jshint:dev', 'jasmine_nodejs:dev', 'notify:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-nodejs');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('observe', ['watch:dev']);

  time(grunt);
};
