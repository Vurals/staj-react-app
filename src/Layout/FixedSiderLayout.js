import { CopyrightOutlined, } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import MenuComp from '../components/MenuComp'
import Logo1 from "../icons/netcad-logo.png"
import TableComp from '../components/TableComp'
import '../index.css';
import 'antd/dist/antd.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;

const PageLayout = (props) => (
    <Layout hasSider>
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div className="logo">
                <img src={Logo1} width={170} height={50} />
            </div>
            <MenuComp key={'MenuC1'} > </MenuComp>
          
            
        </Sider>
        <Layout
            className="site-layout"
            style={{
                marginLeft: 200,
            }}
        >
            
            <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                }}
            >   <Menu key={'MenuC2'}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(3).fill(null).map((_, index) => ({
                        key: String(index + 1),
                        label: `nav ${index + 1}`,
                    }))}
                > </Menu> </Header>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >

                {props.children}

            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                All rights are reserved <CopyrightOutlined />
            </Footer>
        </Layout>
    </Layout>
);

export default PageLayout;

//Old content table
{/*    style={{*/ }
{/*        margin: '24px 16px 0',*/ }
{/*        overflow: 'initial',*/ }
{/*    }}*/ }
{/*>*/ }
{/*    <div*/ }
{/*        className="site-layout-background"*/ }
{/*        style={{*/ }
{/*            padding: 24,*/ }
{/*            textAlign: 'center',*/ }
{/*        }}*/ }
{/*    >*/ }
{/*        <TableComp key={'TableC'}> </TableComp>*/ }
{/*    </div>*/ }