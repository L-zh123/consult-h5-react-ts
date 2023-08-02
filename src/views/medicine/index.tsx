import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const Medicine: React.FC<IProps> = () => {
  return <div>Medicine</div>
}

export default memo(Medicine)
