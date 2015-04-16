/**
 * umd
 * ===
 *
 * Wraps the library into an universal module definition (AMD + CommonJS + Global).
 *
 * Link: https://github.com/bebraw/grunt-umd
 */

'use strict';

module.exports = function (grunt) {
  return {
    dist: {
      src: '<%= pkg.config.src %>/scripts/chartist-plugin-barlabels.js',
      dest: '<%= pkg.config.dist %>/chartist-plugin-barlabels.js',
      objectToExport: 'Chartist.plugins.ctBarLabels',
      indent: '  '
    }
  };
};
