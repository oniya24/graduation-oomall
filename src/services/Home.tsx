import { request } from 'umi';
import { goodsPrefix, orderPrefix } from '@/consts/routers';
/**
 * 首页：
 * 部分advertisem、groupon\presale、flashsale模块
 */

/** 获取当前时段广告列表 */
export const getCurrentAdvertisementReq = () => {
  return request(`${orderPrefix}/advertisement/current`);
};
export const getAllAdvertisementReq = () => {
  return request(`${orderPrefix}/advertisement/all`);
};

/** 查询所有优惠活动 */
export const getAllCouponActivityReq = (params: any) => {
  return request(`${goodsPrefix}/couponactivities`, {
    params: params,
  });
};

/** 查询所有团购活动 */
export const getAllGrouponReq = (params: any) => {
  return request(`${goodsPrefix}/groupons`, {
    method: 'get',
    params: params,
  });
};

/** 查询所有的预售活动 */
export const getAllPresaleReq = (params: any) => {
  return request(`/presales`, {
    method: 'get',
    params: params,
  });
};

/** 获取当前时段秒杀列表 */
export const getCurrentflashReq = () => {
  return request(`/flashsales/current`);
};

/** 查询某一时段秒杀列表 */
export const getflashByTimeSegmentReq = (id: number) => {
  return request(`/timesegments/${id}/flashsales`);
};
