'use strict'

const cache = require('./cache.json')
const cacheEntry = require('./cacheEntry.json')
const content = require('./content.json')
const cookie = require('./cookie.json')
const creator = require('./creator.json')
const entry = require('./entry.json')
const har = require('./har.json')
const index = require('./index.js')
const log = require('./log.json')
const page = require('./page.json')
const pageTimings = require('./pageTimings.json')
const postData = require('./postData.json')
const record = require('./record.json')
const request = require('./request.json')
const response = require('./response.json')
const timings = require('./timings.json')

module.exports = {
  cache,
  cacheEntry,
  content,
  cookie,
  creator,
  entry,
  har,
  index,
  log,
  page,
  pageTimings,
  postData,
  record,
  request,
  response,
  timings
}
