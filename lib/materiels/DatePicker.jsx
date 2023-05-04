import React, { useCallback, useMemo } from 'react'
import { DatePicker as AntdDatePicker } from 'antd'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(weekday)
dayjs.extend(localeData)

function DatePicker (props) {
  const { type = 'date', onChange, value, showTime = false, ...rest } = props
  const { format = 'YYYY-MM-DD hh:mm:ss' } = props
  const onDateChange = useCallback(
    (date) => {
      onChange(date)
    },
    [onChange],
  )
  const transformDateValue = useMemo(() => {
    if (Object.prototype.toString.call(value) !== '[object String]' || !value) {
      return value
    }
    const displayDate = dayjs(value, format)

    return displayDate
  }, [value])

  return (
    <AntdDatePicker
      onChange={onDateChange}
      picker={type}
      showTime={showTime}
      value={transformDateValue}
      format={format}
      {...rest}
    />
  )
}

export default DatePicker
