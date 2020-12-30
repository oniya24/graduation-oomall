import { request } from 'umi';
/**
 * freight: 运费模块
 */

interface orderItem {
  skuId: number;
  count: number;
}
export const putRegionPriceReq = ({
  rid,
  items,
}: {
  rid: number;
  items: Array<orderItem>;
}) => {
  return request(`/region/${rid}/price`, {
    method: 'put',
    data: items,
  });
};
