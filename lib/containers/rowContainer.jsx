import React from 'react'
import { Row, Col } from 'antd'
import GenerateFormItem from '../GenerateFormItem'

export default function RowContainer (props) {
  const { items, isEditor, formItemPropsList, column = 1, className, listName } = props
  const rowItemColSpan = 24 / column

  return (
    <Row className={`form-row-container-item ${className}`} gutter={[1, 0]}>

      {
        items.map((formItemConfig, index) => {
          const { rowCol = { span: rowItemColSpan }, ...rest } = formItemConfig

          return (
            <Col className="form-row-container-item-col" key={index} {...rowCol}>
              <GenerateFormItem
                isEditor={isEditor}
                formItemConfig={rest}
                formItemPropsList={formItemPropsList}
                listName={listName}
              />
            </Col>
          )
        })
      }
    </Row>
  )
}
