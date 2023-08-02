import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const OrderPay: React.FC<IProps> = () => {
  return <div>OrderPay</div>
}

export default memo(OrderPay)
