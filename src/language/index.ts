import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import { Locale } from 'antd/es/locale'

export function localeHandle(language: any): Locale {
  const locales = {
    中文简体: zhCN,
    English: enUS
  }
  return locales[language as keyof typeof locales] ?? zhCN
}
