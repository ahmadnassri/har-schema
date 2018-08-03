'use strict'

const schemas = require('../lib')
const Ajv = require('ajv')
const tap = require('tap')

tap.test('har-schema', (assert) => {
  const ajv = new Ajv()
  const metaSchema = require('ajv/lib/refs/json-schema-draft-06.json')
  metaSchema.additionalProperties = false
  ajv.addMetaSchema(metaSchema)
  const keys = Object.keys(schemas)

  assert.plan(keys.length * 2)

  keys.forEach((key) => assert.doesNotThrow(() => ajv.addSchema(schemas[key])))
  keys.forEach((key) => assert.type(ajv.compile(schemas[key]), 'function'))
})
