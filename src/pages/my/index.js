import { TabBar, NavBar, Icon, Card, WingBlank, Button } from 'antd-mobile';
import { history } from 'umi';
const my = () => {
  const routesData = [
    {
      title: '收藏',
      path: '/favorite',
    },
    {
      title: '地址管理',
      path: '/address',
    },
    {
      title: '评论内容',
      path: '/comment',
    },
    {
      title: '售后',
      path: '/aftersale',
    },
    {
      title: '订单',
      path: '/order',
    },
    {
      title: '分享',
      path: '/share',
    },
  ];
  return (
    <WingBlank>
      131313 这是我的内容
      <Card>
        <Card.Body>
          {routesData.map(item => {
            return (
              <Button
                size="small"
                inline
                onClick={() => history.push(item.path)}
              >
                {item.title}
              </Button>
            );
          })}
        </Card.Body>
      </Card>
    </WingBlank>
  );
};

export default my;
