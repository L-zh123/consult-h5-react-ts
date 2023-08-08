import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { CpRadioBtnWrapper } from './style'
import classNames from 'classnames'
interface IProps {
  children?: ReactNode
  options: {
    label: string
    value: number
  }[]
  defaultGender: 0 | 1
  genderClick: (gender: 0 | 1) => void
}

const CpRadioBtn: React.FC<IProps> = (props) => {
  const { options, genderClick, defaultGender } = props
  return (
    <CpRadioBtnWrapper>
      {options.map((item) => (
        <a
          key={item.label}
          className={classNames('item', {
            active: item.value === defaultGender
          })}
          onClick={() => {
            genderClick(item.value as 0 | 1)
          }}
        >
          {item.label}
        </a>
      ))}
    </CpRadioBtnWrapper>
  )
}

export default memo(CpRadioBtn)
