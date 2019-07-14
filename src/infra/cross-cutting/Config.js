'use strict'
const OS = require('os')
const {name, version} = require('../../../package.json')
const Resource = require('config')
const Enumerator = require('./Enumerator')

/**
 * @class Config
 */
class Config {
  /**
   * @returns {String}
   * @static
   */
  static get appName () {
    return name
  }

  /**
   * @returns {String}
   * @static
   */
  static get appVersion () {
    return version
  }
  /**
   * @returns {Number}
   * @static
   */
  static get port () {
    return getProperty('app.port', 80)
  }

  /**
   * @returns {String}
   * @static
   */
  static get env () {
    return getProperty('app.env', process.env.NODE_ENV || 'development')
  }

  /**
   * @returns {String}
   * @static
   */
  static get amqp () {
    return getProperty('amqp')
  }

  /**
    * @returns {Boolean|Config.logConsole}
    * @static
    */
  static get logConsole () {
    let log = getProperty('log.console')
    return log
      ? {
        level: getProperty('log.console.level', Enumerator.logLevel.DEBUG)
      }
      : false
  }

  /**
    * @returns {Boolean|Config.logFile}
    * @static
    */
  static get logFile () {
    let log = getProperty('log.file')
    return log
      ? {
        name: getProperty('log.file.name', './logs/log_'),
        dateFormat: getProperty('log.file.dateFormat', 'yyyy-MM-dd'),
        prepend: getProperty('log.file.prepend', false),
        level: getProperty('log.file.level', Enumerator.logLevel.WARNING)
      }
      : false
  }

  /**
    * @returns {Boolean|Config.logFluent}
    * @static
    */
  static get logFluent () {
    var log = getProperty('log.fluentd')
    return log
      ? {
        host: getProperty('log.fluentd.host'),
        port: getProperty('log.fluentd.port'),
        timeout: getProperty('log.fluentd.timeout'),
        levelTag: getProperty('log.fluentd.levelTag', true)
      }
      : false
  }

  /**
   * @returns {Boolean|Config.logGelf}
   * @static
   */
  static get logGelf () {
    let log = getProperty('log.gelf')
    return log
      ? {
        level: getProperty('log.gelf.level', Enumerator.logLevel.INFO),
        hostname: getProperty('log.gelf.hostname', OS.hostname()),
        host: getProperty('log.gelf.host'),
        port: getProperty('log.gelf.port'),
        protocol: getProperty('log.gelf.protocol', 'tcp'),
        silent: getProperty('log.gelf.silent', false),
        handleExceptions: getProperty('log.gelf.handleExceptions', false),
        service: Config.appName,
        release: Config.appVersion,
        environment: Config.env
      }
      : false
  }
}

/**
 * Get config resource property
 * @private
 * @param name {String}
 * @param [fallback=null] {*=}
 * @returns {*}
 */
function getProperty (name, fallback = null) {
  return Resource.has(name) ? Resource.get(name) : fallback
}

module.exports = Config
