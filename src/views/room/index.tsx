import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const Room: React.FC<IProps> = () => {
  return <div>Room</div>
}

export default memo(Room)
