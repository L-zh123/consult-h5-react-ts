import React, { memo, useState, useRef } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { LoginWrapper } from './style'
import CpNavBar from '@/components/cp-nav-bar'
import {
  RightOutline,
  EyeInvisibleOutline,
  EyeOutline
} from 'antd-mobile-icons'
import { Form, Input, Button, Checkbox, Toast } from 'antd-mobile'
import { loginByPassword, sendMobileCode, loginByMobile } from '@/API/user'
import { useAppDispatch } from '@/store'
import { setUser } from '@/store/modules/user'

interface IProps {
  children?: ReactNode
}

const Login: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()

  const rightClick = () => {
    console.log('点击了右侧')
  }
  // 密码的显示与隐藏
  const [visible, setVisible] = useState(false)
  // 控制短信验证码登录
  const [checkCode, setCheckCode] = useState(false)
  // 表单的提交
  const [form] = Form.useForm()
  // url的信息
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const onSubmit = async () => {
    // 获取登录表单的信息
    const formValue = form.getFieldsValue()
    if (!formValue.checked) {
      return Toast.show('请同意用户协议')
    }
    try {
      // 表单验证
      await form.validateFields()
      // 判断是验证码登录还是密码登录
      if (checkCode) {
        // 验证码登录，发送网络请求
        const { data: res } = await loginByMobile(
          formValue.phone,
          formValue.code
        )
        console.log('验证码登录:', res)
        dispatch(setUser(res))
      } else {
        // 密码登录，发送网络请求
        const { data: res } = await loginByPassword(
          formValue.phone,
          formValue.password
        )
        console.log('密码登录:', res)
        dispatch(setUser(res))
      }
      // console.log('url: ', location)
      const query = Object.fromEntries(searchParams)
      // console.log(query)
      Toast.show('登陆成功')
      // 页面跳转
      navigate(query.returnUrl || '/user', { replace: true })
    } catch (err) {
      Toast.show('表单校验不通过')
    }
  }
  // 发送短信验证码
  const [sendCode, setSendCode] = useState(true)
  const [second, setSecond] = useState(10)
  // 这样做的目的是处理闭包陷阱带来的问题
  const secRef = useRef<number>()
  secRef.current = second
  const sendCodeClick = async () => {
    setSendCode(false)
    const { phone } = form.getFieldsValue()
    const { data: res } = await sendMobileCode(phone, 'login')
    console.log('res: ', res.code)

    const timer = setInterval(() => {
      if (secRef.current && secRef.current > 0) {
        // setSecond((preSec) => preSec - 1)
        setSecond(secRef.current - 1)
      } else {
        // 重置时间
        setSecond(10)
        // 显示发送验证码按钮
        setSendCode(true)
        // 清除定时器
        clearInterval(timer)
      }
    }, 1000)
  }
  return (
    <LoginWrapper>
      {/* 导航栏 */}
      <CpNavBar centerTitle="登录" right="注册" rightClick={rightClick} />
      <div className="login">
        {/* 头部 */}
        <div className="login-head">
          <h3>密码登录</h3>
          <a
            onClick={() => {
              // 清空密码或验证码
              form.setFieldValue('password', '')
              form.setFieldValue('code', '')
              setCheckCode(!checkCode)
            }}
            style={{ color: '#000' }}
          >
            <span>{checkCode ? '手机号码登录' : '短信验证码登录'}</span>
            <RightOutline />
          </a>
        </div>
        {/* 表单 */}
        <Form
          form={form}
          className="form"
          layout="horizontal"
          footer={
            <Button
              className="btn"
              shape="rounded"
              block
              type="submit"
              color="primary"
              onClick={onSubmit}
            >
              提交
            </Button>
          }
        >
          <Form.Item
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: /^1\d{10}$/, message: '手机号格式不正确' }
            ]}
            name="phone"
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>
          {checkCode ? (
            <Form.Item
              name="code"
              rules={[
                { required: true, message: '请输入验证码' },
                { pattern: /^\d{6}$/, message: '验证码6个数字' }
              ]}
              extra={
                <div className="extraPart">
                  {sendCode ? (
                    <a onClick={sendCodeClick}>发送验证码</a>
                  ) : (
                    <a style={{ color: '#ccc', pointerEvents: 'none' }}>
                      {second}秒后重新发送
                    </a>
                  )}
                </div>
              }
            >
              <Input type="number" placeholder="请输入验证码" clearable />
            </Form.Item>
          ) : (
            <Form.Item
              name="password"
              rules={[
                { required: true, message: '请输入密码' },
                {
                  pattern: /^(?![a-zA-Z]+$)(?!\d+$)(?![^\da-zA-Z\s]+$).{8,16}$/,
                  message:
                    '密码由字母、数字、特殊字符,任意2种组成要大于8位,小于16位'
                }
              ]}
              extra={
                <div className="eye">
                  {!visible ? (
                    <EyeInvisibleOutline onClick={() => setVisible(true)} />
                  ) : (
                    <EyeOutline onClick={() => setVisible(false)} />
                  )}
                </div>
              }
            >
              <Input
                placeholder="请输入密码"
                type={visible ? 'text' : 'password'}
              />
            </Form.Item>
          )}
          <Form.Item name="checked" className="ipt">
            <Checkbox>
              <span>我已同意</span>
              <a>用户协议</a>
              <span>及</span>
              <a>隐私条款</a>
            </Checkbox>
          </Form.Item>
        </Form>
      </div>
      {/* 忘记密码 */}
      <div className="cp-cell">
        <a>忘记密码？</a>
      </div>
    </LoginWrapper>
  )
}

export default memo(Login)
