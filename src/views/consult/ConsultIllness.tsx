import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const ConsultIllness: React.FC<IProps> = () => {
  return <div>ConsultIllness</div>
}

export default memo(ConsultIllness)
