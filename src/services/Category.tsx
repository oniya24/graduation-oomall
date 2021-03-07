import { request } from 'umi';
import { goodsPrefix } from '@/consts/routers';

export const getParentCategoryReq = () => {
  return request(`${goodsPrefix}/categories/0/subcategories`);
};

export const getChildrenCategoryReq = (id: number) => {
  return request(`${goodsPrefix}/categories/${id}/subcategories`);
};
