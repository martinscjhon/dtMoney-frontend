import moment from 'moment'

export const dateSmall = (date: Date | string) => {
  return moment(date).format('DD/MM/YYYY')
}
