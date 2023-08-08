import { useAppSelector } from '@/store'
import React, { memo, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
interface IProps {
  children?: ReactNode
}

const Home: React.FC<IProps> = () => {
  const [num, setNum] = useState(0)
  useEffect(() => {
    console.log(`num发生了变化：${num}`)
    return () => {
      console.log('Home组件更新或者卸载')
    }
  }, [num])
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqual
  )
  return (
    <div className="home">
      <h2>Home</h2>
      <button onClick={() => setNum(num + 1)}>+1</button>
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
