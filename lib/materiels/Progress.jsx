import React from 'react'
import { Progress as AntdProgress } from 'antd'

function Progress (props) {
  const { value, ...rest } = props

  return <AntdProgress percent={value} {...rest} />
}
export default Progress
