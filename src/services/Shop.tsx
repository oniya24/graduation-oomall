import { request } from 'umi';
import { goodsPrefix } from '@/consts/routers';

/**
 * shop模块
 * 查询所有shop
 */
export const getAllShopsReq = () => {
  return request(`${goodsPrefix}/shops`, {
    params: {
      page: 1,
      pageSize: 100,
    },
  });
};
