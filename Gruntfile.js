'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stryker: {
            jasmine: {
                files: {
                    libs: [/* List your library files here */],
                    src: ['src/**/*.js'],
                    tests: ['test/**/*.js']
                },
                mutate: {
                    src: ['src/**/*.js']
                },
                options: {
                    testFramework: 'mocha',
                    testRunner: 'mocha'
                },
                plugins: ['stryker-mocha-runner', 'stryker-mocha-framework', 'stryker-jasmine', 'stryker-html-reporter']
            }
        }
    });

    grunt.loadNpmTasks('grunt-stryker');
    grunt.registerTask('default', ['stryker']);
};