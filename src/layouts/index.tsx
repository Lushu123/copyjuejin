import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import styles from './index.less';
import { Link } from 'umi';

const menuData = [
  { route: '/hero', name: '英雄' },
  { route: '/item', name: '局内道具' },
  { route: '/summoner', name: '召唤师技能' },
];
interface Layout {
  children: React.ReactNode;
  location: {
    pathname: string;
  };
}
const BasicLayout: FC<Layout> = ({
  children,
  location,
  location: { pathname },
}) => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header>
        <div className={styles.logo}>王者荣耀资料库</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultOpenKeys={[pathname]}
          style={{ lineHeight: '65px' }}
        >
          {menuData.map(menu => (
            <Menu.Item key={`/${menu.route}`}>
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Umi 入门教程</Footer>
    </Layout>
  );
};

export default BasicLayout;
