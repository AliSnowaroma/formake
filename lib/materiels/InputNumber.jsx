import React from 'react'
import { InputNumber as AntdInputNumber } from 'antd'

export default function InputNumber (props) {
  const { max, min, value, onChange, ...rest } = props

  const innerChange = (val) => {
    onChange(val)
  }

  return <AntdInputNumber value={value} {...rest} max={max} min={min} onChange={innerChange} />
}
