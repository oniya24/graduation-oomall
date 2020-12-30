import {
  getCurrentAdvertisementReq,
  getAllGrouponReq,
  getAllPresaleReq,
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
    grouponList: [],
    advertisementList: [],
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
          advertisementList: list,
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
