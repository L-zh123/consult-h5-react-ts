// 用户信息
export type User = {
  token: string
  id: string
  account: string
  mobile: string
  avatar: string
}
// 密码登录返回类型
export type T_API_User = {
  code: number
  data: User
  message: string
}

// 短信验证码类型
export type TCodeType = 'login' | 'register'

// 验证码登录的返回值类型
export type T_API_CodeLogin = {
  code: number
  data: {
    code: string
  }
  message: string
}

// 个人信息
type OmitUser = Omit<User, 'token'>
export type UserInfo = OmitUser & {
  likeNumber: number
  collectionNumber: number
  score: number
  couponNumber: number
  orderInfo: {
    paidNumber: number
    receivedNumber: number
    shippedNumber: number
    finishedNumber: number
  }
}

export type T_API_UserInfo = {
  code: number
  data: UserInfo
  message: string
}

// 家庭档案-患者信息
export type Patient = {
  id?: string
  name: string
  idCard: string
  defaultFlag: 0 | 1
  gender: 0 | 1
  genderValue?: string
  age?: number
}

// 家庭档案-患者信息列表
export type T_API_PatientList = {
  code: number
  data: Patient[]
  message: string
}

export type T_API<T> = {
  code: number
  data: T
  message: string
}
