import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { FireOutlined, SettingOutlined } from '@ant-design/icons'
import { Divider, Drawer } from 'antd'
import classnames from 'classnames'
import { RootState } from '@/store'
import { AppThemeAPI, changeAppConfigAction, changeDrawerOpenAction, menuModeAPI } from '@/store/modules/layouts'
import SwitchItem from './cpns/SwitchItem'
import { LayoutWrapper } from './css'
import IconMenuStyle1 from '@/assets/svg/IconMenuStyle1'
import IconMenuStyle2 from '@/assets/svg/IconMenuStyle2'

const ChangeLayout: React.FC = memo(() => {
  const {
    drawerOpen,
    appConfig: { sidebarStatus, crumbsStatus, tabsStatus, footerStatus, appTheme, menuMode }
  } = useSelector(
    (state: RootState) => ({ drawerOpen: state.layouts.drawerOpen, appConfig: state.layouts.appConfig }),
    shallowEqual
  )

  const dispatch = useDispatch()

  const onDrawerClose = () => {
    dispatch(changeDrawerOpenAction(false))
  }

  const themeHandle = ({ value, prop }: any) => {
    if (prop === 'appTheme') {
      const theme = value ? AppThemeAPI.dark : AppThemeAPI.light
      dispatch(changeAppConfigAction({ appTheme: theme }))
    } else {
      dispatch(changeAppConfigAction({ [prop]: value }))
    }
  }

  const isDark = appTheme === AppThemeAPI.dark ? true : false

  return (
    <Drawer open={drawerOpen} onClose={onDrawerClose} width={320} title="布局设置" placement="right">
      <LayoutWrapper>
        <Divider className="split_line">
          <FireOutlined className="layout_icon" />
          全局主题
        </Divider>
        <SwitchItem
          title="暗黑模式"
          prop="appTheme"
          checkedChildren="🌞"
          unCheckedChildren="🌜"
          defaultChecked={isDark}
          checked={isDark}
          onChange={themeHandle}
        />
        <Divider className="split_line">
          <SettingOutlined className="layout_icon" />
          界面设置
        </Divider>
        <SwitchItem
          title="折叠菜单"
          prop="sidebarStatus"
          defaultChecked={sidebarStatus}
          checked={sidebarStatus}
          onChange={themeHandle}
        />
        <SwitchItem
          title="面包屑导航"
          prop="crumbsStatus"
          defaultChecked={crumbsStatus}
          checked={crumbsStatus}
          onChange={themeHandle}
        />
        <SwitchItem
          title="标签栏"
          prop="tabsStatus"
          defaultChecked={tabsStatus}
          checked={tabsStatus}
          onChange={themeHandle}
        />
        <SwitchItem
          title="页脚"
          prop="footerStatus"
          defaultChecked={footerStatus}
          checked={footerStatus}
          onChange={themeHandle}
        />
        <div className="menu_style">
          <div
            className={classnames(['style_item', menuMode === menuModeAPI.inline && 'style_active'])}
            onClick={() => themeHandle({ value: menuModeAPI.inline, prop: 'menuMode' })}
          >
            <IconMenuStyle1 />
          </div>
          <div
            className={classnames(['style_item', menuMode === menuModeAPI.horizontal && 'style_active'])}
            onClick={() => themeHandle({ value: menuModeAPI.horizontal, prop: 'menuMode' })}
          >
            <IconMenuStyle2 />
          </div>
        </div>
      </LayoutWrapper>
    </Drawer>
  )
})

export default ChangeLayout
