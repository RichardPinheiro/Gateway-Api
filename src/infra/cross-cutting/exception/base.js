'use strict'
const properties = Symbol('property')
const { logger } = require('../../../infra/cross-cutting/log')

module.exports = class Base extends Error {
  constructor (message, options = {}) {
    super(message)
    this[properties] = {}
    this.parseOptions(options)
    logger.warn(`   ${message} ${JSON.stringify(this[properties])}`)
  }

  parseOptions (options) {
    Object.keys(options).forEach(key => {
      this[properties][key] = options[key]
    })
  }

  getProperty (key) {
    return this[properties][key]
  }

  getAllProperties () {
    return this[properties]
  }
}
