import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const DoctorCard: React.FC<IProps> = () => {
  return <div>DoctorCard</div>
}

export default memo(DoctorCard)
