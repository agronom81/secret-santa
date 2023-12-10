import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const prettifyDate = (date) => {
  return dayjs().to(dayjs(date))
}
