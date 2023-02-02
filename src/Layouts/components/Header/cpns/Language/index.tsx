import React, { memo } from 'react'
import { Popover } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { TranslationOutlined } from '@ant-design/icons'
import CSS from '../index.module.css'
import PopoverContent from '@/components/PopoverContent'
import { changeLanguageAction } from '@/store/modules/layouts'
import { RootState } from '@/store'

const popoverList = ['简体中文', 'English']
const Language = memo(() => {
  const { language } = useSelector((state: RootState) => state.layouts, shallowEqual)
  const dispatch = useDispatch()
  function popoverItemClick(label: string) {
    dispatch(changeLanguageAction(label))
  }
  return (
    <div className={CSS.header_space_box}>
      <Popover
        placement="bottom"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        content={<PopoverContent label={language} list={popoverList} onItemClick={popoverItemClick} />}
      >
        <TranslationOutlined className={CSS.header_item_icon_size} />
      </Popover>
    </div>
  )
})

export default Language
