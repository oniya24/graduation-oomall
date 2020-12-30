import { request } from 'umi';
import { pagination } from '@/interfaces/common';
/**
 * cart: 购物车模块
 */
interface skuInfo {
  goodsSkuId: number;
  quantity: number;
}

/** 买家获得购物车列表 */
export const getUserCartsReq = (params: pagination) => {
  return request('/carts', {
    method: 'get',
    params: params,
  });
};

/** 买家将商品加入购物车 */
export const postUserCartsReq = (data: skuInfo) => {
  return request('/carts', {
    method: 'post',
    data: data,
  });
};

/** 买家清空购物车 */
export const deleteUserCartsReq = () => {
  return request('/carts', {
    method: 'delete',
  });
};

/** 买家修改购物车单个商品的数量或规格 */
export const putUserCartsByIdReq = ({
  id,
  ...data
}: {
  id: number;
  data: skuInfo;
}) => {
  return request(`/carts/${id}`, {
    method: 'put',
    data: data,
  });
};

/** 买家删除购物车中商品 */
export const deleteUserCartsByIdReq = (id: number) => {
  return request(`/carts/${id}`, {
    method: 'delete',
  });
};
