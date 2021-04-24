import {
  getAllCouponReq,
  postUserCouponReq,
  getSkuInCouponReq,
  getActivitiesInCouponReq,
} from '@/services/Coupon.tsx';
import { getAllShopsReq } from '@/services/Shop.tsx';
import { getAllSpuListReq, getGoodSpuByIdReq } from '@/services/Goods.tsx';
import { postGoods2FavoriteReq } from '@/services/Favorite.tsx';
import { postUserCartsReq } from '@/services/Cart.tsx';
import { putGenerateShareResultReq } from '@/services/Share.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';
import { Toast } from 'antd-mobile';

const namespace = 'shop';
const model = {
  namespace,
  state: {
    shopList: [],

    couponActivityList: [],
    couponSpuList: [],
    spuList: [],
    spuDetail: {},
  },
  effects: {
    *getActivitiesInCoupon({ payload }, { call, put }) {
      const res = yield call(getActivitiesInCouponReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          couponActivityList: list,
        },
      });
    },
    *getSkuInCoupon({ payload }, { call, put }) {
      const res = yield call(getSkuInCouponReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          couponSpuList: list,
        },
      });
    },
    *getAllSpuList({ payload }, { call, put }) {
      const res = yield call(getAllSpuListReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'saveSpuList',
        payload: {
          spuList: list,
        },
      });
    },
    *getGoodSpuById({ payload }, { call, put }) {
      const res = yield call(getGoodSpuByIdReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          spuDetail: data,
        },
      });
    },
    *postGoods2Favorite({ payload }, { call, put }) {
      const res = yield call(postGoods2FavoriteReq, payload);
      if (isErrnoEqual0(res) || isCodeEqualOk(res)) {
        Toast.success('收藏成功', 1);
      }
    },
    *postUserCarts({ payload }, { call, put }) {
      const res = yield call(postUserCartsReq, payload);
      if (isCodeEqualOk(res) || isCodeEqualOk(res)) {
        Toast.success('加入购物车成功', 1);
      }
    },
    *getAllShops({ payload }, { call, put }) {
      const res = yield call(getAllShopsReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          shopList: list,
        },
      });
    },
    *putGenerateShareResult({ payload }, { call, put }) {
      const res = yield call(putGenerateShareResultReq, payload);
      if (isCodeEqualOk(res) || isCodeEqualOk(res)) {
        const { data } = res;
        Toast.success('分享成功! 链接为' + data);
      }
    },
    *refreshSpuList({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          spuList: [],
        },
      });
    },
  },
  reducers: {
    saveSpuList(state, action) {
      return {
        ...state,
        spuList: [...state.spuList, ...action.payload.spuList],
      };
    },
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export const mapStateToProps = defaultMapStateToProps(model);
export const mapDispatchToProps = defaultMapDispatchToProps(model);
export default model;
