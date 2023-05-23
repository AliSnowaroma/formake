import React, { useState, useCallback, useEffect } from 'react'
import GenerateFormItem from '../GenerateFormItem'
import { Form, Space, Button } from 'antd'

export default function RowContainer (props) {
  const { items, isEditor, formItemPropsList, className, param, activeId } = props

  return (
    <Form.List name={param} className={`form-array-row-container ${className}`}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(field => (
            <Space key={field.key} align="baseline">
              {
                items.map((formItemConfig, index) => {
                  return (
                    <GenerateFormItem
                      key={index}
                      isEditor={isEditor}
                      formItemConfig={formItemConfig}
                      formItemPropsList={formItemPropsList}
                      listName={field.name}
                      activeId={activeId}
                    />
                  )
                })
              }
              <Button size="small" onClick={() => remove(field.name)}>—</Button>
            </Space>
          ))}

          <Form.Item>
            <Button type="dashed" size="small" onClick={() => add()} block>
              添加
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  )

}
