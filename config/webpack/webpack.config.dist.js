'use strict';

var compose = require('ramda').compose;

var babel = require('./partials/babel');
var defineEnv = require('./partials/defineEnv');
var entryProd = require('./partials/entryProd')
var outputProd = require('./partials/outputProd');
var sourceMapDev = require('./partials/sourceMapDev');
var baseConfig = require('./webpack.config');

module.exports = compose(
    babel,
    defineEnv,
    entryProd,
    outputProd,
    sourceMapDev
)(baseConfig);
