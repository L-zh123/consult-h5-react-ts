import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const ConsultDetail: React.FC<IProps> = () => {
  return <div>ConsultDetail</div>
}

export default memo(ConsultDetail)
