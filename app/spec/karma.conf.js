module.exports = function(config) {
    'use strict';

    config.set({
        autoWatch: true,

        basePath: '../',

        frameworks: ['jasmine', 'browserify'],

        files: [
            'spec/**/*.js'
        ],

        preprocessors: {
            'spec/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [require('stringify')()]
        },

        port: 8080,

        browsers: ['Chrome'],

        plugins: [
            "karma-chrome-launcher",
            'karma-jasmine',
            'karma-bro'
        ],

        // if false, makes karma test runner watch your tests and rerun them when changes are made.
        singleRun: true,

        colors: true,

        logLevel: config.LOG_INFO
    });
};
