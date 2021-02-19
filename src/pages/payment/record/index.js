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
  const { id, mode } = query; // id是订单号, mode是售后还是正常, 好像字段没有区别
  useEffect(() => {
    if (mode) {
      getPayRecordById(id);
    } else {
      getAftersalePayRecordById(id);
    }
  }, []);
  return (
    <Card>
      131313 这是支付的内容
      {mode ? <Card>{payRecord}</Card> : <Card>{aftersaleRecord}</Card>}
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(payment_record);
