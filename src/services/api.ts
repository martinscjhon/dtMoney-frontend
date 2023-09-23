import axios from 'axios'
import { Environment } from '../config'
import { getToken, logout } from '../auth'

export const openApi = axios.create({
  baseURL: Environment.Api,
})

export const privateApi = axios.create({
  baseURL: Environment.Api,
})

privateApi.defaults.headers.common['Content-Type'] = 'application/json'
privateApi.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

privateApi.interceptors.request.use(
  (config) => {
    const token = getToken()

    config.headers.Authorization = 'Bearer' + token
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

privateApi.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    if (error.response?.status === 401) logout()
  },
)
