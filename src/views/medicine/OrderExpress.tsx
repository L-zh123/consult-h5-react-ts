import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const OrderExpress: React.FC<IProps> = () => {
  return <div>OrderExpress</div>
}

export default memo(OrderExpress)
