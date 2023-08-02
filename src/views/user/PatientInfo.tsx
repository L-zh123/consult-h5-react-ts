import React, { memo, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { getPatientList } from '@/API/user'
import type { Patient } from '@/types/user'
import { PatientWrapper } from './style'
import CpNavBar from '@/components/cp-nav-bar'
import { ReactComponent as Edit } from '@/icon/user/edit.svg'
import { ReactComponent as Add } from '@/icon/user/add.svg'

interface IProps {
  children?: ReactNode
}

const PatientInfo: React.FC<IProps> = () => {
  // 发送网络请求
  const [patientList, setPatientList] = useState([] as Patient[])
  useEffect(() => {
    async function fetchPatientList() {
      const { data: res } = await getPatientList()
      console.log(res)

      setPatientList(res)
    }
    fetchPatientList()
  }, [])
  // 选择
  return (
    <PatientWrapper>
      {patientList.length !== 0 && (
        <div className="patient-page">
          <CpNavBar centerTitle="家庭档案" />
          <div className="patient-list">
            {patientList.map((item) => (
              <div className="patient-item" key={item.id}>
                <div className="info">
                  <span className="name">{item.name}</span>
                  <span className="id">
                    {item.idCard.replace(/^(.{6})(?:\d+)(.{4})$/, '$1******$2')}
                  </span>
                  <span>{item.genderValue}</span>
                  <span>{item.age}岁</span>
                </div>
                <div className="icon">
                  <Edit />
                </div>
                {item.defaultFlag !== 0 && <div className="tag">默认</div>}
              </div>
            ))}
            {patientList.length < 6 && (
              <div className="patient-add">
                <Add />
                <p>添加患者</p>
              </div>
            )}
            <div className="patient-tip">最多可添加 6 人</div>
          </div>
        </div>
      )}
    </PatientWrapper>
  )
}

export default memo(PatientInfo)
