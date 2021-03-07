import React, { useState, useEffect, Fragment, useMemo } from 'react';
import { Drawer, List, Grid, ActivityIndicator } from 'antd-mobile';
import { mapStateToProps, mapDispatchToProps } from '@/models/Category';
import { connect, history } from 'umi';
import styles from './index.scss';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

const category = ({
  parentCategoryList,
  childrenCategoryList,
  getChildrenCategoryLoading,
  getChildrenCategory,
  getParentCategory,
}) => {
  console.log(getChildrenCategoryLoading);
  const [curParentCategory, setCurParentCategory] = useState(0);
  const gridData = useMemo(() => {
    return childrenCategoryList.map(item => {
      return {
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: item.name,
        id: item.id,
      };
    });
  }, [childrenCategoryList]);
  const sidebar = () => {
    return (
      <List>
        {parentCategoryList.map(item => {
          return (
            <List.Item
              style={{
                background: curParentCategory === item.id ? '#dddddd' : '',
              }}
              // activeStyle={{ background: '#666666' }}
              key={item.id}
              multipleLine
              onClick={() => setCurParentCategory(item.id)}
            >
              {item.name}
            </List.Item>
          );
        })}
      </List>
    );
  };
  useEffect(() => {
    getParentCategory();
  }, []);
  useEffect(() => {
    if (parentCategoryList.length === 0) return;
    setCurParentCategory(parentCategoryList[0].id);
  }, [parentCategoryList]);
  useEffect(() => {
    if (curParentCategory === 0) return;
    getChildrenCategory(curParentCategory);
  }, [curParentCategory]);
  return (
    <Drawer
      className={styles.myDrawer}
      style={{ minHeight: '100%' }}
      sidebarStyle={{ width: 120 }}
      contentStyle={{ color: '#A6A6A6', textAlign: 'center' }}
      sidebar={sidebar()}
      open={true}
      docked={true}
    >
      {getChildrenCategoryLoading ? (
        <ActivityIndicator toast size="large"></ActivityIndicator>
      ) : (
        <Grid
          data={gridData}
          activeStyle={false}
          onClick={({ id }) => history.push(`/category/${id}`)}
          columnNum={3}
          hasLine={true}
        />
      )}
    </Drawer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(category);
