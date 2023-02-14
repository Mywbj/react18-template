import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { DEFAULT_ROUTE } from '@/config/constant'
import cache from '@/utils/cache'

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
  // 处理完毕跳转首页
  data.navigate(DEFAULT_ROUTE.path)
})

interface IInitialState {
  token: string | null
  menus: any[]
}

const initialState: IInitialState = {
  token: null,
  menus: []
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeMenusAction(state, { payload }: PayloadAction<any[]>) {
      state.menus = payload
      cache.setLocalSorage('menus', payload)
    },
    changeTokenAction(state, { payload }: PayloadAction<string>) {
      state.token = payload
      cache.setLocalSorage('token', payload)
    }
  }
})

export const { changeMenusAction, changeTokenAction } = loginSlice.actions

export default loginSlice.reducer
