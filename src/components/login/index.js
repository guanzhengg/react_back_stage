import React from 'react';
import logo from './logo.png'
import {Form, Input, Icon, Button, message} from "antd";
// import axios from 'axios'
//封装过axios 拦截器 所有改用拦截器

import axios from '../../api/request'
import "./index.less"
import {connect} from 'react-redux'
import {usermsg} from "../../redux/action-creators";

@connect(
    null,
    {usermsg}
)
@Form.create()
class Login extends React.Component {
    /**
     * 自定义表单校验的方法
     * @param rule 包含表单项字段
     * @param value 表单项的值
     * @param callback 当callback传参时，说明校验失败，并提示传入参数。 当callback没有参数，说明校验成功
     */
    validator = (rule, value, callback) => {
        const name = rule.field === 'username' ? '用户名' : '密码';

        if (!value) {
            return callback(`请输入${name}`);
        }

        if (value.length < 3) {
            return callback(`${name}长度必须大于3位`);
        }

        if (value.length > 16) {
            return callback(`${name}长度必须小于16位`);
        }

        const reg = /^[a-zA-Z0-9_]{3,13}$/;
        if (!reg.test(value)) {
            return callback(`${name}输入不合法`);
        }

        // callback必须调用
        callback();
    };
    handleSubmit = (event) => {
        event.preventDefault();
        //validateFields 校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
        this.props.form.validateFields((err, values) => {
            console.log(err, values);
            if (!err) {
                const {username, password} = values;
                //服务器是 localhost5000 需要代理服务器 去package.json 配置 "proxy": "http://localhost:5000"
                axios.post("/login", {username, password})

                    .then((result) => {

                        //请求成功 并且请求功能正确即 status===0
                        // if (response.data.status === 0) {

                            //保存用户信息和token到redux
                            console.log(result);
                            this.props.usermsg(result);
                            message.success('登陆成功');
                            //重定向到home

                            this.props.history.replace("/")
                        // }
                        // else {
                        //     // this.props.form.resetFields(['password'])
                        //     message.error(response.data.msg);
                        //
                        // }
                    })
                    // .catch((error) => {
                        // this.props.form.resetFields(['password'])
                        // message.error('网络错误');
                    // })
                    //.finally 不管成功失败都调用
                    .catch( ()=>{
                        this.props.form.resetFields(['password'])
                        })
            }
        })


    };

    render() {
        const {getFieldDecorator} = this.props.form;
        console.log(1, this.props);
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="atguigu"/>
                    <h1>react 后台管理系统</h1>
                </header>
                <Form className="login-body" onSubmit={this.handleSubmit}>
                    <h2>用户登录</h2>
                    <Form.Item>

                        {getFieldDecorator('username', {
                            // rules: [{ required: true, message: '请输入用户名' },
                            //     {   max:16 ,message:"长度不超过16"},
                            //     {min :3,message:"长度不少于3"},
                            //     {pattern:/^[a-zA-Z0-9_]{3-16}$/  , message:"请输入合法字符"}
                            // ],
                            rules: [{validator: this.validator}],
                        })(
                            <Input type="text" placeholder="请输入用户名" prefix={<Icon type="user"/>}/>
                        )}


                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('password', {
                                rules: [{validator: this.validator}],
                            })(
                                <Input type="password" placeholder="请输入密码" prefix={<Icon type="lock"/>}/>
                            )}


                    </Form.Item>
                    <Form.Item>
                        <Button className="login-btn" type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    };

}

export default Login
