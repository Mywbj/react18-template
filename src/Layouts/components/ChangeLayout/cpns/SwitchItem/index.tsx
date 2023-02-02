import React, { memo } from 'react'
import { ItemWrapper } from './css'
import { Switch } from 'antd'

interface IProps {
  checkedChildren?: any
  unCheckedChildren?: any
  checked?: boolean
  defaultChecked?: boolean
  title: string | number
  prop?: any
  onChange?: (info: IOnChangeArgs) => void
  children?: React.ReactNode
}

interface IOnChangeArgs {
  value: boolean
  prop: any
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
}

const SwitchItem: React.FC<IProps> = memo((props) => {
  const { title, checkedChildren, unCheckedChildren, defaultChecked = false, checked, prop, onChange, children } = props

  return (
    <ItemWrapper>
      <span className="text">{title}</span>
      {children ? (
        children
      ) : (
        <Switch
          checkedChildren={checkedChildren}
          unCheckedChildren={unCheckedChildren}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={(checked, event) => onChange?.({ value: checked, prop, event })}
        />
      )}
    </ItemWrapper>
  )
})

export default SwitchItem
