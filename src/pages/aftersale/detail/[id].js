import { mapStateToProps, mapDispatchToProps } from '@/models/Aftersale';
import { connect, history, useLocation, useParams } from 'umi';
import { useEffect } from 'react';
import { Card, Button, Steps, List, InputItem, Modal, Result, Icon } from 'antd-mobile';
import { createForm } from 'rc-form';
import { aftersaleTypesPlain } from '@/consts/mall';
import { validateFormError } from '@/utils/validate';
import styles from './index.scss';

const { Step } = Steps;
const stepsArray = [
  {
    title: '新增售后',
    description: '等待卖家确认',
  },
  {
    title: '店家通过',
    description: '等待买家寄回物品'
  },
  {
    title: '买家已寄出',
    description: '等待卖家确认收货'
  },
  {
    title: '店家确认收到',
    description: '等待卖家处理'
  },
  {
    title: '店家已寄出',
    description: '等待买家确认'
  },
  {
    title: '商家处理中',
    description: '卖家收到货处理中',
  },
  {
    title: '售后单结束',
    description: '售后过程已结束',
  },
  {
    title: '买家取消',
    description: '买家已取消售后',
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
  const { id } = useParams();
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
        {
          (state <= 5 || state == 7) && (<Steps size="small" current={state-1} direction="horizontal">
          {stepsArray.slice(0,5).map(item => {
            return (
              <Step title={item.title} description={item.description}></Step>
            );
          })}
        </Steps>)
        }
        {
          state === 7&& (
            <Result
              img={<Icon type="check-circle" className="spe" style={{ fill: '#1F90E6' }} />}
              title={stepsArray[state-1].title}
              message={stepsArray[state-1].description}
            />
          )
        }
        {
          state === 6 || state === 8 && (
            <Result
              img={<Icon type="cross-circle-o" className="spe" style={{ fill: '#F13642' }} />}
              title={stepsArray[state-1].title}
              message={stepsArray[state-1].description}
            />
          )
        }
      </Card>
      {state === 2 && (
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
