import { request } from 'umi';
import { goodsPrefix } from '@/consts/routers';
/**
 * comment: 评论模块
 */

/** 买家查看自己的评价记录 */
export const getAllCommentsReq = (params: any) => {
  return request(`${goodsPrefix}/comments`, {
    method: 'get',
    params: params,
  });
};

/** 查看sku的评价列表(已通过审核) */
export const getSkuCommentsReq = ({
  id,
  params,
}: {
  id: number;
  params: any;
}) => {
  return request(`${goodsPrefix}/skus/${id}/comments`, {
    method: 'get',
    params: params,
  });
};

/** 买家新增sku的评论 */
export const postSkuCommentReq = ({ id, data }: { id: number; data: any }) => {
  return request(`${goodsPrefix}/orderitems/${id}/comments`, {
    method: 'post',
    data: data,
  });
};
