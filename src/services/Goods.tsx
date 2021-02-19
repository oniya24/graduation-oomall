import { request } from 'umi';
import { goodsPrefix } from '@/consts/routers';
/**
 * goods: 商品模块
 */

/** 查询sku */
export const getAllSkuReq = (params: any) => {
  return request(`${goodsPrefix}/skus`, {
    method: 'get',
    params: params,
  });
};

/** 获得sku的详细信息 */
export const getSkuByIdReq = (id: number) => {
  return request(`${goodsPrefix}/skus/${id}`);
};

/** 根据种类ID获取商品下一级分类信息 */
export const getSubCategoryByIdReq = (id: number) => {
  return request(`${goodsPrefix}/categories/${id}/subcategories`);
};

/** 查看一条商品SPU的详细信息（无需登录) */
export const getGoodSpuByIdReq = (id: number) => {
  return request(`${goodsPrefix}/spus/${id}`);
};

/** 查看一条分享商品SPU的详细信息（需登录） */
export const getShareGoodSkuByIdReq = ({
  sid,
  id,
}: {
  id: number;
  sid: number;
}) => {
  return request(`${goodsPrefix}/share/${sid}/skus/${id}`);
};

/** 查看所有品牌 */
export const getAllBrandReq = (params: any) => {
  return request(`${goodsPrefix}/brands`, {
    method: 'get',
    params: params,
  });
};
