import React, { useEffect, useState, useMemo } from 'react'
import ComponentMap from './ComponentMap'
import { segmentationArray } from './utils'
import { Form, Row, Col } from 'antd'

const { Item: FormItem } = Form

function GenerateFormItem (props) {
  const { formItemConfig, isEditor = true, column } = props
  let { rules } = formItemConfig
  const DynamicFormItem = ComponentMap.get(formItemConfig.marktype) || null
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    const disabled = isEditor ? formItemConfig.disabled : true
    setDisabled(disabled)
  }, [formItemConfig.disabled, isEditor])

  rules = useMemo(() => {
    return rules && rules.length > 0 ? rules.map((item) => {
      if (item.validator && typeof item.validator === 'string') {
        item.validator = new Function('rule', 'value', item.validator)
      }

      return item
    }) : []
  }, [rules])

  const width = useMemo(() => {
    return `${1 / column * 100}%`
  }, [column])

  return DynamicFormItem ? <Col style={{ width: width, }} className="form-item-cell">
    <FormItem
      label={formItemConfig.label}
      name={formItemConfig.param}
      rules={rules}
    >
      <DynamicFormItem
        {...formItemConfig}
        disabled={disabled}
      />
    </FormItem>
  </Col> : <FormItem
    label={formItemConfig.label}
    name={formItemConfig.param}
    style={{ color: 'red', }}
  >
    不支持{formItemConfig.marktype}组件类型，请检查配置
  </FormItem>
}

function GenerateFormItems (props) {
  const { isEditor, formData, column = 1 } = props

  return segmentationArray(formData, column).map((rowData, rowIndex) => {
    return (
      <Row className="form-item-row" key={rowIndex} gutter={[1, 0]} justify="space-between">
        {
          rowData.map((formItemConfig, index) => {
            return <GenerateFormItem formItemConfig={formItemConfig} key={index} isEditor={isEditor} column={column} />
          })
        }
      </Row>
    )
  })
}

export default GenerateFormItems
