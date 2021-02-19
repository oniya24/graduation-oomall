import { mapStateToProps, mapDispatchToProps } from '@/models/Coupon';
import { compactMapState, compactMapDispatch } from '@/utils/reduxUtil';
import { connect, useLocation } from 'umi';
import { useEffect } from 'react';
import { Card } from 'antd-mobile';
import styles from '@/pages/index.scss';
const shop_couponActivity = ({
  activityInCouponList,
  getActivitiesInCoupon,
}) => {
  const { query } = useLocation;
  useEffect(() => {
    const id = 1;
    getActivitiesInCoupon(id);
  }, []);
  return (
    <Card className={styles.page_contain}>
      这里是展示所有店铺优惠活动的界面
    </Card>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(shop_couponActivity);
