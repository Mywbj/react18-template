import React, { memo } from 'react'
import { LoginWrapper } from './css'
import login_left from '@/assets/images/login_left.png'
import LoginForm from './components/LoginForm'

const Login = memo(() => {
  return (
    <LoginWrapper>
      <div className="login_content">
        <div className="left">
          <img src={login_left} alt="img" />
        </div>
        <div className="right">
          {/* <h2>{!isLogin ? 'Login' : '登录中。。。'}</h2>
          <button onClick={changeLogin}>登陆</button> */}
          <LoginForm />
        </div>
      </div>
    </LoginWrapper>
  )
})

export default Login
