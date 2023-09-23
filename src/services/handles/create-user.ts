import { ICreateAccount } from '../../interfaces/services'
import { openApi } from '../api'
import { endpoint } from '../endpoints'

const insert = async (payload: ICreateAccount) => {
  try {
    const url = endpoint.user.create
    const { data } = await openApi.post(url, payload)
    return data
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const handleUser = {
  insert,
}
