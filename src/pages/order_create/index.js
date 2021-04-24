import { mapStateToProps, mapDispatchToProps } from '@/models/OrderCreate';
import { compactMapState, compactMapDispatch } from '@/utils/reduxUtil';
import { connect, useParams, useLocation } from 'umi';
import { useEffect, useState } from 'react';
import { Card, Carousel, Button, List, Picker, Toast } from 'antd-mobile';

const order_create = ({
  buyingSku,
  getAllAddress,
  addressList,
  postOrder,
  getSkuById,
}) => {
  const { imageUrl, detail, originalPrice, name, price, spu } = buyingSku;
  const { query } = useLocation();
  const { skuId, quantity } = query;
  const [address, setAddress] = useState([
    addressList.find(item => item.isDefault),
  ]);
  console.log(address);
  const handleCreateOrder = async () => {
    if (address[0] === undefined || address[0] === null) {
      Toast.fail('请选择收货地址');
    }
    await postOrder({
      orderItems: [
        {
          skuId: skuId,
          quantity: quantity,
        },
      ],
      consignee: address[0].consignee,
      regionId: address[0].regionList[address[0].regionList.length - 1].id,
      address: address[0].detail,
      mobile: address[0].mobile,
      message: '',
    });
  };
  useEffect(() => {
    getSkuById(skuId);
    getAllAddress();
  }, []);
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Card>
        <List>
          <List.Item extra={spu?.name}>商品名</List.Item>
          <List.Item extra={name}>规格</List.Item>
          <List.Item
            extra={<img src={imageUrl} style={{ width: 50, height: 50 }}></img>}
          >
            商品图
          </List.Item>
          <List.Item extra={detail || '暂无'}>细节描述</List.Item>
          <List.Item extra={originalPrice}>原价</List.Item>
          <List.Item extra={price || originalPrice + '元'}>现价</List.Item>
          <List.Item extra={quantity + '件'}>购买数量</List.Item>
        </List>
      </Card>
      <Card>
        <Picker
          data={addressList.map(item => {
            return {
              label:
                item.consignee +
                item.mobile +
                item.regionList.reduce((prev, cur) => {
                  return prev + '' + cur.name;
                }, ''),
              value: item,
            };
          })}
          value={address}
          cols={1}
          onChange={setAddress}
        >
          <List.Item arrow="horizontal">选择收货地址</List.Item>
        </Picker>
      </Card>
      <Button
        type="primary"
        style={{
          width: '100%',
          bottom: 0,
          position: 'absolute',
        }}
        onClick={handleCreateOrder}
      >
        创建订单
      </Button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(order_create);
