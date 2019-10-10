const { paddingNumber } = require('./util') 
const colors = require('colors')

const logger = function () {
  const COLOR_SCHEME = {
    DEBUG: colors.white,
    INFO: colors.blue,
    SUCCESS: colors.green,
    WARNING: colors.yellow,
    DANGER: colors.red,
    ERROR: colors.red,
    CRITICAL: colors.magenta
  }

  const timestamp = () => {
    const d = new Date()
    const yyyy = d.getFullYear()
    const MM = paddingNumber(d.getMonth() + 1, 2)
    const dd = paddingNumber(d.getDate(), 2)
    const hh = paddingNumber(d.getHours(), 2)
    const mm = paddingNumber(d.getMinutes(), 2)
    const ss = paddingNumber(d.getSeconds(), 2)
    const ms = paddingNumber(d.getMilliseconds(), 3)
  
    return `[${yyyy}.${MM}.${dd} ${hh}:${mm}:${ss}.${ms}]`.gray
  }

  const printLog = (mode, ...args) => {
    console.log(timestamp(), COLOR_SCHEME[mode](args.join(' ')))
  }

  return {
    debug (...args) {
      printLog('DEBUG', ...args)
    },
    info (...args) {
      printLog('INFO', ...args)
    },
    success (...args) {
      printLog('SUCCESS', ...args)
    },
    warning (...args) {
      printLog('WARNING', ...args)
    },
    danger (...args) {
      printLog('DANGER', ...args)
    },
    error (...args) {
      printLog('ERROR', ...args)
    },
    critical (...args) {
      printLog('CRITICAL', ...args)
    }
  }
}

exports.log = new logger()
