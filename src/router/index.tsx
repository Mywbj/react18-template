import { lazy, useEffect, useRef } from 'react'
import { Navigate, useRoutes, useNavigate, useLocation } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { getAllRouter, handleMergeRoutes, mapMenusToRouter } from '@/utils/mapMenus'
import { RootState } from '@/store'
import { IRouteObject } from './types'
import Login from '@/views/Login'
import Layouts from '@/Layouts'
const NotFound = lazy(() => import('@/views/NotFound'))

const defaultRoutes: IRouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home/dashboard" />
  },
  {
    path: '/login',
    id: 'login',
    element: <Login />
  },
  {
    id: 'layouts',
    element: <Layouts />
  },
  {
    path: '*',
    id: 'not-found',
    element: <NotFound />
  }
]

const allRoutes = getAllRouter()

// 设置路由
function useSetupRoutes() {
  const { menus, token } = useSelector((state: RootState) => {
    return {
      menus: state.login.menus,
      token: state.login.token
    }
  }, shallowEqual)
  const recordRoutes = useRef(defaultRoutes)

  if (recordRoutes.current !== menus) {
    const newRoutes = mapMenusToRouter(menus, allRoutes)
    if (newRoutes.length) {
      recordRoutes.current = handleMergeRoutes(defaultRoutes, newRoutes)
    }
  }

  return {
    token,
    routes: useRoutes(recordRoutes.current as any)
  }
}

function RouterComponent() {
  console.log('RouterComponent')
  const { routes, token } = useSetupRoutes()

  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    console.log('token: ', token)
    if (!token) {
      navigate('/login')
    }
  }, [location.pathname, token])

  return routes
}

export default RouterComponent
