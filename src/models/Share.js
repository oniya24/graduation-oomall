import {
  putGenerateShareResultReq,
  getAllSharesReq,
  getAllBeSharedReq,
  getShareActivityReq,
} from '@/services/Share.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
const namespace = 'share';
const model = {
  namespace,
  state: {
    shareList: [],
    beSharedList: [],
    shareActivityList: [],
  },
  effects: {
    *putGenerateShareResult({ payload }, { call, put }) {
      const res = yield call(putGenerateShareResultReq, payload);
    },
    *getAllShares({ payload }, { call, put }) {
      const res = yield call(getAllSharesReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'saveShareList',
        payload: list,
      });
    },
    *getAllBeShared({ payload }, { call, put }) {
      const res = yield call(getAllBeSharedReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'saveBeSharedList',
        payload: list,
      });
    },
    *getShareActivity({ payload }, { call, put }) {
      const res = yield call(getShareActivityReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'saveShareActivityList',
        payload: list,
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
    saveShareList(state, action) {
      return {
        ...state,
        shareList: [...state.shareList, ...action.payload],
      };
    },
    saveBeSharedList(state, action) {
      return {
        ...state,
        beSharedList: [...state.beSharedList, ...action.payload],
      };
    },
    saveShareActivityList(state, action) {
      return {
        ...state,
        shareActivityList: [...state.shareActivityList, ...action.payload],
      };
    },
  },
};

export const mapStateToProps = defaultMapStateToProps(model);
export const mapDispatchToProps = defaultMapDispatchToProps(model);
export default model;
