import { detLocalstorage, getLocalstorage } from '../common/storage'

export const getToken = () => getLocalstorage('token')

export const logout = () => {
  detLocalstorage('token')
  window.location.href = '/'
}
