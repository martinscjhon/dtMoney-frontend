import { ILogin } from '../../interfaces/services'
import { openApi } from '../api'
import { endpoint } from '../endpoints'

const send = async (payload: ILogin) => {
  try {
    const url = endpoint.login.authentication
    const { data } = await openApi.post(url, payload)
    return data.response.body
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
}

export const handleAuth = {
  send,
}
