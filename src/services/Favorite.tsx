import { request } from 'umi';
import { orderPrefix } from '@/consts/routers';
/**
 * favorites: 收藏模块
 */

/** 买家查看所有收藏的商品 */
export const getUserFavoriteReq = (params: any) => {
  return request(`${orderPrefix}/favorites`, {
    method: 'get',
    params: params,
  });
};

/** 买家收藏商品 */
export const postGoods2FavoriteReq = (skuId: number) => {
  return request(`${orderPrefix}/favorites/goods/${skuId}`, {
    method: 'post',
  });
};

/** 买家收藏商品 */
export const deleteGoodsByIdReq = (id: number) => {
  return request(`${orderPrefix}/favorites/${id}`, {
    method: 'delete',
  });
};
