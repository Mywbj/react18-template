import React, { memo, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, MenuProps } from 'antd'
import * as AntdIcons from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import Logo from '../Logo'
import { IMenuItem } from '@/service/login/types'
import { changeTabsAction, menuModeAPI } from '@/store/modules/layouts'

const SidebarMenu = memo(() => {
  const { sidebarStatus, menus, navTabs, menuMode } = useSelector(
    (state: RootState) => ({
      sidebarStatus: state.layouts.appConfig.sidebarStatus,
      menuMode: state.layouts.appConfig.menuMode,
      menus: state.login.menus,
      navTabs: state.layouts.navTabs
    }),
    shallowEqual
  )
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const currentPathname = location.pathname

  // 把菜单转换成antd的menu菜单数据格式
  function handleMenus(menus: IMenuItem[]) {
    return menus.map((item: any) => {
      const newItem = { ...item, key: item.path ?? item.id }

      const IconCpn = (AntdIcons as any)[newItem.icon ?? '']
      if (IconCpn) {
        newItem.icon = <IconCpn />
      }

      if (newItem.children) {
        newItem.key = newItem.path
        newItem.children = handleMenus(newItem.children)
      }

      return newItem
    })
  }
  const menuItems: any = handleMenus(menus)

  // 初始化当前激活的菜单项
  const initActiveMenu = () => {
    const rank = currentPathname.split('/')
    const openKey = `/${rank[1]}`
    const openItems = openKey !== currentPathname ? [openKey] : void 0
    return {
      openKeys: openItems,
      selectedKeys: [currentPathname]
    }
  }
  const menuConfig = initActiveMenu()

  const findCurrentMenu = (pathname: string, menus: IMenuItem[]): IMenuItem | undefined => {
    for (let i = 0; i < menus.length; i++) {
      const item = menus[i]
      if (pathname === item.path) {
        return item
      }
      if (item.children) {
        return findCurrentMenu(pathname, item.children)
      }
    }
  }

  const changeTabs = (pathname: string) => {
    const isAdd = navTabs.some((item) => item.path === pathname)
    if (!isAdd) {
      const currentMenuItem = findCurrentMenu(pathname, menus)
      if (currentMenuItem) {
        const newTbas = [...navTabs, currentMenuItem]
        dispatch(changeTabsAction(newTbas))
      }
    }
  }

  const menuClickHandle: MenuProps['onClick'] = (info) => {
    if (info.key !== currentPathname) {
      navigate(info.key)
    }
  }

  useEffect(() => {
    changeTabs(currentPathname)
  }, [currentPathname])

  const menuCore = (
    <>
      <Logo sidebarStatus={sidebarStatus} />
      <Menu
        theme="light"
        mode={menuMode}
        className="left_sidebar_menu"
        defaultOpenKeys={menuConfig.openKeys}
        defaultSelectedKeys={menuConfig.selectedKeys}
        selectedKeys={menuConfig.selectedKeys}
        items={menuItems}
        onClick={menuClickHandle}
      />
    </>
  )

  return menuMode === menuModeAPI.horizontal ? (
    menuCore
  ) : (
    <Sider
      trigger={null}
      collapsible
      collapsed={sidebarStatus}
      className="left_aside_sider"
      theme="light"
      style={{ minWidth: '240px' }}
    >
      {menuCore}
    </Sider>
  )
})

export default SidebarMenu
