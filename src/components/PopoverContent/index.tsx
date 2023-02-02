import { Divider } from 'antd'
import React, { memo } from 'react'
import { PopoverContentWrapper } from './css'

interface IProps {
  label?: string | number
  list: any[]
  lastList?: any[]
  onItemClick?: (info: any, index: number) => void
}

const PopoverContent: React.FC<IProps> = memo((props) => {
  return (
    <PopoverContentWrapper>
      <div className="content">
        {props.list.map((item, index) => {
          return (
            <div
              className={item === props.label ? 'active' : ''}
              key={index}
              onClick={() => props.onItemClick?.(item, index)}
            >
              {typeof item === 'object' ? item.label : item}
            </div>
          )
        })}
      </div>
      {props.lastList && (
        <>
          <Divider style={{ margin: 0 }} />
          <div className="content">
            {props.lastList?.map((item, index) => {
              return (
                <div
                  className={item === props.label ? 'active' : ''}
                  key={index}
                  onClick={() => props.onItemClick?.(item, index)}
                >
                  {typeof item === 'object' ? item.label : item}
                </div>
              )
            })}
          </div>
        </>
      )}
    </PopoverContentWrapper>
  )
})

export default PopoverContent
