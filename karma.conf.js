const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'testSetup.js'
    ],
    exclude: [],
    preprocessors: {
      'testSetup.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    // singleRun: true,
    concurrency: Infinity,
    webpack: {
      ...webpackConfig
    },
    webpackServer: {
      noInfo: true
    }
  })
};
