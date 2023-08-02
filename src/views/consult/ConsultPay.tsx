import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const ConsultPay: React.FC<IProps> = () => {
  return <div>ConsultPay</div>
}

export default memo(ConsultPay)
