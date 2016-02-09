/*
*	findor Node.js module.
* (c) 2016, happyCoda.
* ISC License.
* https://github.com/happyCoda/findor
*/

var fs = require('fs'),
    path = require('path');

function findor(params) {
  'use strict';

  var scope = params.scope || '.';

  path.join(scope + 'foo');

  fs.stat(scope, function (err, stats) {
    if (err) {
      throw err;
    }

    if (stats.isDirectory()) {
      fs.readdir(scope, function (err, contents) {
        var contains = contents.some(function (item) {
          return item === params.target;
        });

        params.callback(contains);
      });
    } else {

      throw new Error(scope + ' is not a directory!');
    }

  });
}

module.exports = findor;
