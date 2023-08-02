import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './modules/counter'
import UserReducer from './modules/user'
import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    user: UserReducer
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export default store
