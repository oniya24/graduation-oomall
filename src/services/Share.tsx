import { request } from 'umi';
import { orderPrefix } from '@/consts/routers';
/**
 * share: 分享模块
 */

/** 分享者生成分享链接 */
export const putGenerateShareResultReq = (id: number) => {
  return request(`${orderPrefix}/skus/${id}/shares`, {
    method: 'post',
  });
};

/** 买家查询所有分享记录 */
export const getAllSharesReq = (params: any) => {
  return request(`${orderPrefix}/shares`, {
    method: 'get',
    params: params,
  });
};

/** 分享者查询所有分享成功记录 */
export const getAllBeSharedReq = (params: any) => {
  return request(`${orderPrefix}/beshared`, {
    method: 'get',
    params: params,
  });
};

/** 查看特定商品分享活动 ???? 没太看懂 */
export const getShareActivityReq = (params: any) => {
  return request(`${orderPrefix}/getShareActivity`, {
    method: 'get',
    params: params,
  });
};
