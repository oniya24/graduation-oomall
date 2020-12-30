import { request } from 'umi';
import { pagination } from '@/interfaces/common';
/**
 * coupon: 优惠模块
 */

/** 买家查看优惠券列表 */
interface couponQuery extends pagination {
  state?: number;
}
export const getAllCouponReq = (params: couponQuery) => {
  return request(`/coupons`, {
    method: 'get',
    params: params,
  });
};

/** 买家领取活动优惠券，上线状态才能领取 */
export const postUserCouponReq = (id: number) => {
  return request(`/couponactivities/${id}/usercoupons`);
};

/** 查看优惠活动中的商品 */
export const getSkuInCouponReq = ({
  id,
  params,
}: {
  id: number;
  params: pagination;
}) => {
  return request(`/couponactivities/${id}/skus`, {
    method: 'get',
    params: params,
  });
};

/** 查看上线的优惠活动列表 */
interface activityQuery extends pagination {
  shopId: number;
  timeline: number;
}
export const getActivitiesInCouponReq = (params: activityQuery) => {
  return request(`/couponactivities`, {
    method: 'get',
    params: params,
  });
};
