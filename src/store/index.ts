import { configureStore } from '@reduxjs/toolkit'
import loginReducer, { loadLocalLogin } from './modules/login'
import layoutsReducer from './modules/layouts'

// 创建一个 Redux
const store = configureStore({
  reducer: {
    login: loginReducer,
    layouts: layoutsReducer
  }
})

// 统一在这里初始化一些缓存的数据
export function setupStore() {
  // 这里是缓存的菜单，程序加载会先调用这个
  store.dispatch(loadLocalLogin())
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
