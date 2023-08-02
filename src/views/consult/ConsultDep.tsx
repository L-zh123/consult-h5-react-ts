import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const ConsultDep: React.FC<IProps> = () => {
  return <div>ConsultDep</div>
}

export default memo(ConsultDep)
