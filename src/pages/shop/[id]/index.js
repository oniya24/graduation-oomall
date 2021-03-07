import { mapStateToProps, mapDispatchToProps } from '@/models/Shop';
import { compactMapState, compactMapDispatch } from '@/utils/reduxUtil';
import { connect, history, useParams, useLocation } from 'umi';
import { Card, Carousel, Grid, ListView } from 'antd-mobile';
import { useEffect, useState } from 'react';
const shop = ({
  couponActivityList,
  getActivitiesInCoupon,
  spuList,
  getAllSpuList,
  refreshSpuList
}) => {
  const { pathname } = useLocation()
  const { id } = useParams()
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  const ds = new ListView.DataSource({
    rowHasChanged: () => true,
  });
  const [dataSource, setDataSource] = useState(ds);
  const onRequestMore = () => {
    getAllSpuList({
      shopId: id,
      page: page+1,
      pageSize: 10
    })
    setPage(page+1)
  };
  const renderItem = (item) => {
    const { name, imageUrl, goodsSn, id } = item
    const { brand, category } = item
    const { name:brandName } = brand
    const { name:categoryName } = category
    return(
      <Card size="small">
        <Card.Header title={ name }></Card.Header>
        <Card.Body 
          style={{ display: 'flex', padding: '10px 30px' }}
          onClick={() => history.push(`${pathname}/spu/${id}`)}
        >
          <div>
            <img src={imageUrl} style={{ height: 120, width: 120}}></img>
          </div>
          <div style={{ marginLeft: 40}}>
            <p>品牌名:{brandName}</p>
            <p>分类:{categoryName}</p>
            <p>产品编号:{goodsSn}</p>
          </div>
        </Card.Body>
      </Card>
    )
  }
  useEffect(() => {
    setDataSource(dataSource.cloneWithRows([...spuList]));
  }, [spuList]);
  useEffect(() => {
    getActivitiesInCoupon({
      shopId: id,
      timeline: 0
    })
    getAllSpuList({
      shopId: id,
      page: page,
      pageSize: 10
    })
    return () => {
      refreshSpuList()
    }
  }, [])
  return (
    <div style={{height: '100%', width: '100%' }}>
      <Card>
        <Card.Header title="优惠活动"></Card.Header>
        <Card.Body>
          <Carousel
            style={{ marginTop: 5 }}
            autoplay={true}
            dots={false}
            infinite
          >
            {couponActivityList.map(item => {
              return (
                <div style={{ background: `url(${item.imageUrl})`, height: 180 }}
                  onClick={() => history.push(`/shop/coupon_activity/${item.id}`)}>
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
      <ListView
        loading={false}
        dataSource={dataSource}
        renderRow={renderItem}
        // initialListSize = {
        //   20
        // }
        // pageSize = {
        //   20
        // }
        onEndReached={event => {
          onRequestMore();
        }}
        onEndReachedThreshold={2}
        renderFooter={() => <div>已经没有数据啦</div>}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(shop);
