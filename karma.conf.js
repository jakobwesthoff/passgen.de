/* global module */
module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: './',

        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            // Requirejs configuration and test bootstrapping
            // Define before non included files to prioritize inclusion
            "src/require.config.js",
            "specs/environment/require.config.js",
            "specs/environment/init.js",

            // Html fixtures
            "fixtures/**/*.html",

            // All application and library source files
            {pattern: "src/**/*.js", included: false, served: true},
            
            // All Test specs
            {pattern: "specs/**/*.spec.js", included: false, served: true}
        ],

        // list of files to exclude
        exclude: [],

        // Preprocess certain files, like HTML ;)
        preprocessors: {
            'fixtures/**/*.html': ["html2js"]
        },

        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots', 'progress'
        // CLI --reporters progress
        reporters: ['progress', 'junit'],

        junitReporter: {
            // will be resolved to basePath (in the same way as files/exclude patterns)
            outputFile: 'logs/karma/test-results.xml'
        },

        // web server port
        // CLI --port 9876
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // CLI --browsers Chrome,Firefox,Safari
        //
        // Started browsers are configured using Gruntfile.js
        //
        browsers: [],

        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 5000,

        // Auto run tests on start (when browsers are captured) and exit
        // CLI --single-run --no-single-run
        singleRun: false,

        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500,

        // Load all necessary karma plugins
        // Those are installed using npm (package.json)
        plugins: [
            'karma-requirejs',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-html2js-preprocessor',
            'karma-spec-reporter'
        ]
    });
};
