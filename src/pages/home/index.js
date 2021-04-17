import { mapStateToProps, mapDispatchToProps } from '@/models/Home';
import { Card, Carousel, WingBlank, SearchBar, Toast } from 'antd-mobile';
import { connect, history } from 'umi';
import { useEffect } from 'react';
const home = ({
  presaleList,
  grouponList,
  advertisementList,
  allAdvertisementList,
  flashList,
  couponList,
  getAllPresale,
  getAllGroupon,
  getCurrentAdvertisement,
  getAllAdvertisement,
  getCurrentflash,
  getAllCouponActivity,
}) => {
  const handleSearchBarSubmit = () => {
    Toast.info('暂不支持此功能');
  };
  useEffect(() => {
    console.log('拉广告');
    // getCurrentAdvertisement()
    getAllAdvertisement();
    // getAllGroupon({
    //   shopId: 0,
    //   timeline: 0
    // })
    getAllCouponActivity({
      shopId: 0,
      timeline: 0,
      page: 1,
      pageSize: 10,
    });
  }, []);
  return (
    <WingBlank size="sm">
      {/* <SearchBar placeholder="Search" maxLength={8} onSubmit={handleSearchBarSubmit} /> */}
      <Card>
        <Card.Header title="广告"></Card.Header>
        <Card.Body>
          <Carousel
            style={{ marginTop: 5 }}
            autoplay={true}
            dots={false}
            infinite
            // beforeChange={(from, to) =>
            //   console.log(`slide from ${from} to ${to}`)
            // }
            // afterChange={index => console.log('slide to', index)}
          >
            {allAdvertisementList.map(item => {
              return (
                <div>
                  {item.id}
                  <img src={item.imagePath}></img>
                </div>
              );
            })}
          </Carousel>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header title="优惠活动"></Card.Header>
        <Card.Body>
          <Carousel
            style={{ marginTop: 5 }}
            autoplay={true}
            dots={false}
            infinite
          >
            {couponList.map(item => {
              return (
                <div
                  style={{ background: `url(${item.imageUrl})`, height: 180 }}
                  onClick={() => history.push(`/coupon_activity/${item.id}`)}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{
                      height: 180,
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
    </WingBlank>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(home);
