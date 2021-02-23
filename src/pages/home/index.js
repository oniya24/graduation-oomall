import { mapStateToProps, mapDispatchToProps } from '@/models/Home';
import { Card, Carousel, WingBlank } from 'antd-mobile';
import { connect } from 'umi';
import { useEffect } from 'react';
const home = ({
  presaleList,
  grouponList,
  advertisementList,
  allAdvertisementList,
  flashList,
  getAllPresale,
  getAllGroupon,
  getCurrentAdvertisement,
  getAllAdvertisement,
  getCurrentflash,
}) => {
  console.log(grouponList);
  useEffect(() => {
    console.log('拉广告');
    // getCurrentAdvertisement()
    getAllAdvertisement();
  }, []);
  return (
    <WingBlank size="sm">
      <Card>
        <Carousel
          style={{ marginTop: 5 }}
          autoplay={true}
          dots={false}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log('slide to', index)}
        >
          {grouponList.map(item => {
            return (
              <div style={{ background: `url(${item.url})` }}>
                <img
                  src={item.url}
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
        {allAdvertisementList.map(item => {
          return (
            <div>
              {item.id}
              <img src={item.imagePath}></img>
            </div>
          );
        })}
      </Card>
    </WingBlank>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(home);
