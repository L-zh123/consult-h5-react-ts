import type{ AxiosRequestConfig, AxiosResponse } from 'axios'

// 针对 AxiosRequestConfig配置进行扩展
export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: {
    requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestFailureFn?: (err: any) => any
    responseSuccessFn?: (res: AxiosResponse) => AxiosResponse
    responseFailureFn?: (err: any) => any
  }
}
