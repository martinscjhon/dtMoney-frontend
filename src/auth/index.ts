import { delStorage, getStorage } from '../common/storage'

export const getToken = () => getStorage('token')

export const logout = () => {
  delStorage('token')
  window.location.href = '/'
}
