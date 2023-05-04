import React from 'react'
import { Radio as AntdRadio } from 'antd'

export default function Radio (props) {
  const { placeholder, disabled, options = [], optionType, ...rest } = props

  return (
    <AntdRadio.Group
      {...rest}
      disabled={disabled}
      options={options}
      optionType={optionType}
    />
  )
}
