import { allMarkTypes, containerMarkTypes } from '../ComponentMap'

function getValueFromConfig (formItems = [], values = {}, newObj = {}) {
  formItems.forEach((item) => {
    if (allMarkTypes.includes(item.marktype)) {
      // 格式化容器
      if (containerMarkTypes.includes(item.marktype)) {
        if (item.marktype !== 'listContainer') {
          newObj[item.param] = {}
          newObj[item.param] = getValueFromConfig(item.items, values, newObj[item.param])
        } else {
          newObj[item.param] = []
          if (values[item.param] && values[item.param].length > 0) {
            values[item.param].forEach((valueItem, index) => {
              newObj[item.param][index] = {}
              newObj[item.param][index] = getValueFromConfig(item.items, valueItem, newObj[item.param][index])
            })
          }
        }
      } else { // 格式化非容器
        newObj[item.param] = values[item.param]
      }

    }
  })

  return newObj
}

export default getValueFromConfig
