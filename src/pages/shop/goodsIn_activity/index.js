import { mapStateToProps, mapDispatchToProps } from '@/models/Coupon';
import { compactMapState, compactMapDispatch } from '@/utils/reduxUtil';
import { connect } from 'umi';
import { useEffect } from 'react';
const shop_couponActivity = ({
  activityInCouponList,
  getActivitiesInCoupon,
}) => {
  useEffect(() => {
    const id = 1;
    getActivitiesInCoupon(id);
  }, []);
  return <div>这里是展示某个活动下的商品的界面</div>;
};

// export default connect(mapStateToProps, mapDispatchToProps)(favorite);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(shop_couponActivity);
