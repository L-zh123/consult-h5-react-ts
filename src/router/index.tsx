import React from 'react'
import { Navigate } from 'react-router-dom'
import type { TRoute } from '@/types/route'

const Home = React.lazy(() => import('@/views/Home'))
const Login = React.lazy(() => import('@/views/login'))
const Layout = React.lazy(() => import('@/views/layout'))
const Article = React.lazy(() => import('@/views/article'))
const Notify = React.lazy(() => import('@/views/notify'))
const User = React.lazy(() => import('@/views/user'))
const ConsultOrder = React.lazy(() => import('@/views/user/ConsultOrder'))
const PatientInfo = React.lazy(() => import('@/views/user/PatientInfo'))
const Address = React.lazy(() => import('@/views/user/PatientInfo'))
const MoreDoctor = React.lazy(() => import('@/views/moreDoctor'))
const ConsultFast = React.lazy(() => import('@/views/consult/ConsultFast'))
const ConsultDep = React.lazy(() => import('@/views/consult/ConsultDep'))
const ConsultIllness = React.lazy(
  () => import('@/views/consult/ConsultIllness')
)
const ConsultPay = React.lazy(() => import('@/views/consult/ConsultPay'))
const Room = React.lazy(() => import('@/views/room'))
const Consult = React.lazy(() => import('@/views/user/ConsultOrder'))
const ConsultDetail = React.lazy(() => import('@/views/user/ConsultDetail'))

const NotFound = React.lazy(() => import('@/views/NotFound'))

const routes: TRoute[] = [
  {
    path: '/login',
    element: <Login />,
    auth: true
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/article',
        element: <Article />
      },
      {
        path: '/notify',
        element: <Notify />
      },
      {
        path: '/user',
        element: <User />
      }
    ]
  },
  {
    path: '/user/consult',
    element: <ConsultOrder />
  },
  {
    path: '/user/patient',
    element: <PatientInfo />
  },
  {
    path: '/user/address',
    element: <Address />
  },
  {
    path: '/moredoctor',
    element: <MoreDoctor />
  },
  {
    path: '/consult/fast',
    element: <ConsultFast />
  },
  {
    path: '/consult/dep',
    element: <ConsultDep />
  },
  {
    path: '/consult/illness',
    element: <ConsultIllness />
  },
  {
    path: '/consult/pay',
    element: <ConsultPay />
  },
  {
    path: '/room',
    element: <Room />
  },
  {
    path: '/user/consult',
    element: <Consult />
  },
  {
    path: '/user/consult/:id',
    element: <ConsultDetail />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
