/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function isType(type) {
  return function (arg) {
    return Object.prototype.toString.call(arg) == `[object ${type}]`
  }
}

export function isDef(arg) {
  return arg !== undefined && arg !== null
}

export function isUndefOrNull(arg) {
  return arg === undefined || arg === null
}

export function isUndf(arg) {
  return !isDef(arg)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String || isType('String')) {
    return true
  }
  return false
}
export function isNumber(arg) {
  return typeof arg == 'number' || isType('Number')
}
export function isBoolean(arg) {
  return typeof arg == 'boolean' || isType('Boolean')
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return isType('Array')
  }
  return Array.isArray(arg)
}

export function isObject(arg) {
  if (arg == null) return false
  return isType('Object')
}
