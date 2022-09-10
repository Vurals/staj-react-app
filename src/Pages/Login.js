import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = (props) => {

    const onFinish = (values) => {
        console.log('Success:', values);
        const { username, password } = values;
        props.login(username, password);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Kullanici Adi"
                name="username"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Sifre"
                name="password"
                rules={[{ required: true }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Giris Yap
        </Button>
            </Form.Item>
        </Form>
    );
}


export default Login;