import React from 'react'
import { Switch as AntdSwitch } from 'antd'

export default function Switch (props) {
  const { disabled, value, ...rest } = props

  return (
    <AntdSwitch
      {...rest}
      checked={value}
      disabled={disabled}
    />
  )
}
