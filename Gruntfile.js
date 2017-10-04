'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stryker: {
            jasmine: {
                files: {
                    libs: [/* List your library files here */],
                    src: ['src/**/*.js'],
                    tests: ['test/jasmine/*.js']
                },
                mutate: {
                    src: ['src/**/*.js']
                },
                options: {
                    testFramework: 'jasmine',
                    testRunner: 'mocha'
                },
                plugins: ['stryker-mocha-runner', 'stryker-mocha-framework', 'stryker-jasmine', 'stryker-html-reporter']
            }
        },
        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: 'spec'
            },
            all: ['spec/']
        }
    });

    grunt.loadNpmTasks('grunt-stryker');
    grunt.loadNpmTasks('grunt-jasmine-node');

    grunt.registerTask('default', ['stryker']);
    grunt.registerTask('jasmine-test', 'jasmine_node');
};