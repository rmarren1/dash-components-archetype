'use strict';
/*
 * Karma Configuration: 'debug' version. Launches Chrome for devtools debugging.
 */

module.exports = function (config) {
    /* eslint-disable global-require */
    require('./karma.conf')(config);
    config.set({
        browsers: ['Chrome'],
        reporters: ['spec']
    });
};
