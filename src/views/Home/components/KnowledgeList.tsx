import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const KnowledgeList: React.FC<IProps> = () => {
  return <div>KnowledgeList</div>
}

export default memo(KnowledgeList)
