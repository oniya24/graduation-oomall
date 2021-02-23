import { useEffect, useState, useCallback } from 'react';
import {
  ListView,
  Card,
  Button,
  SwipeAction,
  Modal,
  Stepper,
} from 'antd-mobile';
import { mapStateToProps, mapDispatchToProps } from '@/models/Comment';
import { connect } from 'umi';
const comment = ({ getAllComments, rawCommentList }) => {
  const ds = new ListView.DataSource({
    rowHasChanged: () => true,
  });
  const [dataSource, setDataSource] = useState(ds);
  useEffect(() => {
    console.log('初始化');
    getAllComments({
      page: 1,
      pageSize: 10,
    });
  }, []);
  useEffect(() => {
    console.log('reset');
    setDataSource(dataSource.cloneWithRows([...rawCommentList]));
  }, [rawCommentList]);
  const renderItem = useCallback(item => {
    return (
      <div>
        1315313
        {JSON.stringify(item)}
      </div>
    );
  }, []);
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

export default connect(mapStateToProps, mapDispatchToProps)(comment);
