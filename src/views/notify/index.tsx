import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const Notify: React.FC<IProps> = () => {
  return <div>Notify</div>
}

export default memo(Notify)
