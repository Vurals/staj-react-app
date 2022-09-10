import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import MenuComp from './components/MenuComp'
import { Layout } from 'antd';
import Logo1 from './icons/netcad-logo.png'
import { CopyrightOutlined } from '@ant-design/icons';
import TableComp from './components/TableComp'

const { Header, Content, Footer, Sider } = Layout;

const ResponsiveLayoutDemo = () => {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo">
                    <img src={Logo1} width={170} height={ 50} />
                </div>
                <MenuComp key={'MenuC'} > </MenuComp>
            </Sider>
            <Layout>
                <Header
                    className="site-layout-sub-header-background"
                    style={{
                        padding: 0,
                    }}

                />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <TableComp key={'TableC'}> </TableComp>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center'
                    }}
                >
                    All rights are reserved <CopyrightOutlined />
      </Footer>
            </Layout>
        </Layout>
    );
}

export default ResponsiveLayoutDemo;