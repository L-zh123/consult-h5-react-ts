import { createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    add_num(state, { payload }) {
      state.count += payload
    },
    sub_num(state, { payload }) {
      state.count -= payload
    }
  }
})
export const { add_num, sub_num } = counter.actions
export default counter.reducer
