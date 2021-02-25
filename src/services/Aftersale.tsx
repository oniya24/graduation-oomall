import { request } from 'umi';
import { orderPrefix } from '@/consts/routers';
/**
 * aftersales: 售后模块
 */

/** 获得售后单的所有状态 */
export const getAftersaleStateReq = () => {
  return request(`${orderPrefix}/aftersales/states`);
};

/** 买家提交售后单 */
export const postAftersaleReq = ({
  id,
  data,
}: {
  id: number;
  data: number;
}) => {
  return request(`${orderPrefix}/orderitems/${id}/aftersales`, {
    method: 'post',
    data: data,
  });
};

/** 买家查询所有的售后单信息 */
export const getAllAftersaleReq = (params: any) => {
  return request(`${orderPrefix}/aftersales`, {
    method: 'get',
    params: params,
  });
};

/** 买家根据售后单id查询售后单信息 */
export const getAftersaleByIdReq = (id: number) => {
  return request(`${orderPrefix}/aftersales/${id}`);
};

/** 买家修改售后单信息 */
export const putAftersaleByIdReq = ({
  id,
  ...data
}: {
  id: number;
  data: number;
}) => {
  return request(`${orderPrefix}/aftersales/${id}`, {
    method: 'put',
    data: data,
  });
};

/** 买家取消售后单和逻辑删除售后单 */
export const deleteAftersaleByIdReq = (id: number) => {
  return request(`${orderPrefix}/aftersales/${id}`, {
    method: 'delete',
  });
};

/** 买家填写售后的运单信息 */
export const putAftersaleSendbackReq = ({
  id,
  ...data
}: {
  id: number;
  data: number;
}) => {
  return request(`${orderPrefix}/aftersales/${id}/sendback`, {
    method: 'put',
    data: data,
  });
};

/** 买家确认售后单结束 */
export const putAftersaleConfirmReq = (id: number) => {
  return request(`${orderPrefix}/aftersales/${id}/confirm`);
};
