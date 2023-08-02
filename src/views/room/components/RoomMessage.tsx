import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const RoomMessage: React.FC<IProps> = () => {
  return <div>RoomMessage</div>
}

export default memo(RoomMessage)
