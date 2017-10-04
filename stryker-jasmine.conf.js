module.exports = function(config){
    config.set({
        files: [
            // Add your files here, this is just an example:
            { pattern: 'src/jasmune/*.js', mutated: true, included: false},
            'test/**/*.js'
        ],
        testRunner: 'jasmine',
        testFramework: 'mocha',
        coverageAnalysis: 'perTest',
        reporter: ['clear-text', 'progress', 'dots', 'html'],
        plugins: ['stryker-mocha-runner', 'stryker-mocha-framework', 'stryker-jasmine', 'stryker-html-reporter']
    });
}