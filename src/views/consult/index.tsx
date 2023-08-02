import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const Consult: React.FC<IProps> = () => {
  return <div>Consult</div>
}

export default memo(Consult)
