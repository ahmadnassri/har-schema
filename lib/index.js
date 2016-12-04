'use strict'

const afterRequest = require('./afterRequest.json')
const beforeRequest = require('./beforeRequest.json')
const browser = require('./browser.json')
const cache = require('./cache.json')
const content = require('./content.json')
const cookie = require('./cookie.json')
const creator = require('./creator.json')
const entry = require('./entry.json')
const har = require('./har.json')
const header = require('./header.json')
const log = require('./log.json')
const page = require('./page.json')
const pageTimings = require('./pageTimings.json')
const postData = require('./postData.json')
const query = require('./query.json')
const request = require('./request.json')
const response = require('./response.json')
const timings = require('./timings.json')

module.exports = {
  afterRequest,
  beforeRequest,
  browser,
  cache,
  content,
  cookie,
  creator,
  entry,
  har,
  header,
  log,
  page,
  pageTimings,
  postData,
  query,
  request,
  response,
  timings
}
