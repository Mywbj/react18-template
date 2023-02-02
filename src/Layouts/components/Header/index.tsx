import React, { memo } from 'react'
import { HeaderWrapper } from './css'

import UserInfo from './cpns/UserInfo'
import Sidebar from './cpns/Sidebar'
import Breadcrumb from './cpns/Breadcrumb'
import FullScreen from './cpns/FullScreen'
import Language from './cpns/Language'
import ComponentSize from './cpns/ComponentSize'
import SidebarMenu from '../SidebarMenu'
import { RootState } from '@/store'
import { shallowEqual, useSelector } from 'react-redux'
import { menuModeAPI } from '@/store/modules/layouts'

const Header = memo(() => {
  console.log('myheader')
  const { menuMode } = useSelector(
    (state: RootState) => ({
      menuMode: state.layouts.appConfig.menuMode
    }),
    shallowEqual
  )

  return (
    <HeaderWrapper>
      <div className="h_left">
        {menuMode === menuModeAPI.horizontal ? (
          <SidebarMenu />
        ) : (
          <>
            <Sidebar />
            <Breadcrumb />
          </>
        )}
      </div>
      <div className="h_right">
        <Language />
        <ComponentSize />
        <FullScreen />
        <UserInfo />
      </div>
    </HeaderWrapper>
  )
})

export default Header
