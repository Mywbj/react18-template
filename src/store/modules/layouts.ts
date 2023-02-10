import { createSlice } from '@reduxjs/toolkit'

export enum AppThemeAPI {
  light = 'light',
  dark = 'dark'
}

export enum menuModeAPI {
  inline = 'inline',
  horizontal = 'horizontal'
}

interface IInitialState {
  /**
   * 标签栏数据
   */
  navTabs: any[]
  /**
   * 打开布局设置控制器
   */
  drawerOpen: boolean
  /**
   * 语言类型
   */
  language: string
  /**
   * 组件大小
   */
  componentSize: 'small' | 'middle' | 'large' | undefined
  /**
   * 布局的配置
   */
  appConfig: {
    /**
     * 暗黑(dark)、白天(light)
     */
    appTheme: any
    /**
     * 主题颜色
     */
    themeColor: string
    /**
     * 菜单栏收回控制器
     */
    sidebarStatus: boolean
    /**
     * 菜单栏模式
     */
    menuMode: 'inline' | 'horizontal' | 'vertical'
    /**
     * 面包屑导航控制器
     */
    crumbsStatus: boolean
    /**
     * 标签栏控制器
     */
    tabsStatus: boolean
    /**
     * 页脚控制器
     */
    footerStatus: boolean
  }
}

const initialState: IInitialState = {
  navTabs: [],
  drawerOpen: false,
  language: '简体中文',
  componentSize: 'middle',
  appConfig: {
    menuMode: menuModeAPI.inline,
    sidebarStatus: false, // true为收回
    crumbsStatus: true,
    tabsStatus: true,
    footerStatus: false,
    appTheme: AppThemeAPI.light,
    themeColor: ''
  }
}

const layoutSlice = createSlice({
  name: 'layouts',
  initialState,
  reducers: {
    changeAppConfigAction(state: any, { payload }: { payload: object }): any {
      state.appConfig = { ...state.appConfig, ...payload }
    },
    changeTabsAction(state, { payload }) {
      state.navTabs = payload
    },
    changeDrawerOpenAction(state, { payload }) {
      state.drawerOpen = payload
    },
    changeLanguageAction(state, { payload }) {
      state.language = payload
    },
    changeComponentSizeAction(state, { payload }) {
      state.componentSize = payload
    }
  }
})

export const {
  changeAppConfigAction,
  changeTabsAction,
  changeDrawerOpenAction,
  changeLanguageAction,
  changeComponentSizeAction
} = layoutSlice.actions

export default layoutSlice.reducer
