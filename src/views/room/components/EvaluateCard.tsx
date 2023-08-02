import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const EvaluateCard: React.FC<IProps> = () => {
  return <div>EvaluateCard</div>
}

export default memo(EvaluateCard)
