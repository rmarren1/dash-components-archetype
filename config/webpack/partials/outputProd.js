'use strict';

var path = require('path');
var partial = require('webpack-partial').default;

var ROOT = process.cwd();
var BUILD = path.join(ROOT, 'lib');

// TEMP Change to dynamic library name
var LIBRARY_NAME = 'dash-core-components';

module.exports = function (config) {
    return partial(config, {
        output: {
            library: LIBRARY_NAME,
            libraryTarget: 'this', // Could be 'umd'
            path: BUILD,
            // TODO: Bundle filename should be hashed (#10)
            filename: '[name].js'
        }
    });
};
