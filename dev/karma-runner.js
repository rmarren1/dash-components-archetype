'use strict';
/**
 * Test setup for client-side tests.
 */
var chai = require('chai');
var sinonChai = require('sinon-chai');

module.exports = {
    /*
     * Chai / Sinon / Mocha / Globals configuration.
     */
    setupEnvironment: function () {
        // Exports
        window.expect = chai.expect;

        // Plugins
        chai.use(sinonChai);

        // Mocha (part of static include).
        window.mocha.setup({
          ui: 'bdd',
          bail: false
        });

        // Replace console.error implementation to fail tests on e.g.
        // missing required props
        if (window.console && window.console.error) {
          window.console.error = function (err) {
            throw new Error(err);
          }
        }
    },

    startKarma: function () {
        // Only start mocha in browser.
        if (!window.__karma__) {
          window.mocha.run();
        }
    }
}
