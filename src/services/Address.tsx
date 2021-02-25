import { request } from 'umi';
import { orderPrefix } from '@/consts/routers';
/**
 * address: 地址模块
 */

/** 买家查询所有已有的地址信息 */
export const getAllAddressReq = (params: any) => {
  return request(`${orderPrefix}/addresses`, {
    method: 'get',
    params: params,
  });
};

/** 买家新增地址 */
export const postAddressReq = (data: any) => {
  return request(`${orderPrefix}/addresses`, {
    method: 'post',
    data: data,
  });
};

/** 设置默认地址 */
export const putDefaultAddressReq = (id: number) => {
  return request(`${orderPrefix}/addresses/${id}/default`, {
    method: 'put',
  });
};

/** 买家修改自己的地址信息 */
export const putAddressByIdReq = ({
  id,
  ...data
}: {
  id: number;
  data: any;
}) => {
  return request(`${orderPrefix}/addresses/${id}`, {
    method: 'put',
    data: data,
  });
};

/** 买家删除地址 */
export const deleteAddressByIdReq = (id: number) => {
  return request(`${orderPrefix}/addresses/${id}`, {
    method: 'delete',
  });
};

/** 查询某个地区的所有上级地区 */
export const getParentRegionReq = (id: number) => {
  return request(`${orderPrefix}/region/${id}/ancestor`);
};

/** 查询某个某个地区的子地区 */
export const getDescendantRegionReq = (id: number) => {
  return request(`${orderPrefix}/region/${id}/descendant`);
};
