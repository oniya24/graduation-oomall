import React, { useState } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { history } from 'umi';
import styles from './index.scss';
const SingleLayout = props => {
  const handleNavBarClickBack = () => {
    // history.push('/my');
    history.goBack();
  };
  return (
    <div className={styles.layout}>
      <NavBar
        style={{ width: '100%' }}
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={handleNavBarClickBack}
        // rightContent={[
        //   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        //   <Icon key="1" type="ellipsis" />,
        // ]}
      ></NavBar>
      {props.children}
    </div>
  );
};

export default SingleLayout;
