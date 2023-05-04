import React from 'react'
import { Input as AntdInput } from 'antd'

export default function Textarea (props) {
  const { placeholder, disabled, value, onChange, ...rest } = props

  return (
    <AntdInput.TextArea
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
}
