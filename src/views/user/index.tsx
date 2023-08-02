import React, { memo, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUserInfo } from '@/API/user'
import { UserInfo } from '@/types/user'
import type { ReactNode } from 'react'
import { UserWrapper } from './style'
import { Avatar, Grid, Badge, NavBar, Dialog } from 'antd-mobile'
import { ReactComponent as Edit } from '@/icon/user/edit.svg'
import { ReactComponent as Paid } from '@/icon/user/paid.svg'
import { ReactComponent as Arrow } from '@/icon/user/arrow.svg'
import { ReactComponent as Finished } from '@/icon/user/finished.svg'
import { ReactComponent as Received } from '@/icon/user/received.svg'
import { ReactComponent as Shipped } from '@/icon/user/shipped.svg'
import { ReactComponent as Tool1 } from '@/icon/user/tool-01.svg'
import { ReactComponent as Tool2 } from '@/icon/user/tool-02.svg'
import { ReactComponent as Tool3 } from '@/icon/user/tool-03.svg'
import { ReactComponent as Tool4 } from '@/icon/user/tool-04.svg'
import { ReactComponent as Tool5 } from '@/icon/user/tool-05.svg'
import { ReactComponent as Tool6 } from '@/icon/user/tool-06.svg'
import { ReactComponent as Tool7 } from '@/icon/user/tool-07.svg'
import { useAppDispatch, useAppSelector } from '@/store'
import { delUser } from '@/store/modules/user'

interface IProps {
  children?: ReactNode
}

const User: React.FC<IProps> = () => {
  // 快捷工具数据
  const tools = [
    { label: '我的问诊', path: '/user/consult', icon: <Tool1 /> },
    { label: '我的处方', path: '/', icon: <Tool2 /> },
    { label: '家庭档案', path: '/user/patient', icon: <Tool3 /> },
    { label: '地址管理', path: '/user/address', icon: <Tool4 /> },
    { label: '我的评价', path: '/', icon: <Tool5 /> },
    { label: '官方客服', path: '/', icon: <Tool6 /> },
    { label: '设置', path: '/', icon: <Tool7 /> }
  ]
  const [userInfo, setUserInfo] = useState({} as UserInfo)
  // 发起请求获取用户数据
  useEffect(() => {
    async function fetchUserInfo() {
      const { data: res } = await getUserInfo()
      setUserInfo(res)
      console.log(res)
    }
    // 发起请求
    fetchUserInfo()
    return () => {
      console.log('user 被卸载了')
    }
  }, [])

  // 退出登录
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const logout = async () => {
    console.log('退出登录')
    const result = await Dialog.confirm({
      title: '提示',
      content: '确定要退出吗?'
    })
    if (result) {
      // 退出
      // 跳转前清空token及用户信息
      dispatch(delUser())
      navigate('/login', { replace: true })
    } else {
      // 取消退出
      console.log('取消退出')
    }
  }

  return (
    <UserWrapper>
      {/* 头部 */}
      {userInfo.id && (
        <div className="user-page">
          <div className="user-page-head">
            <div className="top">
              <Avatar className="avator" src={userInfo.avatar} fit="cover" />
              <div className="name">
                <p>{userInfo.account}</p>
                <p>
                  <Edit style={{ width: '20px', height: '20px' }} />
                </p>
              </div>
            </div>
            <Grid className="grid" columns={4} gap={20}>
              <Grid.Item>
                <p>{userInfo.collectionNumber}</p>
                <p>收藏</p>
              </Grid.Item>
              <Grid.Item>
                <p>{userInfo.likeNumber}</p>
                <p>关注</p>
              </Grid.Item>
              <Grid.Item>
                <p>{userInfo.score}</p>
                <p>积分</p>
              </Grid.Item>
              <Grid.Item>
                <p>{userInfo.couponNumber}</p>
                <p>优惠券</p>
              </Grid.Item>
            </Grid>
          </div>
          <div className="user-page-order">
            <div className="head">
              <h3>药品订单</h3>
              <p>
                <Link to="/order">全部订单</Link>
                <Arrow style={{ width: '20px', height: '20px' }} />
              </p>
            </div>
            <Grid className="grid" columns={4} gap={20}>
              <Grid.Item>
                <Badge content={''}>
                  <Paid />
                </Badge>
                <p>待付款</p>
              </Grid.Item>
              <Grid.Item>
                <Badge content={''}>
                  <Shipped />
                </Badge>
                <p>待发货</p>
              </Grid.Item>
              <Grid.Item>
                <Badge content={''}>
                  <Received />
                </Badge>
                <p>待收货</p>
              </Grid.Item>
              <Grid.Item>
                <Badge content={''}>
                  <Finished />
                </Badge>
                <p>已完成</p>
              </Grid.Item>
            </Grid>
          </div>
          <div className="user-page-group">
            <h3>快捷工具</h3>
            {tools.map((item) => (
              <Link to={item.path} key={item.label}>
                <NavBar
                  backArrow={false}
                  back={
                    <div className="badge">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  }
                  right={<Arrow />}
                />
              </Link>
            ))}
          </div>
          {/* 退出登录 */}
          <a className="logout" onClick={logout}>
            退出登录
          </a>
        </div>
      )}
    </UserWrapper>
  )
}

export default memo(User)
