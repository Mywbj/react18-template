import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { ConfigProvider, theme } from 'antd'
import type { SizeType } from 'antd/es/config-provider/SizeContext'
import { ThemeProvider } from 'styled-components'
import { RootState } from './store'
import RouterComponent from './router'
import { AppThemeAPI, changeAppConfigAction } from './store/modules/layouts'
import { localeHandle } from './language'
const { useToken, darkAlgorithm, defaultAlgorithm } = theme

function SetupTheme(porps: { children: JSX.Element }) {
  const { token } = useToken()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeAppConfigAction({ themeColor: token.colorPrimary }))
  }, [])
  return <ThemeProvider theme={token}>{porps.children}</ThemeProvider>
}

const App = () => {
  console.log('App')
  const { appTheme, language, componentSize } = useSelector(
    (state: RootState) => ({
      appTheme: state.layouts.appConfig.appTheme,
      language: state.layouts.language,
      componentSize: state.layouts.componentSize
    }),
    shallowEqual
  )
  return (
    <ConfigProvider
      locale={localeHandle(language)}
      componentSize={componentSize as SizeType}
      theme={{
        algorithm: [appTheme === AppThemeAPI.dark ? darkAlgorithm : defaultAlgorithm]
      }}
    >
      <SetupTheme>
        <BrowserRouter>
          <RouterComponent />
        </BrowserRouter>
      </SetupTheme>
    </ConfigProvider>
  )
}

export default App
