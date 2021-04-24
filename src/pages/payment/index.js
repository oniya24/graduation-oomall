import { mapStateToProps, mapDispatchToProps } from '@/models/Payment';
import { connect, useLocation } from 'umi';
import { useEffect, useState } from 'react';
import { Card, Button, ActionSheet, List } from 'antd-mobile';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(
  window.navigator.userAgent,
);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
const payment = ({
  //获取订单信息
  getOrderById,
  orderDetail,
  paypatterns,
  getPayPatterns,
  postPayRecord,
  postAftersalePayRecordById,
  getPayRecordById,
}) => {
  const { query } = useLocation(); // 根据模式判断是售后 还是 正常订单
  const { orderId, mode } = query; // 根据模式判断是售后 还是 正常订单
  const [curPayPattern, setCurPayPattern] = useState(0);
  const { discountPrice, freightPrice } = orderDetail;
  useEffect(() => {
    getOrderById(orderId);
  }, []);
  const hanldePaymentSubmit = async () => {
    if (mode) {
      await postPayRecord({
        id: orderId,
        price: Number(discountPrice) + Number(freightPrice),
        paymentPattern: '002',
      });
    } else {
      await postAftersalePayRecordById({
        id: 1,
        price: Number(discountPrice) + Number(freightPrice),
        paymentPattern: '002',
      });
    }
  };
  const handlePaymentActionSheet = () => {
    const BUTTONS = ['支付', '取消'];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        // destructiveButtonIndex: BUTTONS.length - 2,
        // title: 'title',
        message: <Card>39.9</Card>,
        maskClosable: true,
        'data-seed': 'logId',
        wrapProps,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          hanldePaymentSubmit();
        }
      },
    );
  };
  useEffect(() => {
    getPayPatterns(); // 获取支付模式
  }, []);
  return (
    <Card>
      {/* {
      "id": 0,
      "orderId": 0,
      "aftersaleId": 0,
      "amount": 0,
      "actualAmount": 0,
      "payTime": "string",
      "paymentPattern": "string",
      "state": 0,
      "beginTime": "string",
      "endTime": "string",
      "gmtCreate": "string",
      "gmtModified": "string"
    } */}
      <List>
        <List.Item extra={orderDetail.orderSn}>订单编号</List.Item>
        <List.Item extra={orderDetail.originPrice}>原价</List.Item>
        <List.Item extra={orderDetail.freightPrice}>运费</List.Item>
        <List.Item extra={orderDetail.discountPrice}>折扣价</List.Item>
        <List.Item extra={orderDetail.address}>地址</List.Item>
        <List.Item extra={orderDetail.mobile}>电话</List.Item>
        <List.Item extra={orderDetail.consignee}>收件人</List.Item>
        {orderDetail.orderItems ||
          [].map(item => {
            return (
              <>
                <List.Item extra={item.name}>商品名</List.Item>
                <List.Item extra={item.quantity}>商品数量</List.Item>
                <List.Item extra={item.price}>商品价格</List.Item>
              </>
            );
          })}
      </List>
      <Button type="primary" onClick={handlePaymentActionSheet}>
        支付
      </Button>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(payment);
