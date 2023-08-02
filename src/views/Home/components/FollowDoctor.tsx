import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const FollowDoctor: React.FC<IProps> = () => {
  return <div>FollowDoctor</div>
}

export default memo(FollowDoctor)
