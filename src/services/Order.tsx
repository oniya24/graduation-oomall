import { request } from 'umi';
/**
 * order: 订单模块
 */

/** 买家查询名下订单 */
export const getAllOrderReq = (params: any) => {
  return request(`/orders`, {
    method: 'get',
    params: params,
  });
};

/** 买家申请建立订单（普通，团购，预售） */
export const postOrderReq = (data: any) => {
  return request(`/orders`, {
    method: 'post',
    data: data,
  });
};

/** 买家查询订单完整信息 */
export const getOrderByIdReq = (id: number) => {
  return request(`/orders/${id}`);
};

/** 买家修改本人名下订单
 * 现在仅允许用户调用本 Req 更改未发货订单的收货地址
 */
export const putOrderByIdReq = ({ id, data }: { id: number; data: any }) => {
  return request(`/orders/${id}`, {
    method: 'put',
    data: data,
  });
};

/** 买家取消，逻辑删除本人名下订单 */
export const deleteOrderByIdReq = (id: number) => {
  return request(`/orders/${id}`, {
    method: 'delete',
  });
};

/** 买家标记确认收货 */
export const putOrderConfirmByIdReq = (id: number) => {
  return request(`/orders/${id}/confirm`, {
    method: 'put',
  });
};

/** 买家将团购订单转为普通订单 */
export const putOrder2NormalByIdReq = (id: number) => {
  return request(`/orders/${id}/groupon-normal`, {
    method: 'put',
  });
};
