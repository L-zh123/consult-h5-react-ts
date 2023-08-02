import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const ConsultOrder: React.FC<IProps> = () => {
  return <div>ConsultOrder</div>
}

export default memo(ConsultOrder)
