import {
  getAllCouponReq,
  postUserCouponReq,
  getSkuInCouponReq,
  getActivitiesInCouponReq,
} from '@/services/Coupon.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
const namespace = 'template';
const model = {
  namespace,
  state: {
    couponList: [],
    skuInCouponList: [],
    activityInCouponList: [],
  },
  effects: {
    *getAllCoupon({ payload }, { call, put }) {
      const res = yield call(getAllCouponReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          couponList: data,
        },
      });
    },
    *postUserCoupon({ payload }, { call, put }) {
      const res = yield call(postUserCouponReq, payload);
    },
    *getSkuInCoupon({ payload }, { call, put }) {
      const res = yield call(getSkuInCouponReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          skuInCouponList: data,
        },
      });
    },
    *getActivitiesInCoupon({ payload }, { call, put }) {
      const res = yield call(getActivitiesInCouponReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          activityInCouponList: data,
        },
      });
    },
  },
  reducers: {
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
