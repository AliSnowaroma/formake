import React from 'react'
import { InputNumber as AntdInputNumber } from 'antd'

export default function InputNumber (props) {
  const { max, min, value, onChange, ...rest } = props

  return <AntdInputNumber value={value} {...rest} onChange={onChange} />
}
