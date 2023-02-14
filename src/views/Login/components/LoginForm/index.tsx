import React, { memo } from 'react'

import { Button, Card, Checkbox, Divider, Form, Input, Space } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  GithubOutlined,
  TwitterOutlined,
  WechatOutlined,
  AlipayCircleOutlined,
  QqOutlined
} from '@ant-design/icons'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { menus } from '@/service/login'
import { AppDispatch } from '@/store'
import { accountLoginThunk } from '@/store/modules/login'

import { FormWrapper } from './css'

const iconStyle = { fontSize: 22 }

const LoginForm = memo(() => {
  const [form] = Form.useForm()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const onLoginFinish = (values: any) => {
    console.log('Finish:', values)
    // setTimeout(() => {
    //   dispatch(accountLoginThunk({ navigate, menus, token: 123 }))
    // }, 2000)
  }

  return (
    <FormWrapper>
      <Card bodyStyle={{ padding: '24px 34px' }}>
        <h2 className="title">登陆</h2>
        <Form form={form} name="horizontal_login" onFinish={onLoginFinish}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入您的用户名!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入您的密码!' }]}>
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <div className="checked_box">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="login-form-forgot">忘记密码？</a>
            </div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登陆
            </Button>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button>手机登陆</Button>
              <Button>注册</Button>
            </Space>
          </Form.Item>
          <Form.Item>
            <div className="third_party_login">
              <Divider>其他登陆方式</Divider>
              <div className="third_party_logos">
                <GithubOutlined style={iconStyle} />
                <TwitterOutlined style={iconStyle} />
                <WechatOutlined style={iconStyle} />
                <QqOutlined style={iconStyle} />
                <AlipayCircleOutlined style={iconStyle} />
              </div>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </FormWrapper>
  )
})

export default LoginForm
