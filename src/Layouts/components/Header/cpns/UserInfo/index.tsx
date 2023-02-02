import React, { memo, useState } from 'react'
import { Avatar, Popover, Modal } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ExclamationCircleFilled } from '@ant-design/icons'
import { InfoWrapper } from './css'
import { changeDrawerOpenAction } from '@/store/modules/layouts'
import PopoverContent from '@/components/PopoverContent'

const { confirm } = Modal

const popoverList = [
  { label: '修改密码', value: 'changePassword' },
  { label: '布局设置', value: 'layouts' }
]
const lastList = [{ label: '退出登陆', value: 'logOut' }]

const UserInfo = memo(() => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const showConfirm = () => {
    confirm({
      title: '温馨提示 🧡',
      icon: <ExclamationCircleFilled />,
      content: '是否确认退出登录？',
      onOk() {
        navigate('/login', {
          replace: true
        })
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }

  const dropdownItemHandle = (info: any) => {
    console.log('info: ', info)
    setOpen(false)
    if (info.value === 'layouts') {
      dispatch(changeDrawerOpenAction(true))
    }
    if (info.value === 'logOut') {
      showConfirm()
    }
  }

  return (
    <InfoWrapper>
      <Popover
        placement="bottom"
        overlayInnerStyle={{ padding: 0 }}
        open={open}
        content={<PopoverContent list={popoverList} lastList={lastList} onItemClick={dropdownItemHandle} />}
      >
        <div className="user_info" onClick={() => setOpen(!open)}>
          <div className="avatar">
            <Avatar
              size="large"
              src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            />
          </div>
          <div className="username">
            <span>Myway</span>
          </div>
        </div>
      </Popover>
    </InfoWrapper>
  )
})

export default UserInfo
