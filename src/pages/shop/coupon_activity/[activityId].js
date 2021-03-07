import { mapStateToProps, mapDispatchToProps } from '@/models/Shop';
import { compactMapState, compactMapDispatch } from '@/utils/reduxUtil';
import { connect, useParams } from 'umi';
import { useEffect } from 'react';
import { Card, Carousel } from 'antd-mobile';
import styles from '@/pages/index.scss';
const shop_couponActivity = ({
  couponSpuList,
  getSkuInCoupon
}) => {
  const { activityId } = useParams();
  console.log(couponSpuList)
  useEffect(() => {
    getSkuInCoupon({
      id: activityId,
      page: 1,
      pageSize: 1000
    })
  }, []);
  return (
    <Card>
      <Card.Header title="优惠商品"></Card.Header>
      <Card.Body>
        <Carousel
          style={{ marginTop: 5 }}
          autoplay={true}
          dots={false}
          infinite
        >
          {couponSpuList.map(item => {
            return (
              <div style={{ background: `url(${item.imageUrl})` }}>
                <img
                  src={item.imageUrl}
                  alt=""
                  style={{
                    width: '100%',
                    verticalAlign: 'top',
                    objectFit: 'cover',
                  }}
                />
              </div>
            );
          })}
        </Carousel>
      </Card.Body>
    </Card>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(shop_couponActivity);
