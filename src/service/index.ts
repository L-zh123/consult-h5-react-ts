import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export const hyRequest1 = new HYRequest({
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 8000,
  interceptors: {
    requestSuccessFn(config) {
      console.log('独立的请求成功拦截')
      return config
    },
    requestFailureFn(err) {
      console.log('独立的请求失败拦截')
      return err
    },
    responseSuccessFn(res) {
      console.log('独立的响应成功拦截')
      return res
    },
    responseFailureFn(err) {
      console.log('独立的响应失败拦截')
      return err
    }
  }
})
export default hyRequest
