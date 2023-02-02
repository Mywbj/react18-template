export interface IMenuItem {
  type: number
  path?: string
  children?: IMenuItem[]
  label?: string
  icon?: string
  id: any
  key?: any
  parent?: IMenuItem
}
