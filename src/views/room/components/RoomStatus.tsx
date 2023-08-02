import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const RoomStatus: React.FC<IProps> = () => {
  return <div>RoomStatus</div>
}

export default memo(RoomStatus)
