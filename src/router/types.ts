import React from 'react'

export interface IMetaProps {
  title?: string
  key?: string
  auth?: boolean
}

export interface IRouteObject {
  children?: IRouteObject[]
  element?: React.ReactNode
  index?: boolean
  id?: string
  path?: string
  meta?: IMetaProps
}
