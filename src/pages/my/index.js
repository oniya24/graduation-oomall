import { TabBar, NavBar, Icon, Card, WingBlank, Button } from 'antd-mobile';
import { history } from 'umi';
import { orderRelatedData, favoAndShareData } from '@/consts/mall';
import styles from './index.scss';
const my = () => {
  return (
    <WingBlank size="sm">
      <Card style={{ marginTop: 5 }}>
        <Card.Body style={{ display: 'flex' }}>
          <img
            style={{ width: '5rem', height: '5rem' }}
            src={'http://oomall.finetoo.top/static/default_avatar.svg'}
          ></img>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={() => history.push('/my/info')}
              className={styles.infoChangeButton}
              size="small"
              inline
            >
              编辑个人信息
            </Button>
            <Button
              onClick={() => history.push('/address')}
              className={styles.infoChangeButton}
              size="small"
              inline
            >
              修改地址
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ marginTop: 5 }}>
        <div style={{ display: 'flex', borderBottom: 'solid 1px #dddddd' }}>
          {favoAndShareData.map(item => {
            return (
              <div
                className={styles.iconButtonRow}
                onClick={() => history.push(item.path)}
              >
                <img src={item.icon} style={{ width: 32, height: 32 }}></img>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
        {/* <Card.Header title="我的订单"></Card.Header> */}
        <Card.Body style={{ display: 'flex', padding: 10 }}>
          {orderRelatedData.map(item => {
            return (
              <div
                className={styles.iconButtonColumn}
                onClick={() => history.push(item.path)}
              >
                <img src={item.icon} style={{ width: 32, height: 32 }}></img>
                <span>{item.title}</span>
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </WingBlank>
  );
};

export default my;
