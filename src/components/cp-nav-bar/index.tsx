import React, { memo, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { NavBar } from 'antd-mobile'
import { CpNavBarWrapper } from './style'
interface IProps {
  children?: ReactNode
  centerTitle: string
  right?: string
  backArrow?: boolean
  back?: () => void
  rightClick?: () => void
}

const CpNavBar: React.FC<IProps> = (props) => {
  const { centerTitle, right, rightClick, backArrow = true, back } = props
  const rightContent = useMemo(
    () => (
      <div onClick={rightClick}>
        <a
          style={{
            display: 'block',
            fontSize: '16px'
          }}
        >
          {right}
        </a>
      </div>
    ),
    [rightClick]
  )
  // 点击导航栏的左侧
  const navigate = useNavigate()
  const leftClick = () => {
    if (back) {
      back()
    } else {
      navigate(-1)
    }
  }
  return (
    <CpNavBarWrapper>
      <NavBar backArrow={backArrow} right={rightContent} onBack={leftClick}>
        {centerTitle}
      </NavBar>
    </CpNavBarWrapper>
  )
}

export default memo(CpNavBar)
