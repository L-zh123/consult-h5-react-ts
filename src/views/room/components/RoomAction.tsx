import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const RoomAction: React.FC<IProps> = () => {
  return <div>RoomAction</div>
}

export default memo(RoomAction)
