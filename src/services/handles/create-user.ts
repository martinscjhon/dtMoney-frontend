import { ICreateAccount } from '../../interfaces/services'
import { openApi, privateApi } from '../api'
import { endpoint } from '../endpoints'

const info = async () => {
  try {
    const url = endpoint.user.create
    const { data } = await privateApi.get(url)
    return data.response.body
  } catch (error: any) {
    throw new Error(error.response.data.message)
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
