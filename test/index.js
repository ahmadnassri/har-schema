'use strict'

const schemas = require('../lib')
const Ajv = require('ajv')
const tap = require('tap')

tap.test('har-schema', (assert) => {
  const ajv = new Ajv()
  const keys = Object.keys(schemas)

  assert.plan(keys.length * 2)

  keys.forEach((key) => assert.doesNotThrow(() => ajv.addSchema(schemas[key])))
  keys.forEach((key) => assert.type(ajv.compile(schemas[key]), 'function'))
})
