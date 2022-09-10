import React from "react";
import { Routes } from 'react-router-dom';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

export const MenuComp = (props) => {
    
    return (
        <Menu
            theme="dark"
            mode="inline"
        >
            
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1"> <Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"> <Link to="/about">About</Link></Menu.Item>
                <Menu.Item key="3"> <Link to="/login">Login</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/cart">Shopping Cart</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="menu1" icon={<VideoCameraOutlined />} title="nav2"> nav2 </Menu.Item>
            <Menu.Item key="menu2" icon={<UploadOutlined />} title="nav3"> nav3 </Menu.Item>
            
        </Menu>
    );
};

export default MenuComp;