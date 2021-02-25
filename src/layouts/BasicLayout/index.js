import React, { useState } from 'react';
import { TabBar, NavBar, Icon } from 'antd-mobile';
import { history } from 'umi';
import { basicRoutes as routers } from '@/consts/routers';
import { matchAllRoute, matchRoute } from '@/utils/matchRoutes';
import styles from './index.scss';
export default function BasicLayout(props) {
  const { location } = history;
  const matchAll = matchAllRoute(location);
  const { title, path } = matchAll;
  const [navState, setNavState] = useState(path);
  const handleNavPress = link => {
    setNavState(link);
    history.push(link);
  };
  const handleNavBarClickBack = () => {
    history.push('/my');
  };
  return (
    <div className={styles.layout}>
      <NavBar
        style={{ width: '100%' }}
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={handleNavBarClickBack}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        {title}
      </NavBar>
      <div className={styles.tabBarContainer}>{props.children}</div>
      <TabBar
        tintColor={'#ff4d4d'}
        unselectedTintColor={'#cdcdcd'}
        barTintColor="white"
        tabBarPosition="bottom"
      >
        {routers.map(route => {
          return (
            <TabBar.Item
              title={route.title}
              key={route.path}
              icon={
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    background: route.icon,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    background: route.selectedIcon,
                  }}
                />
              }
              selected={navState === route.path}
              // badge={1}
              onPress={() => handleNavPress(route.path)}
              data-seed="logId"
            ></TabBar.Item>
          );
        })}
      </TabBar>
    </div>
  );
}
