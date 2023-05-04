import React, { useCallback, useMemo } from 'react'
import { TimePicker as AntdTimePicker } from 'antd'
import dayjs from 'dayjs'

function TimePicker (props) {
  const { type, onChange, value, ...rest } = props
  const { format = 'HH:mm:ss' } = props
  const onTimeChange = useCallback(
    (time) => {
      onChange(time)
    },
    [onChange],
  )
  const transformTimeValue = useMemo(() => {
    if (Object.prototype.toString.call(value) !== '[object String]' || !value) {
      return value
    }
    const ymd = dayjs().format('YYYY-MM-DD')
    const displayTime = dayjs(`${ymd} ${value}`)

    return displayTime
  }, [value])

  return (
    <AntdTimePicker
      onChange={onTimeChange}
      value={transformTimeValue}
      format={format}
      {...rest}
    />
  )
}

export default TimePicker
