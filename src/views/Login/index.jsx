import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeMenusAction } from '@/store/modules/login'
import { LoginWrapper } from './css'
import { menus } from '@/service/login'
import { DEFAULT_PATH } from '@/config/constant'

const Login = memo(() => {
  const [isLogin, setIsLogin] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function changeLogin() {
    setIsLogin(!isLogin)
    setTimeout(() => {
      dispatch(changeMenusAction(menus))
      localStorage.setItem('token', 123)
      navigate(DEFAULT_PATH.path)
    }, 2000)
  }
  return (
    <LoginWrapper>
      <h2>{!isLogin ? 'Login' : '登录中。。。'}</h2>
      <button onClick={changeLogin}>登陆</button>
    </LoginWrapper>
  )
})

export default Login
