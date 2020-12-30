import React, { useState, useEffect, Fragment } from 'react';
import { connect, history } from 'umi';
import {
  ListView,
  Card,
  Button,
  SwipeAction,
  Modal,
  Stepper,
} from 'antd-mobile';
import { mapStateToProps, mapDispatchToProps } from '@/models/Cart';
import styles from './index.scss';

const Cart = ({
  rawCartList,
  getUserCarts,
  putUserCartsById,
  deleteUserCarts,
  deleteUserCartsById,
}) => {
  const [loading, setLoading] = useState(true);
  const ds = new ListView.DataSource({
    rowHasChanged: () => true,
  });
  const [dataSource, setDataSource] = useState(ds);
  const onRequestMore = () => {
    console.log('req');
    getUserCarts();
  };
  const deleteOneGood = data => {
    deleteUserCartsById();
  };
  const putGoodQuantity = ({ id, goodsSkuId, quantity }) => {
    putUserCartsById({ id, goodsSkuId, quantity });
  };
  const clearAllCart = () => {
    Modal.alert('清空购物车', '确定要清空购物车吗', [
      { text: '取消' },
      { text: '确定', onPress: () => deleteUserCarts() },
    ]);
  };
  useEffect(() => {
    console.log('初始化');
    getUserCarts();
  }, []);
  useEffect(() => {
    console.log('reset');
    setDataSource(dataSource.cloneWithRows([...rawCartList]));
  }, [rawCartList]);
  const renderItem = (rowData, sectionID, rowID) => {
    const { skuName, quantity, price, img, couponActivity } = rowData;
    // {
    //   "skuName": "维他柠檬茶", // 规格名称
    //   "quantity": 2, // 数量
    //   "price": 100, // 价格
    //   "gmtCreate": "string", // 创建时间
    //   "gmtModified": "string", // 修改时间
    //   "couponActivity": [ // 适用的优惠活动
    //     {
    //       "id": 0,
    //       "name": "string",
    //       "beginTime": "string",
    //       "endTime": "string"
    //     }
    //   ],
    //   "img": "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    // }
    return (
      <SwipeAction
        style={{ backgroundColor: 'gray' }}
        autoClose
        right={[
          {
            text: '删除',
            onPress: () => deleteOneGood(rowData),
            style: {
              backgroundColor: '#F4333C',
              color: 'white',
              width: '4rem',
            },
          },
        ]}
        onOpen={() => console.log('global open')}
        onClose={() => console.log('global close')}
      >
        <div key={rowID} className={styles.item_contain}>
          <div
            style={{
              lineHeight: '24px',
              color: '#888',
              borderBottom: '1px solid #F6F6F6',
            }}
          >
            {/* { skuName }  */}
            这里应该是店名
          </div>
          <div
            style={{ padding: '15px 0' }}
            className={styles.flex_row_space_around}
          >
            <img
              style={{ height: '64px', marginRight: '15px' }}
              src={img}
              alt=""
            />
            <div className={styles.flex_column_space_around}>
              <div style={{ marginBottom: '8px', fontSize: '1.2rem' }}>
                {' '}
                {skuName}{' '}
              </div>
              <div className={styles.flex_row_space_between}>
                <span style={{ fontSize: '1.2rem', color: '#FF6E27' }}>
                  {' '}
                  {price} ¥{' '}
                </span>
                <div>
                  <Stepper
                    showNumber
                    style={{ width: '100%', minWidth: '100px' }}
                    showNumber
                    max={10}
                    min={1}
                    size="small"
                    defaultValue={quantity}
                    onChange={quantity =>
                      putGoodQuantity({ ...rowData, quantity })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwipeAction>
    );
  };
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <div className={styles.floatContain}>
        <Button type="warning" size="small" inline onClick={clearAllCart}>
          清空购物车
        </Button>
      </div>
      <ListView
        loading={false}
        dataSource={dataSource}
        renderRow={renderItem}
        // initialListSize = {
        //   20
        // }
        // pageSize = {
        //   20
        // }
        onEndReached={event => {
          onRequestMore();
        }}
        onEndReachedThreshold={2}
        renderFooter={() => <div>已经没有数据啦</div>}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
