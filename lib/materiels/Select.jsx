import React from 'react'
import { Select as AntdSelect } from 'antd'

export default function Select (props) {
  const { placeholder, disabled, options, value, onChange } = props

  return (
    <AntdSelect
      placeholder={placeholder}
      disabled={disabled}
      options={options}
      value={value}
      onChange={onChange}
    />
  )
}
