function getFormat (type, format, showTime) {
  if (format) {
    return format
  }

  switch (type) {
    case 'time':
      return 'hh:mm:ss'
    case 'date':
      return showTime ? 'YYYY-MM-DD hh:mm:ss' : 'YYYY-MM-DD'
    case 'month':
      return 'YYYY-MM'
    case 'week':
      return 'YYYY-wo'
    case 'year':
      return 'YYYY'
    case 'quarter':
      return 'YYYY-QQ'
      break
  }
}

export default getFormat
