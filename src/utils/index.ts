export function styleToObject(str: string): object {
  const style = {}
  const newStr = str
    .replace(/-(.)/g, (a, b) => {
      return b.toUpperCase()
    })
    .split(';')
  for (let i = 0; i < newStr.length; i++) {
    const s = newStr[i].split(':')
    ;(style as any)[s[0]] = s[1].trim()
  }
  return style
}
