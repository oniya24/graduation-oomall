import { mapStateToProps, mapDispatchToProps } from '@/models/Share';
import { connect } from 'umi';
import { useEffect } from 'react';
import { Card, Tabs, Badge, ListView } from 'antd-mobile';
import ShareTab from './components/shareTab';
import BesharedTab from './components/besharedTab';
const tabs = [
  { title: <Badge>分享的商品</Badge> },
  { title: <Badge>收到的分享</Badge> },
];
const share = () => {
  return (
    <Card>
      <Tabs
        tabs={tabs}
        initialPage={0}
        // tabBarUnderlineStyle={{ color: '#ddd' }}
        onChange={(tab, index) => {
          console.log('onChange', index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log('onTabClick', index, tab);
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'auto',
            backgroundColor: '#fff',
          }}
        >
          <ShareTab />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'auto',
            backgroundColor: '#fff',
          }}
        >
          <BesharedTab />
        </div>
      </Tabs>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(share);
