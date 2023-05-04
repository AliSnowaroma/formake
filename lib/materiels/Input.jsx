import React from 'react'
import { Input as AntdInput } from 'antd'

export default function Input (props) {
  const { placeholder, disabled, type, ...rest } = props

  return (
    <AntdInput
      {...rest}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
    />
  )
}
