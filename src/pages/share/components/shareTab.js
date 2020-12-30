import { mapStateToProps, mapDispatchToProps } from '@/models/Share';
import { connect } from 'umi';
import { Card, Tabs, Badge, ListView } from 'antd-mobile';
import { useEffect, useState } from 'react';

// "id": "string",
// "sharerId": "string",
// "sku": {
//   "id": 0,
//   "name": "string",
//   "skuSn": "string",
//   "imageUrl": "string",
//   "inventory": 0,
//   "originalPrice": 0,
//   "price": 0,
//   "disable": false
// },
// "quantity": 0,
// "gmtCreate": 0
const share_shareTab = ({ shareList, getAllShares }) => {
  console.log(shareList);
  const ds = new ListView.DataSource({
    rowHasChanged: () => true,
  });
  const [dataSource, setDataSource] = useState(ds);
  const onRequestMoreShares = () => {
    getAllShares();
  };
  useEffect(() => {
    getAllShares();
  }, []);
  useEffect(() => {
    console.log('share');
    setDataSource(dataSource.cloneWithRows([...shareList]));
  }, [shareList]);
  const renderItem = (rowData, sectionID, rowID) => {
    const { sku, quantity, gmtCreate } = rowData;
    const { name, imageUrl, skuSn, originalPrice, price } = sku;
    return (
      <Card style={{ margin: 5 }}>
        <Card.Header title={name} />
        <Card.Body style={{ display: 'flex' }}>
          <img src={imageUrl} style={{ height: 100, width: 100 }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '0 10px',
              flex: 1,
            }}
          >
            <span>创建时间: {gmtCreate}</span>
            <span>原价: {originalPrice}</span>
            <span>现价: {price}</span>
          </div>
          <span style={{ alignSelf: 'flex-end' }}>数量: {quantity}</span>
        </Card.Body>
        <Card.Footer content={<p>编号:{skuSn}</p>} />
      </Card>
    );
  };
  return (
    <div style={{ height: '100%', width: '100%' }}>
      Content of first tab
      <ListView
        loading={false}
        dataSource={dataSource}
        renderRow={renderItem}
        // initialListSize pageSize
        onEndReached={event => {
          onRequestMoreShares();
        }}
        onEndReachedThreshold={2}
        renderFooter={() => <div>已经没有数据啦</div>}
        style={{ height: '100vh', width: '100%' }}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(share_shareTab);
