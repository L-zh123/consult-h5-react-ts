import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const ConsultList: React.FC<IProps> = () => {
  return <div>ConsultList</div>
}

export default memo(ConsultList)
