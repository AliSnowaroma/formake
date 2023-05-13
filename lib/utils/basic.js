
export function getTypeof (obj) {
  return Object.prototype.toString.call(obj)
}

export function isObject (args) {
  return toString.call(args) === '[object Object]'
}

export function isArray (args) {
  return toString.call(args) === '[object Array]'
}

export function isUndefined (args) {
  return toString.call(args) === '[object Undefined]'
}

export function isNull (args) {
  return toString.call(args) === '[object Null]'
}

export function isEmptyObject (args) {
  if (!isObject(args)) {
    return false
  }

  for (const prop in args) {
    if (!isUndefined(args[prop])) {
      return false
    }
  }

  return true
}

export function dc (target) {
  if (isArray(target) || isObject(target)) {
    const obj = Array.isArray(target) ? [] : {}
    for (const key in target) {
      obj[key] = dc(target[key])
    }

    return obj
  }

  return target

}

export const isEqual = (obj1, obj2) => {

  if (getTypeof(obj1) !== getTypeof(obj2)) {
    return false
  }

  // 至少有一个不是数组，也不是对象，直接判断值
  const o1 = obj1 instanceof Object
  const o2 = obj2 instanceof Object
  if (!o1 || !o2) {
    return obj1 === obj2
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }
  let result = true
  for (const key in obj1) {
    if (!isEqual(obj1[key], obj2[key])) {
      result = false

      return false
    }
  }

  return result
}

export function filterObj (obj, keys) {
  if (!obj || isEmptyObject(obj)) {
    return obj
  }
  const newObj = {}
  Object.keys(obj).forEach((key) => {
    if (!keys.includes(key)) {
      newObj[key] = obj[key]
    }
  })

  return newObj
}

export function generateObjFromKeys (obj, keys) {
  if (!obj || isEmptyObject(obj)) {
    return obj
  }
  const newObj = {}
  Object.keys(obj).forEach((key) => {
    if (keys.includes(key) && obj[key]) {
      newObj[key] = obj[key]
    }
  })

  return newObj
}
