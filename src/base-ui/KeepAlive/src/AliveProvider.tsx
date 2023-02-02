import React, {
  memo,
  createContext,
  FC,
  useState,
  useCallback,
  useRef,
  ReactNode,
  useContext,
  Fragment,
  cloneElement,
  useMemo
} from 'react'
import { createPortal } from 'react-dom'
import { shallowComparisonProps } from './utils'

type ChildType = ReactNode | ReactNode[]

interface IProps {
  children: ChildType
}

interface IContext {
  keep?: (id: any, children: ChildType, keepRef: any) => Promise<any>
  blacklist?: any
  setElements?: any
}

export const KeepContext = createContext<IContext>({})

export function useKeepAliveTool() {
  const { blacklist, setElements } = useContext(KeepContext)
  return {
    destroy(id: any) {
      if (!blacklist.current.includes(id)) {
        blacklist.current = [...blacklist.current, id]
      }
    },
    setup(id: any) {
      const index = blacklist.current.indexOf(id)
      if (index !== -1) {
        blacklist.current.splice(index, 1)

        // setElements?.((state: any) => {
        //   const newElement = {...state[id]}
        //   newElement.
        //   {...state, [id]: { ...state[] }}
        // })
      }
    }
  }
}

const AliveProvider: FC<IProps> = memo((props) => {
  const [elements, setElements] = useState<any>({})
  const blacklist = useRef<any[]>([])
  const nodes = useRef<any>({})
  const mountNodes = useRef<any>({})
  const update = useRef(true)

  const keep = useCallback(
    (id: any, children: ChildType, keepRef: any) => {
      return new Promise((resolve) => {
        if (keepRef) {
          mountNodes.current[id] = keepRef
        }
        let element = elements[id]
        if (!element) {
          const newCache = {
            id,
            children,
            keepRef
          }
          element = newCache
          setElements({ ...elements, [id]: newCache })
        }

        // if (element && blacklist.current.includes(id)) {
        //   const newElements = { ...elements };
        //   delete newElements[id];
        //   console.log("newElements: ", newElements);
        //   setElements(newElements);
        // }

        // 如果当前缓存组件存在，直接更新children
        if (element && update.current) {
          update.current = false
          const newElement = { ...element, children }
          setElements({ ...elements, [id]: newElement })
        }

        Promise.resolve().then(() => {
          const node = nodes.current[id]
          // console.log("node: ", node);
          resolve(node && !blacklist.current.includes(id) ? node : children)
          update.current = true
        })
      })
    },
    [elements]
  )

  // console.log("blacklist: ", blacklist);
  // console.log("elements: ", elements);
  return (
    <KeepContext.Provider value={{ keep, blacklist, setElements }}>
      {props.children}
      {Object.values(elements).map((item: any) => {
        return (
          <div
            style={{
              display: blacklist.current.includes(item.id) ? 'none' : 'block'
            }}
            key={item.id}
            ref={(node) => (nodes.current[item.id] = node)}
          >
            {item.children}
          </div>
        )
      })}
    </KeepContext.Provider>
  )
})

export default AliveProvider
