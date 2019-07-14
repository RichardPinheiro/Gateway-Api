'use strict'

const Base = require('./base')

module.exports = class NoneSatisfied extends Base {
  constructor (message, options = {}) {
    super(message, options)
    this.name = 'NoneSatisfied'
  }
}
