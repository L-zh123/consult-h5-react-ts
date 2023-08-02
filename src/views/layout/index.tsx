import React, { memo, Suspense, useMemo } from 'react'
import type { ReactNode } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { LayoutWrapper } from './style'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'

interface IProps {
  children?: ReactNode
}

const Layout: React.FC<IProps> = () => {
  const tabs = useMemo(
    () => [
      {
        key: '/home',
        title: '首页',
        icon: <AppOutline />
      },
      {
        key: '/article',
        title: '健康百科',
        icon: <UnorderedListOutline />
      },
      {
        key: '/notify',
        title: '消息中心',
        icon: (active: boolean) =>
          active ? <MessageFill /> : <MessageOutline />
      },
      {
        key: '/user',
        title: '我的',
        icon: <UserOutline />
      }
    ],
    []
  )
  const navigate = useNavigate()
  const location = useLocation()
  // tabbar的跳转
  const routerNavigateClick = (key: string) => {
    navigate(key, { replace: true })
  }
  return (
    <LayoutWrapper>
      {/* 路由页面 */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
      {/* 底部导航栏 */}
      <TabBar
        defaultActiveKey={location.pathname}
        activeKey={location.pathname}
        safeArea
        onChange={(key: string) => routerNavigateClick(key)}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </LayoutWrapper>
  )
}

export default memo(Layout)
