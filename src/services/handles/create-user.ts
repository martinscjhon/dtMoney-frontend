import { ICreateAccount } from '../../interfaces/services'
import { openApi, privateApi } from '../api'
import { endpoint } from '../endpoints'

const info = async () => {
  try {
    const url = endpoint.user.create
    const response = await privateApi.get(url)
    return response
  } catch (error: any) {
    return error
  }
}

const insert = async (payload: ICreateAccount) => {
  try {
    const url = endpoint.user.create
    const { data } = await openApi.post(url, payload)
    return data
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
}

export const handleUser = {
  insert,
  info,
}
