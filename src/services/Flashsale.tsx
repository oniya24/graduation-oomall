import { request } from 'umi';
/**
 * flashsale: 秒杀模块
 */

/** 获取当前时段秒杀列表 */
export const getCurrentflashReq = () => {
  return request(`/flashsales/current`);
};

/** 查询某一时段秒杀列表 */
export const getflashByTimeSegmentReq = (id: number) => {
  return request(`/timesegments/${id}/flashsales`);
};
