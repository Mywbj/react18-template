export function shallowComparisonProps(oldChild: any, newChild: any) {
  console.log('oldChild: ', oldChild)
  if (Array.isArray(newChild)) {
    for (let i = 0; i < newChild.length; i++) {
      const oldItem = oldChild[i]
      const newItem = newChild[i]
      const oldProps = oldItem?.props
      const newProps = newItem.props
      for (const key in newProps) {
        const oldVal = oldProps?.[key]
        const newVal = newProps[key]
        if (oldVal !== newVal) {
          return true
        }
      }
    }
  } else {
    const oldProps = oldChild?.props
    const newProps = newChild.props
    for (const key in newProps) {
      const oldVal = oldProps?.[key]
      const newVal = newProps[key]
      if (oldVal !== newVal) {
        return true
      }
    }
  }
  return false
}
