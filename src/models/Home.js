import {
  getCurrentAdvertisementReq,
  getAllAdvertisementReq,
  getAllCouponActivityReq,
  getAllGrouponReq,
  getAllPresaleReq,
  getCurrentflashReq,
  getflashByTimeSegmentReq,
} from '@/services/Home.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
const namespace = 'home';

const model = {
  namespace,
  state: {
    presaleList: [],
    couponList: [],
    grouponList: [
      {
        id: 0,
        name: '厂家直销',
        beginTime: 'string',
        endTime: 'string',
        url: 'http://oomall.finetoo.top/static/groupon/groupon1.jpg',
      },
      {
        id: 1,
        name: '超级大酬宾',
        beginTime: 'string',
        endTime: 'string',
        url: 'http://oomall.finetoo.top/static/groupon/groupon2.png',
      },
      {
        id: 2,
        name: '超级大酬宾',
        beginTime: 'string',
        endTime: 'string',
        url: 'http://oomall.finetoo.top/static/groupon/groupon3.jpg',
      },
    ],
    advertisementList: [],
    allAdvertisementList: [],
    flashList: [],
    segmentFlashList: [],
  },
  effects: {
    *getCurrentAdvertisement({ payload }, { call, put }) {
      const res = yield call(getCurrentAdvertisementReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          advertisementList: list || [],
        },
      });
    },
    *getAllCouponActivity({ payload }, { call, put }) {
      const res = yield call(getAllCouponActivityReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          couponList: list,
        },
      });
    },
    *getAllAdvertisement({ payload }, { call, put }) {
      const res = yield call(getAllAdvertisementReq, payload);
      console.log('res', res);
      const { data } = res;
      // const { list } = data;
      yield put({
        type: 'save',
        payload: {
          allAdvertisementList: data || [],
        },
      });
    },
    *getAllGroupon({ payload }, { call, put }) {
      const res = yield call(getAllGrouponReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          grouponList: list,
        },
      });
    },
    *getAllPresale({ payload }, { call, put }) {
      const res = yield call(getAllPresaleReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          presaleList: list,
        },
      });
    },
    *getCurrentflash({ payload }, { call, put }) {
      const res = yield call(getCurrentflashReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          flashList: list,
        },
      });
    },
    *getflashByTimeSegment({ payload }, { call, put }) {
      const res = yield call(getflashByTimeSegmentReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          segmentFlashList: list,
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
