import { mapStateToProps, mapDispatchToProps } from '@/models/Order';
import { useState, useEffect } from 'react';
import { ListView, SwipeAction, Button, Card } from 'antd-mobile';
import { connect, history } from 'umi';
import { orderTypePlain } from '@/consts/mall';
const order = ({
  rawOrderList,
  getAllOrder,
  deleteOrderById,
  putOrderConfirmById,
  ...params
}) => {
  const ds = new ListView.DataSource({
    rowHasChanged: () => true,
  });
  const [dataSource, setDataSource] = useState(ds);
  const onRequestMore = () => {
    getAllOrder();
  };
  const deleteOneRecord = ({ id }) => {
    deleteOrderById(id);
  };
  const confirmOrder = ({ id }) => {
    putOrderConfirmById(id);
  };
  useEffect(() => {
    getAllOrder();
  }, []);
  useEffect(() => {
    console.log('reset');
    setDataSource(dataSource.cloneWithRows([...rawOrderList]));
  }, [rawOrderList]);
  function renderItem(rowData, sectionID, rowID) {
    const {
      id,
      shipmentSn,
      skuSn,
      orderType,
      originPrice,
      discountPrice,
      freightPrice,
      state,
    } = rowData;
    return (
      <SwipeAction
        style={{ backgroundColor: 'gray' }}
        autoClose
        right={[
          {
            text: '删除',
            onPress: () => deleteOneRecord(rowData),
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
        <Card key={rowID} style={{ padding: '0 15px' }}>
          <Card.Header title={skuSn} />
          <div style={{ padding: '15px 0' }}>
            <div>
              <span>原价: {discountPrice}</span>
              <span
                style={{
                  fontSize: '1.2rem',
                  margin: '0 10px',
                  color: '#FF6E27',
                }}
              >
                折后价: {discountPrice}¥
              </span>
            </div>
            <p>运费: {freightPrice}</p>
            <p>购买类型: {orderTypePlain[orderType]}</p>
          </div>
          <Card.Footer
            content={
              <div>
                {state === 0 ? (
                  <Button
                    inline
                    size="small"
                    onClick={() => confirmOrder(rowData)}
                  >
                    确认收货
                  </Button>
                ) : null}
                <Button
                  inline
                  size="small"
                  onClick={() => history.push(`order/detail?id=${id}`)}
                >
                  查看详情
                </Button>
              </div>
            }
          />
        </Card>
      </SwipeAction>
    );
  }
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(order);
