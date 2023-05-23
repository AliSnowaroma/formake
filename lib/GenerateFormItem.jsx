import React, { useEffect, useState, useMemo, useCallback } from 'react'
import ComponentMap, { containerMarkTypes } from './ComponentMap'
import { generateObjFromKeys, filterObj } from './utils'
import { Form } from 'antd'

const { Item: FormItem } = Form

function GenerateFormItem (props) {
  const { formItemConfig, isEditor = true, formItemPropsList, hidden, listName, onFormItemClick, activeId } = props
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

  const onInnerFormItemClick = useCallback((e, item) => {
    e.stopPropagation()
    onFormItemClick && onFormItemClick(item)
  }, [])

  const formItemCfg = generateObjFromKeys(formItemConfig, formItemPropsList)
  const comCfg = filterObj(formItemConfig, [...formItemPropsList, 'eventConfig', 'id'])

  if (listName !== undefined && marktype === 'listContainer') {
    throw new Error('listContainer类型不支持嵌套listContainer类型')
  }

  const { id } = formItemConfig
  const dataIdObj = id ? { 'data-id': id } : {}
  const activeClass = (id && activeId && id === activeId) ? 'formake-active-form-item' : ''

  if (containerMarkTypes.includes(marktype)) {

    return (
      <FormItem
        {...formItemCfg}
        {...dataIdObj}
        hidden={hidden}
        rules={rules}
        style={{ marginBottom: 0, }}
        onClick={(e) => { onInnerFormItemClick(e, formItemConfig) }}
        className={`${activeClass}`}
      >
        <DynamicFormItem
          {...comCfg}
          isEditor={isEditor}
          formItemPropsList={formItemPropsList}
          disabled={disabled}
          listName={listName}
          activeId={activeId}
        />
      </FormItem>
    )
  }

  return DynamicFormItem ? <FormItem
    {...formItemCfg}
    name={listName !== undefined ? [listName, formItemConfig.param] : formItemConfig.param}
    hidden={hidden}
    rules={rules}
    {...dataIdObj}
    onClick={(e) => { onInnerFormItemClick(e, formItemConfig) }}
    className={`${activeClass}`}
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
