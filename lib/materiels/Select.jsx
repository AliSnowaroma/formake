import React from 'react'
import { Select as AntdSelect } from 'antd'

export default function Select (props) {
  const { placeholder, disabled, options, value, onChange, ...rest } = props

  return (
    <AntdSelect
      {...rest}
      placeholder={placeholder}
      disabled={disabled}
      options={options}
      value={value}
      onChange={onChange}
    />
  )
}
