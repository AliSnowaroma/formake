import React from 'react'
import { Rate as AntdRate } from 'antd'

export default function Rate (props) {
  const { disabled, ...rest } = props

  return (
    <AntdRate
      {...rest}
      disabled={disabled}
    />
  )
}
