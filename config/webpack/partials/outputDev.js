'use strict';

var path = require('path');
var partial = require('webpack-partial').default;

var ROOT = process.cwd();
var BUILD_PATH = path.join(ROOT, 'lib');

// TEMP Change to dynamic library name
var LIBRARY_NAME = 'dash_core_components';

module.exports = function (config) {
    return partial(config, {
        output: {
            library: LIBRARY_NAME,
            libraryTarget: 'this', // Could be 'umd'
            path: BUILD_PATH,
            filename: '[name].js'
        }
    });
};
