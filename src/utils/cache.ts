import { PROJECT_NAME } from '@/config/constant'
class LocalCache {
  PROJECT_NAME
  constructor(projectName: string) {
    this.PROJECT_NAME = projectName + '_'
  }
  getLocalSorage(key: string) {
    return this.getCache(key, true)
  }
  setLocalSorage(key: string, value: any) {
    this.setCache(key, value, true)
  }

  getSessionSorage(key: string) {
    return this.getCache(key)
  }
  setSessionSorage(key: string, value: any) {
    this.setCache(key, value)
  }

  setCache(key: string, value: any, isLocalSorage?: boolean) {
    if (isLocalSorage) {
      localStorage.setItem(this.PROJECT_NAME + key, JSON.stringify(value))
    } else {
      sessionStorage.setItem(this.PROJECT_NAME + key, JSON.stringify(value))
    }
  }

  getCache(key: string, isLocalSorage?: boolean) {
    let value: any = null
    if (isLocalSorage) {
      value = localStorage.getItem(this.PROJECT_NAME + key)
    } else {
      value = sessionStorage.getItem(this.PROJECT_NAME + key)
    }

    try {
      return value ? JSON.parse(value) : ''
    } catch (error) {
      console.error(error)
    }
  }

  deleteCache(key: string, isLocalSorage?: boolean) {
    if (isLocalSorage) {
      localStorage.removeItem(this.PROJECT_NAME + key)
    } else {
      sessionStorage.removeItem(this.PROJECT_NAME + key)
    }
  }

  clearCache(isLocalSorage?: boolean) {
    if (!isLocalSorage) {
      localStorage.clear()
    } else {
      sessionStorage.clear()
    }
  }
}
const cache = new LocalCache(PROJECT_NAME)

export default cache
