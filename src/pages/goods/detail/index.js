import { mapStateToProps, mapDispatchToProps } from '@/models/Goods';
import { connect, useLocation } from 'umi';
import { Card } from 'antd-mobile';
import { useEffect } from 'react';
const goods_detail = ({ getSkuById, getGoodSpuById, goodSpu, goodSku }) => {
  useEffect(() => {
    getSkuById();
    getGoodSpuById();
  }, []);
  return (
    <Card
      style={{ height: '100%', width: '100%', position: 'relative' }}
    ></Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(goods_detail);
