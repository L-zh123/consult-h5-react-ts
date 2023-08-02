import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const Article: React.FC<IProps> = () => {
  return <div>Article</div>
}

export default memo(Article)
