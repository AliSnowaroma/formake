import { useMemo } from 'react'
import EventCenter from '../utils/eventCenter'
import { Form } from 'antd'
import getValueFromConfig from '../utils/getValueFromConfig'
import flatFormValues from '../utils/flatFormValues'

function useWatchForm () {
  const [formInstance] = Form.useForm()
  const newForm = useMemo(() => {
    const eventCenter = new EventCenter()
    const store = new Map()
    const composeForm = new Proxy(formInstance, {
      get (target, propKey, receiver) {

        if (propKey === 'setFieldValue') {
          const fn = Reflect.get(target, propKey, receiver)

          return function (field, value) {
            fn(field, value) // form.getFieldsValue()已经可以获取到值
            eventCenter.emit({
              [field]: value,
            })
          }
        }

        if (propKey === 'setFieldsValue') {

          const fn = Reflect.get(target, propKey, receiver)

          return function (values) {
            fn(values) // form.getFieldsValue()已经可以获取到值
            eventCenter.emit(values)
          }
        }

        if (propKey === 'setFormatFieldsValue') {

          return function (values = {}) {
            const flatValue = flatFormValues(values)
            composeForm.setFieldsValue(flatValue)
          }
        }

        if (propKey === 'getFormatFieldsValue') {

          return () => {
            const data = composeForm.getFieldsValue()
            const activeFormConfig = composeForm.store.get('activeFormConfig')
            if (activeFormConfig) {
              const formatData = getValueFromConfig(activeFormConfig, data)

              return formatData
            }

            return data
          }

        }

        return Reflect.get(target, propKey, receiver)
      },
    })

    // 将事件中心赋值给form实例 组合成抽象的form实例导出 用户是无感知
    composeForm.formInstanceEventCenter = eventCenter
    composeForm.isWatchForm = true
    composeForm.store = store

    return composeForm
  }, [formInstance])

  return [newForm]
}

export default useWatchForm
