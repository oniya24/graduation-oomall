import { mapStateToProps, mapDispatchToProps } from '@/models/Home';
import { Card, Carousel, WingBlank } from 'antd-mobile';
import { connect } from 'umi';
const home = ({
  presaleList,
  grouponList,
  advertisementList,
  flashList,
  getAllPresale,
  getAllGroupon,
  getCurrentAdvertisement,
  getCurrentflash,
}) => {
  console.log(grouponList);
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
      </Card>
    </WingBlank>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(home);
