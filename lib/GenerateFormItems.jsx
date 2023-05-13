import React from 'react'

import GenerateFormItem from './GenerateFormItem'

function GenerateFormItems (props) {
  const { isEditor, formData, formItemPropsList } = props

  return formData.map((formItemConfig, index) => {
    return (
      <GenerateFormItem
        formItemPropsList={formItemPropsList}
        formItemConfig={formItemConfig}
        key={index}
        isEditor={isEditor}
      />
    )
  })
}

export default GenerateFormItems
