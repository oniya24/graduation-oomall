import { useEffect, useState } from 'react';
import { mapStateToProps, mapDispatchToProps } from '@/models/Favorite';
import { ListView, SwipeAction } from 'antd-mobile';
import { connect, history } from 'umi';
import styles from './index.scss';
const favorite = ({
  rawFavoriteList,
  getUserFavoriteLoading,
  getUserFavorite,
  deleteGoodsById,
  ...params
}) => {
  console.log(getUserFavoriteLoading, params);
  const ds = new ListView.DataSource({
    rowHasChanged: () => true,
  });
  const [dataSource, setDataSource] = useState(ds);
  const onRequestMore = () => {
    getUserFavorite();
  };
  const deleteOneFavorite = ({ id }) => {
    deleteGoodsById(id);
  };
  useEffect(() => {
    getUserFavorite();
  }, []);
  useEffect(() => {
    console.log('reset');
    setDataSource(dataSource.cloneWithRows([...rawFavoriteList]));
  }, [rawFavoriteList]);
  function renderItem(rowData, sectionID, rowID) {
    const { goodSku } = rowData;
    const { name, skuSn, imageUrl, inventory, originalPrice, price } = goodSku;
    return (
      <SwipeAction
        style={{ backgroundColor: 'gray' }}
        autoClose
        right={[
          {
            text: '删除',
            onPress: () => deleteOneGood(rowData),
            style: {
              backgroundColor: '#F4333C',
              color: 'white',
              width: '4rem',
            },
          },
        ]}
        onOpen={() => console.log('global open')}
        onClose={() => console.log('global close')}
      >
        <div key={rowID} className={styles.item_contain}>
          <div
            style={{ padding: '15px 0' }}
            className={styles.flex_row_space_around}
          >
            <img
              style={{ height: '64px', marginRight: '15px' }}
              src={imageUrl}
              alt=""
            />
            <div className={styles.flex_row_space_around}>
              <div className={styles.flex_column_space_around}>
                <div style={{ marginBottom: '5px', fontSize: '1.2rem' }}>
                  {' '}
                  {name}{' '}
                </div>
                <p>剩余: {inventory}</p>
              </div>
              <div className={styles.flex_column_space_around}>
                <span style={{ fontSize: '1rem', color: '#FF6E27' }}>
                  {' '}
                  现价:{price} ¥{' '}
                </span>
                <span> 原价:{originalPrice} ¥ </span>
              </div>
            </div>
          </div>
        </div>
      </SwipeAction>
    );
  }
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(favorite);
