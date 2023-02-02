import React from 'react'
import { IRouteObject } from '@/router/types'
import { IMenuItem } from '@/service/login/types'

/**
 * 加载所有路由
 */
export function getAllRouter() {
  const allRoutes: IRouteObject[] = []
  const routeFiles = require.context(`../router/modules`, true, /.tsx/)
  routeFiles.keys().forEach((key: string) => {
    const routes = require(`../router/modules${key.split('.')[1]}`)
    allRoutes.push(...(routes.default ?? []))
  })
  return allRoutes
}

/**
 * 根据菜单筛选路由
 */
export function mapMenusToRouter(userMenus: IMenuItem[], allRoutes: IRouteObject[]) {
  const routes: IRouteObject[] = []
  function filterRoute(menus: IMenuItem[]) {
    for (const menuItem of menus) {
      if (menuItem.type === 1) {
        const route = allRoutes.find((item) => item.path === menuItem.path)
        if (route) {
          routes.push(route)
        }
      } else if (menuItem.type === 2) {
        filterRoute(menuItem.children ?? [])
      }
    }
  }
  filterRoute(userMenus)
  return routes
}

/**
 * 合并路由
 */
export function handleMergeRoutes(defaultRoutes: IRouteObject[], routes: IRouteObject[]) {
  // 拷贝原路由
  const newDefaultRoutes = deepCopyRoute<IRouteObject[]>(defaultRoutes)
  // 拿到main路由
  const routeItem = newDefaultRoutes.find((item) => item.id === 'layouts') ?? {}
  // 添加新路由
  if (routeItem.children) {
    routeItem.children = [...routeItem.children, ...routes]
  } else {
    routeItem.children = routes
  }

  // 返回新路由
  return newDefaultRoutes
}

// 拷贝路由对象
function deepCopyRoute<T>(raw: T): T {
  const copyData: any = Array.isArray(raw) ? [] : {}

  for (const key in raw) {
    const value: any = raw[key]
    // 如果是普通类型或者react元素则不深拷贝
    const condition = typeof value !== 'object' || React.isValidElement(value)
    if (condition) {
      copyData[key] = value
    } else if (typeof value === 'object') {
      copyData[key] = deepCopyRoute(value)
    }
  }
  return copyData
}
