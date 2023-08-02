import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const OrderPayResult: React.FC<IProps> = () => {
  return <div>OrderPayResult</div>
}

export default memo(OrderPayResult)
