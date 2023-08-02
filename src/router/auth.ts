import store from '@/store'
import { useEffect, useRef } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import type { MutableRefObject } from 'react'
import type { RouteObject, Location, NavigateFunction } from 'react-router-dom'
import type { TRoute } from '@/types/route'

// 校验路由的守卫
function withBeforeRouter(routes: RouteObject[]) {
  const location = useLocation()
  const navigate = useNavigate()
  const fromRoute = useRef<RouteObject | null>(null)
  useEffect(() => {
    beforeRouter(location, navigate, routes, fromRoute)
  }, [location, navigate, routes, fromRoute])

  return useRoutes(routes)
}
// 路由守卫
function beforeRouter(
  location: Location,
  navigate: NavigateFunction,
  routes: RouteObject[],
  fromRoute: MutableRefObject<RouteObject | null>
) {
  // console.log('location:', location)
  const { pathname } = location
  // const from = fromRoute.current
  const to = searchRouteInfo(pathname, routes)
  // console.log('from:', from)
  console.log('to:', to?.meta?.title)
  document.title = `优医问诊-${to?.meta?.title || ''}`
  fromRoute.current = to
  // 不需要登录的页面，白名单
  const wihteList = ['/login', '/register']
  // 获取store中的数据
  const { user } = store.getState().user
  // 拿到token
  const token = user.token
  // 加from 的原因是第一次进入首页不让他跳到登录页，刚进来from为null
  if (!token && !wihteList.includes(pathname)) {
    navigate(`/login?returnUrl=${pathname}`)
  }
}

// 查找路由信息
function searchRouteInfo(path: string, routes: RouteObject[]): TRoute | null {
  // 递归查找路由信息
  for (const item of routes) {
    if (path === item.path) return item
    // 判断 item是否有孩子路由，如果有，递归遍历
    if (item.children) {
      // return searchRouteInfo(path,item.children) // 错误做法
      // 下面这样行这样做的目的是：防止循环还没结束就被迫结束
      const routeInfo = searchRouteInfo(path, item.children)
      if (routeInfo) return routeInfo
    }
  }
  // 走到这里说明没有找到path的路由信息
  return null
}

export default withBeforeRouter
