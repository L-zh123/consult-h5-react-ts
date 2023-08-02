import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const KnowledgeCard: React.FC<IProps> = () => {
  return <div>KnowledgeCard</div>
}

export default memo(KnowledgeCard)
