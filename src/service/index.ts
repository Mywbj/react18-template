// service统一出口
import BJRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const bjRequest = new BJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  hooks: {
    requestHook(config) {
      // console.log('config-----------: ', config)
      const token = localStorage.getItem('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export { bjRequest }
