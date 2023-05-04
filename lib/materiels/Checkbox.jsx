
import React, { useCallback } from 'react'
import { Checkbox as AntdCheckbox } from 'antd'

export default function Checkbox (props) {
  const { disabled, options, value } = props
  const onChange = useCallback(
    (checkedValue) => {
      props.onChange && props.onChange(checkedValue)
    },
    [props.onChange],
  )

  return (
    <AntdCheckbox.Group
      disabled={disabled}
      onChange={onChange}
      options={options}
      value={value}
    />
  )
}
