import { mapStateToProps, mapDispatchToProps } from '@/models/Payment';
import { connect, useLocation } from 'umi';
import { useEffect } from 'react';
import { Card, Button } from 'antd-mobile';
const payment_record = ({
  payRecord,
  getPayRecordById,
  aftersaleRecord,
  getAftersalePayRecordById,
}) => {
  const { query } = useLocation();
  const { orderId, mode } = query; // id是订单号, mode是售后还是正常, 好像字段没有区别
  useEffect(() => {
    if (mode) {
      getPayRecordById(orderId);
    } else {
      getAftersalePayRecordById(orderId);
    }
  }, []);
  return (
    <Card>
      131313 这是支付的内容
      {mode ? (
        <Card>{JSON.stringify(payRecord)}</Card>
      ) : (
        <Card>{JSON.stringify(aftersaleRecord)}</Card>
      )}
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(payment_record);
