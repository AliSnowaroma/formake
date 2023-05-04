import React, { useCallback, useMemo } from 'react'
import { DatePicker as AntdDatePicker } from 'antd'
import { getFormat } from '../utils'

const { RangePicker: AntdRangePicker } = AntdDatePicker

export default function RangePicker (props) {
  const { placeholder, disabled, type, value, onChange, format, showTime, ...rest } = props

  const onRangeDateChange = useCallback(
    (dateArr) => {
      onChange(dateArr)
    },
    [onChange],
  )

  const transformRangeDateValue = useMemo(() => {
    return value

  }, [value])

  return (
    <AntdRangePicker
      {...rest}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onRangeDateChange}
      picker={type}
      value={transformRangeDateValue}
      showTime={showTime}
    />
  )
}
