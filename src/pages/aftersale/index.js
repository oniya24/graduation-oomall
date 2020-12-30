import { useEffect, useState } from 'react';
import { mapStateToProps, mapDispatchToProps } from '@/models/Aftersale';
import { Button, ListView, SwipeAction, Card, Steps } from 'antd-mobile';
import { connect, history } from 'umi';
import { compactMapState, compactMapDispatch } from '@/utils/reduxUtil.tsx';
import styles from './index.scss';
import { aftersaleTypesPlain, orderStatePlain } from '@/consts/mall';
const { Step } = Steps;
// "type": 0, // 类型
// "reason": "string", // 理由
// "refund": 0, // 退课金额
// "quantity": 0, // 数量
// "regionId": 0, // 地址
// "detail": "string", // 详细地址
// "consignee": "string", // 收件人
// "mobile": "string", // 手机
// "customerLogSn": "string", //
// "shopLogSn": "string",
// "state": 0 // 当前状态
const favorite = ({
  rawAftersaleList,
  getAllAftersale,
  putAftersaleConfirm,
  deleteAftersaleById,
}) => {
  const ds = new ListView.DataSource({
    rowHasChanged: () => true,
  });
  const [dataSource, setDataSource] = useState(ds);
  const onRequestMore = () => {
    getAllAftersale();
  };
  const deleteOneFavorite = ({ id }) => {
    // deleteGoodsById(id)
    deleteAftersaleById(id);
  };
  const confirmAftersale = ({ id }) => {
    putAftersaleConfirm(id);
  };
  useEffect(() => {
    getAllAftersale();
  }, []);
  useEffect(() => {
    setDataSource(dataSource.cloneWithRows([...rawAftersaleList]));
  }, [rawAftersaleList]);
  function renderItem(rowData, sectionID, rowID) {
    const {
      id,
      shopId,
      serviceSn,
      type,
      reason,
      refund,
      quantity,
      detail,
      consignee,
      state,
    } = rowData;
    return (
      <Card key={rowID} style={{ padding: '10px 15px' }}>
        <Card.Header title={shopId} />
        <Card.Body onClick={() => history.push(`/aftersale/detail?id=${id}`)}>
          {
            // "type": 0, // 类型
            // "reason": "string", // 理由
            // "refund": 0, // 退课金额
            // "quantity": 0, // 数量
            // "regionId": 0, // 地址
            // "detail": "string", // 详细地址
            // "consignee": "string", // 收件人
            // "mobile": "string", // 手机
            // "customerLogSn": "string", //
            // "shopLogSn": "string",
            // "state": 0 // 当前状态
          }
          <div>
            <p>售后类型: {aftersaleTypesPlain[type]}</p>
            <p>当前进度: {orderStatePlain[state]}</p>
            <p>退款金额: {refund}</p>
          </div>
        </Card.Body>
        <Card.Footer
          content={
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                style={{ margin: '0 5px' }}
                size="small"
                inline
                type="warning"
                onClick={() => deleteOneFavorite(rowData)}
              >
                {Number(state) === 0 ? '取消售后' : '删除记录'}
              </Button>
              <Button
                style={{ margin: '0 5px' }}
                size="small"
                inline
                type="primary"
                onClick={() => putAftersaleConfirm(rowData)}
              >
                确认完成
              </Button>
            </div>
          }
        />
      </Card>
    );
  }
  return (
    <div className={styles.aftersale_contain}>
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

export default connect(mapStateToProps, mapDispatchToProps)(favorite);
