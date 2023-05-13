import React, { useEffect, useState, useMemo } from 'react'
import ComponentMap, { containerMarkTypes } from './ComponentMap'
import { generateObjFromKeys, filterObj } from './utils'
import { Form } from 'antd'

const { Item: FormItem } = Form

function GenerateFormItem (props) {
  const { formItemConfig, isEditor = true, formItemPropsList, hidden, listName } = props
  let { rules, marktype } = formItemConfig
  const DynamicFormItem = ComponentMap.get(formItemConfig.marktype) || null
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    const nextDisabled = isEditor ? formItemConfig.disabled : true
    if (nextDisabled !== undefined) {
      setDisabled(nextDisabled)
    }
  }, [formItemConfig.disabled, isEditor])

  rules = useMemo(() => {
    return rules && rules.length > 0 ? rules.map((item) => {
      if (item.validator && typeof item.validator === 'string') {
        item.validator = new Function('rule', 'value', item.validator)
      }

      return item
    }) : []
  }, [rules])

  const formItemCfg = generateObjFromKeys(formItemConfig, formItemPropsList)
  const comCfg = filterObj(formItemConfig, [...formItemPropsList, 'eventConfig'])

  if (listName !== undefined && marktype === 'listContainer') {
    throw new Error('listContainer类型不支持嵌套listContainer类型')
  }

  if (containerMarkTypes.includes(marktype)) {

    return (
      <FormItem
        {...formItemCfg}
        hidden={hidden}
        rules={rules}
        style={{ marginBottom: 0, }}
      >
        <DynamicFormItem
          {...comCfg}
          isEditor={isEditor}
          formItemPropsList={formItemPropsList}
          disabled={disabled}
          listName={listName}
        />
      </FormItem>
    )
  }

  return DynamicFormItem ? <FormItem
    {...formItemCfg}
    name={listName !== undefined ? [listName, formItemConfig.param] : formItemConfig.param}
    hidden={hidden}
    rules={rules}
  >
    <DynamicFormItem
      {...comCfg}
      disabled={disabled}
    />
  </FormItem> : <FormItem
    {...formItemCfg}
    style={{ color: 'red', }}
  >
    不支持{formItemConfig.marktype}组件类型，请检查配置
  </FormItem>
}

export default GenerateFormItem
