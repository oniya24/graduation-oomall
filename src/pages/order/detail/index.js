import { mapStateToProps, mapDispatchToProps } from '@/models/Order';
import { connect, useLocation, history } from 'umi';
import { useEffect } from 'react';
import { Button, Picker, List, Card } from 'antd-mobile';
import { orderStatePlain } from '@/consts/mall';
// {
//   "id": 0,
//   "orderSn": "string",
//   "customer": {
//     "id": 0,
//     "userName": "string",
//     "name": "string"
//   },
//   "shop": {
//     "id": 0,
//     "name": "string",
//     "state": 0,
//     "gmtCreate": "string",
//     "gmtModified": "string"
//   },
//   "pid": 0,
//   "orderType": 0,
//   "state": 0,
//   "subState": 0,
//   "gmtCreate": "string",
//   "gmtModified": "string",
//   "confirmTime": "string",
//   "originPrice": 0,
//   "discountPrice": 0,
//   "freightPrice": 0,
//   "rebateNum": 0,
//   "message": "string",
//   "regionId": 0,
//   "address": "string",
//   "mobile": "string",
//   "consignee": "string",
//   "couponId": 0,
//   "grouponId": 0,
//   "presaleId": 0,
//   "shipmentSn": "string",
//   "orderItems": [
//     {
//       "skuId": 0,
//       "orderId": 0,
//       "name": "string",
//       "quantity": 0,
//       "price": 0,
//       "discount": 0,
//       "couponActId": 0,
//       "beSharedId": 0
//     }
//   ]
// }
const order_detail = ({
  orderDetail,
  getOrderById,
  putOrder2NormalById,
  putOrderByIdReq,
}) => {
  console.log(getOrderById);
  const { query } = useLocation();
  const { id } = query;
  const { orderSn, orderItems } = orderDetail;
  console.log(orderDetail);
  useEffect(() => {
    console.log('????');
    getOrderById(id);
  }, []);
  return (
    <div>
      <Card>
        <Card.Header title="订单内容" />
        <Card.Body>
          {orderItems &&
            orderItems.map(item => {
              const { name, quantity, price, discount } = item;
              return (
                <div key={name}>
                  <p>商品名:{name}</p>
                  <p>数量: {quantity}件 </p>
                  <p>价格: {price}￥</p>
                  <p>折扣: {discount}</p>
                </div>
              );
            })}
        </Card.Body>
      </Card>
      <Card>
        <Card.Header title="订单信息" />
        <Card.Body>
          <div>
            <p>订单编号:{orderSn}</p>
          </div>
        </Card.Body>
      </Card>
      <div>
        <Button size="small" inline onClick={() => putOrder2NormalById()}>
          将团购订单转成普通订单
        </Button>
        <Button size="small" inline onClick={() => putOrder2NormalById()}>
          修改订单
        </Button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(order_detail);
