import { mapStateToProps, mapDispatchToProps } from '@/models/Payment';
import { connect, useLocation } from 'umi';
import { useEffect } from 'react';
import { Card, Button } from 'antd-mobile';
const payment_refund = ({
  payRefund,
  getRefundById,
  aftersaleRefund,
  getAftersaleRefundById,
}) => {
  const { query } = useLocation();
  const { orderId, mode } = query; // id是订单号, mode是售后还是正常, 好像字段没有区别
  useEffect(() => {
    if (mode) {
      getRefundById(id);
    } else {
      getAftersaleRefundById(id);
    }
  }, []);
  return (
    <Card>
      131313 这是支付的内容
      {mode ? <Card>{payRefund}</Card> : <Card>{aftersaleRefund}</Card>}
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(payment_refund);
