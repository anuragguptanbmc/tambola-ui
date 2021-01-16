import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import './App.css';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Chat from './components/Chat';

const { Content } = Layout;

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <AppHeader />
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Chat />
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default App;
