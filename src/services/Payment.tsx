import { request } from 'umi';
import { paymentPrefix } from '@/consts/routers';

// 获得支付渠道，目前只返回002 模拟支付渠道，001返点支付
export const getPayPatternsReq = () => {
  return request(`${paymentPrefix}/payments/patterns`);
};

interface paymentData {
  price: number;
  paymentPattern: string;
}
// 买家为订单创建支付单"
// description: |-
// - 此API为模拟API，即时返回支付成功，生成paysn
// - 如果用返点支付也会产生一条支付记录，price为点数，paymentPattern 为001
export const postPayRecordReq = ({
  id,
  ...data
}: {
  id: number;
  data: paymentData;
}) => {
  return request(`${paymentPrefix}/orders/${id}/payments`, {
    method: 'post',
    data: data,
  });
};

// 买家查询自己的支付信息
export const getPayRecordByIdReq = (id: number) => {
  return request(`${paymentPrefix}/orders/${id}/payments`);
};

// 买家为售后单创建支付单 *售后
export const postAftersalePayRecordByIdReq = ({
  id,
  ...data
}: {
  id: number;
  data: paymentData;
}) => {
  return request(`${paymentPrefix}/aftersales/${id}/payments`, {
    method: 'post',
    data: data,
  });
};

// 买家查询自己的支付信息 *售后
export const getAftersalePayRecordByIdReq = (id: number) => {
  return request(`${paymentPrefix}/aftersales/${id}/payments`);
};

// 买家查询自己的支付信息 *售后
export const getAftersaleRefundByIdReq = (id: number) => {
  return request(`${paymentPrefix}/aftersales/${id}/refunds`);
};

// 买家查询自己的退款信息
export const getRefundByIdReq = (id: number) => {
  return request(`${paymentPrefix}/orders/${id}/refunds`);
};

/** 买家查询订单完整信息 */
export const getOrderByIdReq = (id: number) => {
  return request(`/orders/${id}`);
};
