'use strict'

const Base = require('./base')

module.exports = class Invalid extends Base {
  constructor (message, options = {}) {
    super(message, options)
    this.name = 'Invalid'
  }
}
