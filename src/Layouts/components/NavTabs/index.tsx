import React, { memo } from 'react'
import { Tag } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars'
import { TabsWrapper } from './css'
import { Link, useLocation } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { changeTabsAction } from '../../../store/modules/layouts'

const NavTbas = memo(() => {
  // console.log('NavTbas: ');
  const { navTabs } = useSelector(
    (state: RootState) => ({
      navTabs: state.layouts.navTabs
    }),
    shallowEqual
  )
  const location = useLocation()
  const dispatch = useDispatch()

  const tabCloseHandle = (pathname: string) => {
    const newTbas = [...navTabs]
    for (let i = 0; i < newTbas.length; i++) {
      const item = newTbas[i]
      if (item.path === pathname) {
        newTbas.splice(i, 1)
        break
      }
    }
    dispatch(changeTabsAction(newTbas))
  }
  // console.log('navTabs: ', navTabs);

  return (
    <TabsWrapper>
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        hideTracksWhenNotNeeded={true}
        renderView={(props) => (
          <div
            {...props}
            style={{
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              alignItems: 'center'
            }}
          />
        )}
        renderTrackVertical={(props) => <div {...props} style={{ visibility: 'hidden' }} />}
      >
        {navTabs.map((tab) => {
          const equals = tab.path === location.pathname
          return (
            <Tag
              key={tab.path}
              closable={equals ? false : true}
              color={equals ? '#55acee' : ''}
              className="tag_item"
              onClose={() => tabCloseHandle(tab.path)}
            >
              <Link to={tab.path}>
                {equals && <span className="active"></span>}
                {tab.label}
              </Link>
            </Tag>
          )
        })}
      </Scrollbars>
    </TabsWrapper>
  )
})

export default NavTbas
