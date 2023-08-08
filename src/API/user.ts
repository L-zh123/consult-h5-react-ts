import type {
  T_API_User,
  TCodeType,
  T_API_CodeLogin,
  T_API_UserInfo,
  T_API_PatientList,
  Patient
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

// 添加患者信息
export const addPatient = (patient: Patient) =>
  hyRequest.post<any>({
    url: '/patient/add',
    data: patient
  })

// 编辑患者信息
export const editPatient = (patient: Patient) =>
  hyRequest.request({
    url: '/patient/update',
    method: 'put',
    data: patient
  })

// 删除患者信息
export const delPatient = (id: string) =>
  hyRequest.request({
    url: `/patient/del/${id}`,
    method: 'delete'
  })
