import React, { memo, useMemo } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import type { ReactNode } from 'react'
import { NavBar } from 'antd-mobile'
import { CpNavBarWrapper } from './style'
interface IProps {
  children?: ReactNode
  centerTitle: string
  right?: string
  backArrow?: boolean
  rightClick?: () => void
}

const CpNavBar: React.FC<IProps> = (props) => {
  const { centerTitle, right, rightClick, backArrow = true } = props
  const rightContent = useMemo(
    () => (
      <div onClick={rightClick && rightClick}>
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
    []
  )
  // 点击导航栏的左侧
  const [location] = useSearchParams()
  const navigate = useNavigate()
  const leftClick = () => {
    console.log('左侧被点击', location.has(''))
    navigate(-1)
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
