module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: [
            'mocha',
            'sinon-expect'
            // 'requirejs',
            // 'chai',
            // 'chai-as-promised'
        ],
        files: [
            'build/**/xblocks.js',
            'test/**/*.js'
        ],
        exclude: [],
        preprocessors: {
            //'**/*.js': ['borschik']
        },
        reporters: ['progress'], // 'dots', 'progress', 'junit', 'growl', 'coverage'
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'], //Chrome
        captureTimeout: 60000,
        singleRun: false
    });
};