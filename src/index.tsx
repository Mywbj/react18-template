import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from '@/App'
import store, { setupStore } from './store'
import 'antd/dist/reset.css'
import '@/assets/css/index.css'

setupStore()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
