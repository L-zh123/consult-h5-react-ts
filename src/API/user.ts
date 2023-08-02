import type {
  T_API_User,
  TCodeType,
  T_API_CodeLogin,
  T_API_UserInfo,
  T_API_PatientList
} from '@/types/user'
import hyRequest from '@/service'

// 密码登录
export const loginByPassword = (mobile: string, password: string) =>
  hyRequest.post<T_API_User>({
    url: '/login/password',
    data: {
      mobile,
      password
    }
  })

// 发送验证码
export const sendMobileCode = (mobile: string, type: TCodeType) =>
  hyRequest.get<T_API_CodeLogin>({
    url: '/code',
    params: {
      mobile,
      type
    }
  })

// 短信登录
export const loginByMobile = (mobile: string, code: string) =>
  hyRequest.post<T_API_User>({
    url: '/login',
    data: {
      mobile,
      code
    }
  })

// 获取个人信息
export const getUserInfo = () =>
  hyRequest.get<T_API_UserInfo>({ url: '/patient/myUser' })

// 获患者信息列表
export const getPatientList = () =>
  hyRequest.get<T_API_PatientList>({ url: '/patient/mylist' })
