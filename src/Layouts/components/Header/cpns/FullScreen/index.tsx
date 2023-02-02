import React, { memo, useEffect, useState } from 'react'
import { Tooltip } from 'antd'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import fullScreen from 'screenfull'
import CSS from '../index.module.css'

const FullScreen = memo(() => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const toolTitle = isFullscreen ? '取消全屏' : '全屏'

  useEffect(() => {
    fullScreen.isEnabled && fullScreen.on('change', changeEvent)
    return () => {
      fullScreen.isEnabled && fullScreen.off('change', changeEvent)
    }
  }, [])

  const changeEvent = () => {
    setIsFullscreen(fullScreen.isFullscreen)
  }

  const fullScreenHandle = () => {
    fullScreen.toggle()
  }

  return (
    <div className={CSS.header_space_box}>
      <Tooltip placement="bottom" title={toolTitle}>
        {isFullscreen ? (
          <FullscreenExitOutlined className={CSS.header_item_icon_size} onClick={fullScreenHandle} />
        ) : (
          <FullscreenOutlined className={CSS.header_item_icon_size} onClick={fullScreenHandle} />
        )}
      </Tooltip>
    </div>
  )
})

export default FullScreen
