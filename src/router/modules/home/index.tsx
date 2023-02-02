import { IRouteObject } from '@/router/types'
import Dashboard from '@/views/modules/home/Dashboard'

const homeRouter: IRouteObject[] = [
  {
    path: '/home/dashboard',
    id: 'dashboard',
    element: <Dashboard />
  }
]
export default homeRouter
