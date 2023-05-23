import React from 'react'

import GenerateFormItem from './GenerateFormItem'

function GenerateFormItems (props) {
  const { isEditor, formData, formItemPropsList, onFormItemClick, activeId } = props

  return formData.map((formItemConfig, index) => {
    return (
      <GenerateFormItem
        formItemPropsList={formItemPropsList}
        formItemConfig={formItemConfig}
        key={index}
        isEditor={isEditor}
        onFormItemClick={onFormItemClick}
        activeId={activeId}
      />
    )
  })
}

export default GenerateFormItems
