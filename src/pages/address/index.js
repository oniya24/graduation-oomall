import { mapStateToProps, mapDispatchToProps } from '@/models/Address';
import { connect, history } from 'umi';
import { useEffect, useState } from 'react';
import { Card, Button } from 'antd-mobile';
import styles from './index.scss';
import circle_plus from '@/public/circle_plus.svg';

const address = ({
  addressList,
  getAllAddress,
  postAddress,
  putDefaultAddress,
  saveDetail,
  putAddressById,
  deleteAddressById,
  getParentRegion,
}) => {
  const redirect2Edit = item => {
    saveDetail(item);
    history.push('/address/edit');
  };
  const redirect2Create = item => {
    history.push('/address/create');
  };
  useEffect(() => {
    getAllAddress({
      page: 1,
      pageSize: 20,
    });
    getParentRegion(100000);
    saveDetail({});
  }, []);
  return (
    <div className={styles.address_contain}>
      <img
        className={styles.address_add}
        src={circle_plus}
        onClick={redirect2Create}
      />
      {addressList.map(item => {
        const { id, region_id, detail, consignee, mobile, state } = item;
        return (
          <div className={styles.item_contain}>
            <div style={{ flex: '1' }}>
              <div>
                <span>{consignee}</span>
                <span>{mobile}</span>
              </div>
              <div>
                <span>{region_id}</span>
                <span>{detail}</span>
              </div>
            </div>
            <Button
              inline
              size="small"
              type="ghost"
              onClick={() => redirect2Edit(item)}
            >
              编辑地址
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(address);
