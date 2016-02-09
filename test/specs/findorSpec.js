describe('Findor test suite', function () {
  'use strict';

  var findor = require('../../findor.js');

  it('Should be a function', function () {

    expect(typeof findor).toBe('function');

  });

  it('Should return path stats', function (done) {
    var params = {
      scope: 'test/specs/',
      target: 'findorSpec.js',
      callback: function (result) {

        expect(result).toBeTruthy();

        done();
      }
    };

    findor(params);

  });
});
