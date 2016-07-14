'use strict';

var schemas = require('../schema');
var Ajv = require('ajv');
var assert = require('assert');

describe('schemas', function() {
  it('should be valid', function() {
    var ajv = new Ajv;
    for (var name in schemas) {
      assert.doesNotThrow(function() {
        ajv.addSchema(schemas[name]);
      }, 'schema ' + name);
    }
    for (var name in schemas) {
      assert.doesNotThrow(function() {
        var validate = ajv.compile(schemas[name]);
        assert.equal(typeof validate, 'function');
      }, 'schema ' + name);
    }
  });
});
