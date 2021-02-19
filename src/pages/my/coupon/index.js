import { mapStateToProps, mapDispatchToProps } from '@/models/Coupon';
import { connect } from 'umi';
import { Card, Badge } from 'antd-mobile';
import styles from '@/pages/index.scss';
import { useEffect } from 'react';
const tabs = [
  { title: <Badge>分享的商品</Badge> },
  { title: <Badge>收到的分享</Badge> },
  { title: <Badge>分享的活动</Badge> },
];
const coupon = ({ couponList, getAllCoupon }) => {
  useEffect(() => {
    getAllCoupon();
  }, []);
  return <Card className={styles.page_contain}>13135131</Card>;
};

export default connect(mapStateToProps, mapDispatchToProps)(coupon);
