const toString = Object.prototype.toString
const isType = type => {
  return function (obj) {
    return toString.call(obj) == '[object ' + type + ']'
  }
}

export const isArray = Array.isArray || isType('Array')
export const isObject = isType('Object')
export const isFunction = isType('Function')
export const isUndefined = isType('Undefined')
export const isBoolean = isType('Boolean')
export const isNumber = isType('Number')
export const isString = isType('String')
