import { useAppDispatch } from '@/store'
import { add_num, sub_num } from '@/store/modules/counter'
import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const About: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()
  return (
    <div>
      <button onClick={() => dispatch(add_num(1))}>+1</button>
      <button onClick={() => dispatch(sub_num(1))}>-1</button>
    </div>
  )
}

export default memo(About)
