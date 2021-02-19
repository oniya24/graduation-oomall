import { mapStateToProps, mapDispatchToProps } from '@/models/Aftersale';
import { connect, history, useLocation, useParams } from 'umi';
import { useEffect } from 'react';
import { Card, Button, Steps, List, InputItem, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import { aftersaleTypesPlain } from '@/consts/mall';
import { validateFormError } from '@/utils/validate';
import styles from './index.scss';

const { Step } = Steps;
const stepsArray = [
  {
    title: '退货中',
    description: '等待买家填运单号',
  },
  {
    title: '商家处理中',
    description: '卖家收到货处理中',
  },
  {
    title: '等待买家确认',
    description: '买家确认中',
  },
];
const aftersale_detail = ({
  aftersaleDetail,
  getAftersaleById,
  putAftersaleSendback,
  form,
}) => {
  const { validateFields, getFieldProps } = form;
  const {
    state,
    skuName,
    type,
    reason,
    refund,
    quantity,
    customerLogSn,
    mobile,
    consignee,
    detail,
    regionId,
  } = aftersaleDetail;
  const {} = form;
  const { query } = useLocation();
  const { id } = query;
  const putSendback = () => {
    validateFields(async (error, value) => {
      if (!validateFormError(error)) {
        await putAftersaleSendback({ id, ...value });
        await getAftersaleById(id);
      }
    });
  };
  useEffect(() => {
    getAftersaleById(id);
  }, []);
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Card>
        <Card.Header title="售后进度" />
        <div style={{ padding: 15 }}>
          <Steps size="small" current={state} direction="horizontal">
            {stepsArray.map(item => {
              return (
                <Step title={item.title} description={item.description}></Step>
              );
            })}
          </Steps>
        </div>
      </Card>
      {state === 0 && (
        <Card style={{ padding: '10px 0' }}>
          <Card.Header title="填写信息"></Card.Header>
          <Card.Body>
            <List>
              <InputItem
                {...getFieldProps('logSn', {
                  rules: [{ required: true, message: '需要输入单号' }],
                })}
                placeholder={'单号'}
                type="number"
              >
                寄回单号
              </InputItem>
            </List>
          </Card.Body>
          <Card.Footer
            content={
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  inline
                  size="small"
                  type="ghost"
                  onClick={() => putSendback()}
                >
                  提交单号
                </Button>
              </div>
            }
          />
        </Card>
      )}
      {state === 1 && (
        <Card>
          <Card.Header title="具体信息" />
          <Card.Body>
            <div className={styles.detail_contain}>
              <p>商品名称: {skuName}</p>
              <p>服务类型: {aftersaleTypesPlain[type]}</p>
              <p>原因: {reason}</p>
              <p>退款金额: {refund}</p>
              <p>处理数量: {quantity}件</p>
              <p>退货单号: {customerLogSn}</p>
              <p>
                收货地址: {consignee} {mobile} {detail} {regionId}
              </p>
            </div>
          </Card.Body>
          <Card.Footer
            content={
              <Button
                inline
                size="small"
                type="primary"
                onClick={() => {
                  history.push(`/aftersale/edit`);
                }}
                type="primary"
              >
                修改订单
              </Button>
            }
          ></Card.Footer>
        </Card>
      )}
    </div>
  );
};

const wrapper_aftersale_detail = createForm()(aftersale_detail);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(wrapper_aftersale_detail);
