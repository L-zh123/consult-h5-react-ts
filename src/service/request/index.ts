import axios, { type AxiosInstance } from 'axios'
import type { HYRequestConfig } from '@/service/request/type'
import store from '@/store'

class HYRequest {
  instance: AxiosInstance
  //request实例 => axios的实例
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全局请求成功的拦截')
        const { token } = store.getState().user.user
        config.headers['Authorization'] = `Bearer ${token}`
        return config
      },
      (err) => {
        // console.log('全局请求失败的拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局响应成功的拦截')
        return res
      },
      (err) => {
        // console.log('全局响应失败的拦截')
        return err
      }
    )

    // 针对特定的hyRequest实例添加拦截器
    // 往拦截器中添加------(拦截器可以使用多次，且不会冲突)
    this.instance.interceptors.request.use(
      // @ts-ignore
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 封装网络请求的方法
  request<T>(config: HYRequestConfig) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          // 单次响应的成功拦截
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: HYRequestConfig) {
    return this.request<T>({ ...config, method: 'get' })
  }

  post<T>(config: HYRequestConfig) {
    return this.request<T>({ ...config, method: 'post' })
  }
}

export default HYRequest
