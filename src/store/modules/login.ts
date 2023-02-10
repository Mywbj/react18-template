import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { DEFAULT_PATH } from '@/config/constant'
import cache from '@/utils/cache'

// 这里统一加载缓存的一些数据
export const loadLocalLogin = createAsyncThunk('login/loadLocalLogin', (_, { dispatch }) => {
  const menus = cache.getLocalSorage('menus')
  if (menus) {
    dispatch(changeMenusAction(menus))
  }
  const token = cache.getLocalSorage('token')
  if (token) {
    dispatch(changeTokenAction(token))
  }
})

/**
 * 初始化存储里面的数据
 */
export function initSorageData(store: ToolkitStore) {
  const menus = cache.getLocalSorage('menus')
  if (menus) {
    store.dispatch(changeMenusAction(menus))
  }
  const token = cache.getLocalSorage('token')
  if (token) {
    store.dispatch(changeTokenAction(token))
  }
}

/**
 * 登陆处理数据
 */
export const accountLoginThunk = createAsyncThunk('login/accountLoginThunk', (data: any, { dispatch }) => {
  dispatch(changeMenusAction(data.menus))
  dispatch(changeTokenAction(data.token))
  data.navigate(DEFAULT_PATH.path)
})

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    menus: []
  },
  reducers: {
    changeMenusAction(state, { payload }) {
      state.menus = payload
      cache.setLocalSorage('menus', payload)
    },
    changeTokenAction(state, { payload }) {
      state.token = payload
      cache.setLocalSorage('token', payload)
    }
  }
})

export const { changeMenusAction, changeTokenAction } = loginSlice.actions

export default loginSlice.reducer
