import React from 'react';
import logo from './logo.png'
import {Form,Input,Icon,Button} from "antd";
import "./index.less"

export default class Login extends React.Component{
    render() {
        return (
           <div className="login">
               <header className="login-header">
                   <img src={logo} alt="atguigu"/>
                   <h1>react 后台管理系统</h1>
                 </header>
               <Form className="login-body" onSubmit={this.handleSubmit}>
                   <h2>用户登录</h2>
                   <Form.Item>
                       <Input type="text" placeholder="请输入用户名" prefix={<Icon type="user" />}/>
                   </Form.Item>
                   <Form.Item>
                       <Input type="password" placeholder="请输入密码" prefix={<Icon type="lock" />}/>
                   </Form.Item>
                   <Form.Item>
                   <Button className="login-btn" type="primary" htmlType="submit" >登录</Button>
                   </Form.Item>
               </Form>
           </div>
        );
    };

};