import { mapStateToProps, mapDispatchToProps } from '@/models/Address';
import { connect, history } from 'umi';
import { useEffect, useState } from 'react';
import { Card, Button, Tag } from 'antd-mobile';
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
  const handleDeleteAddress = async ({ id }) => {
    await deleteAddressById(id);
    await getAllAddress({
      page: 1,
      pageSize: 20,
    });
  };
  useEffect(() => {
    getAllAddress({
      page: 1,
      pageSize: 20,
    });
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
        const {
          id,
          regionList,
          detail,
          isDefault,
          consignee,
          mobile,
          state,
        } = item;
        return (
          <div style={{ borderBottom: '1px solid #ddd', marginBottom: 10 }}>
            <div className={styles.item_contain}>
              <div style={{ flex: '1' }}>
                <div>
                  <span>{consignee}</span>
                  <span>{mobile}</span>
                  {isDefault ? <Tag selected>默认地址</Tag> : null}
                </div>
                <div>
                  <span>
                    {regionList.reduce((prev, cur) => {
                      return prev + cur.name + ' ';
                    }, '')}
                  </span>
                  <span>{detail}</span>
                </div>
              </div>
            </div>
            <div className={styles.button_contain}>
              <Button
                style={{ marginRight: 10 }}
                inline
                size="small"
                type="ghost"
                onClick={() => redirect2Edit(item)}
              >
                编辑地址
              </Button>
              <Button
                style={{ marginRight: 10 }}
                inline
                size="small"
                type="warning"
                onClick={() => handleDeleteAddress(item)}
              >
                删除地址
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(address);
