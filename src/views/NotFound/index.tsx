import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const NotFount: React.FC<IProps> = () => {
  return <div>404NotFount</div>
}

export default memo(NotFount)
