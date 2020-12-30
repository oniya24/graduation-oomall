import { request } from 'umi';
/**
 * favorites: 收藏模块
 */

/** 买家查看所有收藏的商品 */
export const getUserFavoriteReq = (params: any) => {
  return request('/favorites', {
    method: 'get',
    params: params,
  });
};

/** 买家收藏商品 */
export const postGoods2FavoriteReq = (skuId: number) => {
  return request(`/favorites/goods/${skuId}`, {
    method: 'post',
  });
};

/** 买家收藏商品 */
export const deleteGoodsByIdReq = (id: number) => {
  return request(`/favorites/${id}`, {
    method: 'delete',
  });
};
