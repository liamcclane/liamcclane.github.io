import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router';
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});


const sideMenu = [
  {
    key: `bags`,
    icon: React.createElement(UserOutlined),
    label: `Crochet Bags`,
    children: new Array(4).fill(null).map((_, j) => {
      return {
        key: 'bag' + j,
        label: `bag${j}`,
      };
    }),
  },
  {
    key: `coasters`,
    icon: React.createElement(LaptopOutlined),
    label: `coasters`,
    children: new Array(4).fill(null).map((_, j) => {
      return {
        key: 'coasters' + j,
        label: `coasters${j}`,
      };
    }),
  },
  {
    key: `headwear`,
    icon: React.createElement(NotificationOutlined),
    label: `headware`,
    children: new Array(4).fill(null).map((_, j) => {
      return {
        key: 'headwear' + j,
        label: `headwear${j}`,
      };
    }),
  },
]

const MyLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log(items2);
  console.log(sideMenu);
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          color:"white"
        }}
      >
        Dark Header
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={sideMenu}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default MyLayout;