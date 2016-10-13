// Karma configuration
// Generated on Thu Oct 13 2016 14:14:37 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        '*.js',
      'js/libs/angular.js',
      'js/libs/angular-mocks.js',
      'js/libs/jquery.js',
      'js/libs/*.js',
      'Modules/DatabaseFactory/*.js',
      'Modules/LandingPage/*.js',
      'Modules/MainModule/*.js',
      'Modules/Menu/*.js',
      'Modules/WeatherData/Metric/*.js',
      'Modules/WeatherModule/*.js',
      'bower_components/angular-ui-notification/dist/angular-ui-notification.js',
      'Modules/WeatherModule/CurrentLocation/*.js',
      'Modules/WeatherModule/InsertLocation/*.js',
      'Modules/WeatherModule/spec/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,




    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
