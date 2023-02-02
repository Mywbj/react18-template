import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

interface BJRequestHook {
  requestHook?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestHookCatch?: (error: AxiosError) => AxiosError
  responseHook?: (res: AxiosResponse) => AxiosResponse
  responseHookCatch?: (error: AxiosError) => AxiosError
}

interface BJRequestConfig extends AxiosRequestConfig {
  hooks?: BJRequestHook
}

class BJRequest {
  instance: AxiosInstance
  hooks?: BJRequestHook
  isShowLoading?: boolean
  constructor(config: BJRequestConfig) {
    this.instance = axios.create(config)
    this.hooks = config.hooks

    // 单独实例请求成功的拦截
    this.instance.interceptors.request.use(this.hooks?.requestHook as any, this.hooks?.requestHookCatch)

    // 单独实例响应成功的拦截
    this.instance.interceptors.response.use(this.hooks?.responseHook, this.hooks?.responseHookCatch)

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全局请求拦截器')
        return config
      },
      (err) => {
        // console.error('全局请求失败')
        return err
      }
    )
    // 全局响应
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局响应拦截器')
        return res.data
      },
      (err) => {
        // console.error('全局响应失败')
        return err
      }
    )
  }

  request<T>(config: BJRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单独请求拦截
      if (config.hooks?.requestHook) {
        config = config.hooks.requestHook(config)
      }
      this.instance
        .request(config)
        .then((res: any) => {
          if (config.hooks?.responseHook) {
            res = config.hooks.responseHook(res)
          }
          resolve(res)
        })
        .catch((err: AxiosError) => {
          reject(err)
          return err
        })
    })
  }
  get<T>(config: BJRequestConfig | string): Promise<T> {
    if (typeof config === 'string') {
      return this.request({ url: config, method: 'GET' })
    }
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: BJRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T>(config: BJRequestConfig): Promise<T> {
    if (typeof config === 'string') {
      return this.request({ url: config, method: 'DELETE' })
    }
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T>(config: BJRequestConfig): Promise<T> {
    if (typeof config === 'string') {
      return this.request({ url: config, method: 'PATCH' })
    }
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default BJRequest
