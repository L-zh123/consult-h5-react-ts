import { useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
interface IProps {
  children?: ReactNode
}

const Home: React.FC<IProps> = () => {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqual
  )
  return (
    <div className="home">
      <h2>Home</h2>
      <div>
        <h2>count:{count}</h2>
        <div style={{ width: '200px', height: '200px', background: '#f00' }}>
          1
        </div>
        <div style={{ width: '200px', height: '200px', background: '#f00' }}>
          2
        </div>
        <div style={{ width: '200px', height: '200px', background: '#f00' }}>
          3
        </div>
        <div style={{ width: '200px', height: '200px', background: '#f00' }}>
          4
        </div>
        <div style={{ width: '200px', height: '200px', background: '#f00' }}>
          5
        </div>
      </div>
    </div>
  )
}

export default memo(Home)
