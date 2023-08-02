import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const MoreDoctor: React.FC<IProps> = () => {
  return <div>MoreDoctor</div>
}

export default memo(MoreDoctor)
