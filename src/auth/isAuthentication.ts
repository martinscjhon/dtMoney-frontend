import { getLocalstorage } from '../common/storage'

export const handleIsAuthentication = (): boolean => {
  const token = getLocalstorage('token')

  if (token) {
    return true
  } else {
    return false
  }
}
