import { mapStateToProps, mapDispatchToProps } from '@/models/Shop';
import { compactMapState, compactMapDispatch } from '@/utils/reduxUtil';
import { connect, history, useParams, useLocation } from 'umi';
import { Card, Carousel, Grid, ListView } from 'antd-mobile';
import { useEffect, useState } from 'react';
import styles from './index.scss';

const shop = ({ getAllShops, shopList }) => {
  useEffect(() => {
    getAllShops();
  }, []);
  return (
    <div style={{ height: '100%', width: '100%', overflow: 'auto' }}>
      {shopList.map(item => {
        return (
          <div
            className={styles.shop_contain}
            onClick={() => {
              history.push(`/shop/${item.id}`);
            }}
          >
            <img
              src="http://oomall.finetoo.top/static/shop.svg"
              style={{
                width: 32,
                height: 32,
              }}
            ></img>
            <span className={styles.shop_name}>{item.name}</span>
            <span className={styles.shop_name}>欢迎来到店里</span>
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(shop);
