import { configureStore } from '@reduxjs/toolkit'
import loginReducer, { initSorageData } from './modules/login'
import layoutsReducer from './modules/layouts'

// 创建一个 Redux
const store = configureStore({
  reducer: {
    login: loginReducer,
    layouts: layoutsReducer
  }
})

// 初始化存储里面的一些数据
initSorageData(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
