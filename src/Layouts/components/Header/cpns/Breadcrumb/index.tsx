import React, { memo } from 'react'
import { Breadcrumb } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import classnames from 'classnames'
import { BreadWrapper } from './css'
import { RootState } from '@/store'
import { IMenuItem } from '@/service/login/types'
import { DEFAULT_PATH } from '@/config/constant'

const MyBreadcrumb: React.FC = memo(() => {
  const { menus, crumbsStatus } = useSelector(
    (state: RootState) => ({
      menus: state.login.menus,
      crumbsStatus: state.layouts.appConfig.crumbsStatus
    }),
    shallowEqual
  )
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const getCurrentBread = (menus: IMenuItem[], grades: IMenuItem[] = []) => {
    for (let i = 0; i < menus.length; i++) {
      const item = menus[i]
      if (item.path === pathname) {
        grades.push(item)
        break
      }
      if (item.children) {
        grades.push(item)
        getCurrentBread(item.children, grades)
      }
    }
    return grades
  }
  const breadList = getCurrentBread(menus)
  // console.log('breadList: ', breadList);
  const isActive = breadList.length === 1 && breadList[0].path === DEFAULT_PATH.path
  return (
    <BreadWrapper>
      {crumbsStatus && (
        <Breadcrumb>
          <Breadcrumb.Item
            onClick={() => navigate(DEFAULT_PATH.path)}
            className={classnames(['default', { bre_active: isActive }])}
          >
            {DEFAULT_PATH.label}
          </Breadcrumb.Item>
          {breadList.map((item, index) => (
            <Breadcrumb.Item key={index} className={classnames({ bre_active: index === breadList.length - 1 })}>
              {item.label !== DEFAULT_PATH.label ? item.label : null}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      )}
    </BreadWrapper>
  )
})

export default MyBreadcrumb
