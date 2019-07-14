'use strict'
/**
 * @class Enumerator
 */
class Enumerator {
  /**
   * @static
   * @returns {Enumerator.dataStatus}
   */
  static get dataStatus () {
    return {
      ACTIVE: 0,
      INACTIVE: 1,
      DELETED: 2
    }
  }
  /**
   * @static
   * @returns {Enumerator.logLevel}
   */
  static get logLevel () {
    return {
      ERROR: 'error',
      WARNING: 'warn',
      INFORMATION: 'info',
      DEBUG: 'debug'
    }
  }

  /**
   * @typedef {Object} Enumerator.taskEvents
   * @property PREPARE {String}
   * @property SCHEDULE {String}
   */
  static get taskEvents () {
    return {
      PREPARE: 'PREPARE',
      SCHEDULE: 'SCHEDULE'
    }
  }

  /**
   * @typedef {Object} Enumerator.managerTasks
   * @property GET_CAMPAIGN {String}
   * @property SYNC_RESULT {String}
   */
  static get managerTasks () {
    return {
      DISTRIBUTE_ATTENDANCE: 'DISTRIBUTE_ATTENDANCE',
      CLIENT_EXPIRED_TIME: 'CLIENT_EXPIRED_TIME',
      MONITORING: 'MONITORING'
    }
  }

  /**
   * @static
   * @returns {Enumerator.dbComparisons}
   */
  static get dbComparisons () {
    return {
      EQUAL: '=',
      NOT_EQUAL: '<>',
      IS: 'IS',
      IS_NOT: 'IS NOT',
      GREATER: '>',
      LESS: '<',
      GREATER_EQUAL: '>=',
      LESS_EQUAL: '<='
    }
  }
}

module.exports = Enumerator
