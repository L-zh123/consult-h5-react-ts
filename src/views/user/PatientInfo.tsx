import React, { memo, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { getPatientList, addPatient, editPatient, delPatient } from '@/API/user'
import type { Patient } from '@/types/user'
import {
  Form,
  Popup,
  Input,
  Checkbox,
  Toast,
  Button,
  Dialog
} from 'antd-mobile'
import { PatientWrapper } from './style'
import CpNavBar from '@/components/cp-nav-bar'
import { ReactComponent as Edit } from '@/icon/user/edit.svg'
import { ReactComponent as Add } from '@/icon/user/add.svg'
import CpRadioBtn from '@/components/cp-radio-btn'
import Validator from 'id-validator'

interface IProps {
  children?: ReactNode
}

const PatientInfo: React.FC<IProps> = () => {
  // 发送网络请求
  const [patientList, setPatientList] = useState([] as Patient[])
  // 定义一个变量,当变量发生变化时，重新请求
  const [again, setAgainPatientList] = useState(true)
  useEffect(() => {
    async function fetchPatientList() {
      const { data: res } = await getPatientList()
      console.log(res)

      setPatientList(res)
    }
    if (again) {
      fetchPatientList()
      setAgainPatientList(false)
    }
  }, [again])
  // 添加患者的弹框的显示与隐藏
  const [addPatientShow, setAddPatientShow] = useState(false)
  // 单选按钮
  const options = useMemo(
    () => [
      { label: '男', value: 1 },
      { label: '女', value: 0 }
    ],
    []
  )

  // 控制性别的选择
  const [patient, setPatient] = useState<Patient>({
    name: '',
    idCard: '',
    gender: 1,
    defaultFlag: 1
  })
  const genderClick = (gender: 0 | 1) => {
    const newPatient = { ...patient, gender }
    setPatient(newPatient)
  }

  const defaultGender = useMemo(() => patient.gender, [patient.gender])

  // 点击保存
  const saveClick = async () => {
    if (!patient.name.trim().length) return Toast.show('请输入真实姓名')
    if (!patient.idCard.trim().length) return Toast.show('请输入身份证号')
    // 校验身份证号是否正确
    const validate = new Validator()
    if (!validate.isValid(patient.idCard)) return Toast.show('身份证格式错误')
    const { sex } = validate.getInfo(patient.idCard)
    if (patient.gender !== sex) return Toast.show('性别和身份证不符')
    // 添加 && 编辑
    const res = patient.id
      ? await editPatient(patient)
      : await addPatient(patient)
    if (res.code !== 10000) return Toast.show(res.message)
    Toast.show(patient.id ? '编辑成功' : '添加成功')
    // 再次请求患者列表
    setAgainPatientList(true)
    // 关闭弹框
    setAddPatientShow(false)
  }

  // 编辑按钮的点击
  const editShowPopupClick = (item: Patient) => {
    // 解构出后台需要的数据
    const { id, gender, name, idCard, defaultFlag } = item
    const patient = { id, gender, name, idCard, defaultFlag }
    // 数据回填
    setPatient(patient)
    // 显示弹框
    setAddPatientShow(true)
  }
  // 删除患者
  const deleteClick = async () => {
    console.log('删除')
    if (patient.id) {
      const result = await Dialog.confirm({
        content: `您确认要删除 ${patient.name} 患者信息吗 ？`
      })
      if (result) {
        // 确定退出
        await delPatient(patient.id)

        Toast.show('删除成功')
        // 再次请求患者列表
        setAgainPatientList(true)
        // 关闭弹框
        setAddPatientShow(false)
      }
    }
  }

  return (
    <PatientWrapper>
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
              <div className="icon" onClick={() => editShowPopupClick(item)}>
                <Edit />
              </div>
              {item.defaultFlag !== 0 && <div className="tag">默认</div>}
            </div>
          ))}
          {patientList.length < 6 && (
            <div
              className="patient-add"
              onClick={() => {
                // 每次打开新增患者弹层前，先清空数据
                setPatient({
                  name: '',
                  idCard: '',
                  gender: 1,
                  defaultFlag: 1
                })
                setAddPatientShow(true)
              }}
            >
              <Add />
              <p>添加患者</p>
            </div>
          )}
          <div className="patient-tip">最多可添加 6 人</div>
        </div>
        {/* 添加患者弹层 */}
        {addPatientShow && (
          <Popup
            bodyClassName="addPatient"
            visible={addPatientShow}
            onMaskClick={() => {
              setAddPatientShow(false)
            }}
            position="right"
            bodyStyle={{
              boxSizing: 'border-box',
              width: '100vw',
              padding: '50px 20px 0 20px'
            }}
          >
            <CpNavBar
              centerTitle={patient.id ? '编辑患者' : '添加患者'}
              right="保存"
              back={() => {
                setAddPatientShow(false)
              }}
              rightClick={() => saveClick()}
            />
            {/* 患者表单 */}
            <div className="patientForm">
              <Form
                layout="horizontal"
                footer={
                  patient.id && (
                    <Button
                      shape="rounded"
                      block
                      type="submit"
                      color="danger"
                      onClick={deleteClick}
                    >
                      删除患者
                    </Button>
                  )
                }
              >
                <Form.Item style={{ fontSize: '14px' }} label="真实姓名">
                  <Input
                    placeholder="请输入姓名"
                    value={patient.name}
                    onChange={(name) => {
                      const newPatient = { ...patient, name }
                      setPatient(newPatient)
                    }}
                  />
                </Form.Item>
                <Form.Item style={{ fontSize: '14px' }} label="身份证号">
                  <Input
                    placeholder="请输入身份证号"
                    value={patient.idCard}
                    onChange={(idCard) => {
                      const newPatient = { ...patient, idCard }
                      setPatient(newPatient)
                    }}
                  />
                </Form.Item>
                <Form.Item
                  style={{
                    fontSize: '14px'
                  }}
                  label="性别"
                >
                  <CpRadioBtn
                    options={options}
                    defaultGender={defaultGender}
                    genderClick={genderClick}
                  />
                </Form.Item>
                <Form.Item style={{ fontSize: '14px' }} label="默认就诊人">
                  <Checkbox
                    checked={!!patient.defaultFlag}
                    onChange={(isChecked) => {
                      const newPatient = {
                        ...patient,
                        defaultFlag: (isChecked ? 1 : 0) as 0 | 1
                      }
                      setPatient(newPatient)
                    }}
                  />
                </Form.Item>
              </Form>
            </div>
          </Popup>
        )}
      </div>
    </PatientWrapper>
  )
}

export default memo(PatientInfo)
