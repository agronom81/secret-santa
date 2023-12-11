import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const prettifyDate = (date) => {
  return dayjs().to(dayjs(date))
}

export const formatDateFromDbForInput = (dateString) => {
  if (!dateString) {
    return ''
  }

  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
