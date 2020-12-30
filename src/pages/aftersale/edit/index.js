import { mapStateToProps, mapDispatchToProps } from '@/models/Aftersale';
import { connect, history, useLocation, useParams } from 'umi';
import { useEffect } from 'react';
import { Card, Button, List, Stepper, InputItem, Picker } from 'antd-mobile';
const aftersale_edit = ({ aftersaleDetail, putAftersaleById }) => {
  return (
    <Card>
      <Card.Body>
        买家可修改的信息：地址，售后商品的数量，申请售后的原因，联系人以及联系电话
        在店家生成售后单之前买家可以修改信息，生成之后买家只能进行删除操作
        <List>
          <List.Item
            wrap
            extra={
              <Stepper max={10} min={0} value={1} onChange={() => {}}></Stepper>
            }
          >
            数量
          </List.Item>
          <InputItem
            clear
            placeholder="auto focus"
            // ref={el => this.autoFocusInst = el}
          >
            原因
          </InputItem>
          <InputItem
            clear
            placeholder="auto focus"
            // ref={el => this.autoFocusInst = el}
          >
            申请人
          </InputItem>
          <InputItem
            clear
            placeholder="auto focus"
            // ref={el => this.autoFocusInst = el}
          >
            联系电话
          </InputItem>
          <Picker
            data={[
              {
                label: '2013',
                value: '2013',
              },
              {
                label: '2014',
                value: '2014',
              },
            ]}
            cols={1}
            className="forss"
          >
            <List.Item arrow="horizontal">Single</List.Item>
          </Picker>
          {/* <List.Item wrap extra={ <Button inline type="primary" size="small" onClick={() => {}}>提交修改</Button> }></List.Item> */}
        </List>
        <Button inline type="primary" size="small" onClick={() => {}}>
          提交修改
        </Button>
      </Card.Body>
    </Card>
  );
};

export default aftersale_edit;
