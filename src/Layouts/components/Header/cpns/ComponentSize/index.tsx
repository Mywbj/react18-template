import React, { memo } from 'react'
import { FontSizeOutlined } from '@ant-design/icons'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import CSS from '../index.module.css'
import { Popover } from 'antd'
import PopoverContent from '@/components/PopoverContent'
import { RootState } from '@/store'
import { changeComponentSizeAction } from '@/store/modules/layouts'

const sizeList = ['small', 'middle', 'large']

const ComponentSize = memo(() => {
  const { componentSize } = useSelector((state: RootState) => state.layouts, shallowEqual)
  const dispatch = useDispatch()
  function popoverItemClick(label: string) {
    dispatch(changeComponentSizeAction(label))
  }
  return (
    <div className={CSS.header_space_box}>
      <Popover
        placement="bottom"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        content={<PopoverContent label={componentSize} list={sizeList} onItemClick={popoverItemClick} />}
      >
        <FontSizeOutlined className={CSS.header_item_icon_size} />
      </Popover>
    </div>
  )
})

export default ComponentSize
