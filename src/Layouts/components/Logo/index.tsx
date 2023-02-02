import React, { memo, FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { LogoWrapper } from './css'

interface IProps {
  sidebarStatus: boolean
}

const Logo: FC<IProps> = memo(({ sidebarStatus }) => {
  return (
    <LogoWrapper>
      <img src="http://simmon_page.gitee.io/react-antd-admin/static/media/ant.aba7deae.svg" alt="logo" />
      <CSSTransition in={!sidebarStatus} unmountOnExit timeout={200} classNames="title_css">
        <div className="title">React-Admin</div>
      </CSSTransition>
    </LogoWrapper>
  )
})

export default Logo
