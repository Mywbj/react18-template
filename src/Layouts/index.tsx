import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { Layout, theme, Card } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { LayoutWrapper } from './css'
import NavTbas from './components/NavTabs'
import MyHeader from './components/Header'
import MyFooter from './components/Footer'
import SidebarMenu from './components/SidebarMenu'
import ChangeLayout from './components/ChangeLayout'
import { RootState } from '@/store'
import { menuModeAPI } from '@/store/modules/layouts'

const { useToken } = theme
const Layouts = memo(() => {
  const { tabsStatus, footerStatus, menuMode } = useSelector(
    (state: RootState) => ({
      tabsStatus: state.layouts.appConfig.tabsStatus,
      footerStatus: state.layouts.appConfig.footerStatus,
      menuMode: state.layouts.appConfig.menuMode
    }),
    shallowEqual
  )
  const { token } = useToken()
  console.log('token: ', token)
  return (
    <LayoutWrapper>
      {/* hasSider解决布局闪动问题 */}
      <Layout style={{ minHeight: '100vh' }} hasSider={true}>
        {menuMode === menuModeAPI.inline && <SidebarMenu />}
        <Layout>
          <div className="header">
            <Header>
              <MyHeader />
            </Header>
            {tabsStatus && <NavTbas />}
          </div>
          <div className="main">
            <Content>
              <Card className="content_card">
                <Outlet />
              </Card>
            </Content>
          </div>
          <div className="footer">
            {footerStatus && (
              <Footer>
                <MyFooter />
              </Footer>
            )}
          </div>
        </Layout>
      </Layout>

      <ChangeLayout />
    </LayoutWrapper>
  )
})

export default Layouts
