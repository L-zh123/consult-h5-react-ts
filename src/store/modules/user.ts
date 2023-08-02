import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: {
    user: {
      token: '',
      id: '',
      account: '',
      mobile: '',
      avatar: ''
    }
  },
  reducers: {
    // 设置用户，登录后使用
    setUser(state, { payload }) {
      state.user = payload
    },
    // 清空用户，退出后使用
    delUser(state) {
      state.user = {
        token: '',
        id: '',
        account: '',
        mobile: '',
        avatar: ''
      }
    }
  }
})

export const { setUser, delUser } = user.actions
export default user.reducer
