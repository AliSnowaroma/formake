import { catchError } from '../CatchError'

const transformObjectToMap = (arr, key, value) => {
  const targetMap = new Map()
  arr.forEach(item => targetMap.set(item[key], catchError(item[value])))

  return targetMap
}

export default transformObjectToMap
