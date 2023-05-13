import { isObject, isArray } from './basic'

export default function flatFormValues (values, result = {}) {
  Object.keys(values).forEach((key) => {
    if (isArray(values[key])) {
      result[key] = []
      if (values[key].length > 0) {
        values[key].forEach((item, index) => {
          if (isObject(item)) {
            result[key][index] = {}
            flatFormValues(item, result[key][index])
          }
        })
      }
    } else if (isObject(values[key])) {
      flatFormValues(values[key], result)
    } else {
      result[key] = values[key]
    }
  })

  return result

}
