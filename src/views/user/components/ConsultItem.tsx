import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const ConsultItem: React.FC<IProps> = () => {
  return <div>ConsultItem</div>
}

export default memo(ConsultItem)
