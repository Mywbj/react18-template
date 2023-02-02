import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 这里统一加载缓存的一些数据
export const loadLocalLogin = createAsyncThunk('login/loadLocalLogin', (_, { dispatch }) => {
  const menus = localStorage.getItem('menus')
  if (menus) {
    dispatch(changeMenusAction(JSON.parse(menus)))
  }
})

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    menus: [],
    count: []
  },
  reducers: {
    changeMenusAction(state, { payload }) {
      state.menus = payload
      localStorage.setItem('menus', JSON.stringify(payload))
    }
  }
})

export const { changeMenusAction } = loginSlice.actions

export default loginSlice.reducer
