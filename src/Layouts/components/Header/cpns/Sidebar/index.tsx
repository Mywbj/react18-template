import React, { memo } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { SidebarWrapper } from './css'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeAppConfigAction } from '@/store/modules/layouts'
import { RootState } from '@/store'

const menuIconStyle = {
  fontSize: '20px'
}

const Sidebar = memo((props) => {
  const { sidebarStatus } = useSelector(
    (state: RootState) => ({
      sidebarStatus: state.layouts.appConfig.sidebarStatus
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  function sidebarHandle() {
    dispatch(changeAppConfigAction({ sidebarStatus: !sidebarStatus }))
  }
  return (
    <SidebarWrapper onClick={sidebarHandle}>
      {sidebarStatus ? <MenuUnfoldOutlined style={menuIconStyle} /> : <MenuFoldOutlined style={menuIconStyle} />}
    </SidebarWrapper>
  )
})

export default Sidebar
