import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const ConsultFast: React.FC<IProps> = () => {
  return <div>ConsultFast</div>
}

export default memo(ConsultFast)
