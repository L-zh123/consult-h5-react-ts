import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const OrderDetail: React.FC<IProps> = () => {
  return <div>OrderDetail</div>
}

export default memo(OrderDetail)
