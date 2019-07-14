'use strict'

const Base = require('./base')

module.exports = class NotFound extends Base {
  constructor (message, options = {}) {
    super(message, options)
    this.name = 'NotFound'
  }
}
