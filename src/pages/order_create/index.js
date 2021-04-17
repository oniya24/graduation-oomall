import { mapStateToProps, mapDispatchToProps } from '@/models/OrderCreate';
import { compactMapState, compactMapDispatch } from '@/utils/reduxUtil';
import { connect, useParams, useLocation } from 'umi';
import { useEffect } from 'react';
import { Card, Carousel, Button } from 'antd-mobile';

const order_create = ({ postOrder, getSkuById }) => {
  const { query } = useLocation();
  const { skuId, quantity } = query;
  const handleCreateOrder = () => {
    postOrder();
  };
  useEffect(() => {
    getSkuById(skuId);
  }, []);
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Card>
        <Card.Header title="商品信息"></Card.Header>
      </Card>
      <Card>
        <Card.Header title="选择收货地址"></Card.Header>
      </Card>
      <Button onClick={postOrder}>创建订单</Button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(order_create);
