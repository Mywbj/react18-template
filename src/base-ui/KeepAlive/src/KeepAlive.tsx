import React, { memo, FC, useContext, useLayoutEffect, useRef, useState } from 'react'
import { KeepContext } from './AliveProvider'

interface IPorps {
  id: any
  children: any
}

const KeepAlive: FC<IPorps> = memo((props) => {
  const { id, children } = props
  const { keep } = useContext(KeepContext)
  const [element, setElement] = useState(null)
  const ref = useRef<HTMLDivElement | null>(null)
  useLayoutEffect(() => {
    keep?.(id, children, ref.current).then((el) => {
      if (el instanceof HTMLElement) {
        setElement(null)
        ref.current?.appendChild(el)
      } else {
        setElement(el)
      }
    })
  }, [id, children])

  return element ? element : <div ref={ref}></div>
})

export default KeepAlive
