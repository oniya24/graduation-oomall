// import { mapStateToProps, mapDispatchToProps } from '@/models/Coupon';
import { compactMapState, compactMapDispatch } from '@/utils/reduxUtil';
import { connect, history } from 'umi';
import { Card } from 'antd-mobile';
const shop = () => {
  return (
    <div>
      这里是店铺首页的页面
      <Card>
        <Card.Header title="店铺的优惠活动" />
        <Card.Body>
          <div
            style={{ width: '100%', height: '100% ' }}
            onClick={() => history.push('/shop/couponActivity')}
          >
            <img
              src="//img.alicdn.com/tfs/TB1c_LDLXXXXXXoXpXXXXXXXXXX-24-14.png"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(favorite);
export default shop;
