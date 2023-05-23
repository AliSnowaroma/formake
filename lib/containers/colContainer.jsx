import React from 'react'
import { Row, Col } from 'antd'
import GenerateFormItem from '../GenerateFormItem'

export default function ColContainer (props) {
  const { items, isEditor, formItemPropsList, className, columnCol = {}, listName, activeId } = props

  return (
    <Col className={`form-row-container-item ${className}`} {...columnCol}>
      {
        items.map((formItemConfig, index) => {

          return (
            <GenerateFormItem
              key={index}
              isEditor={isEditor}
              formItemConfig={formItemConfig}
              formItemPropsList={formItemPropsList}
              listName={listName}
              isContainer
              activeId={activeId}
            />
          )
        })
      }
    </Col>
  )
}
