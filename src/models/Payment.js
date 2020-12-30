import {
  getPayPatternsReq,
  postPayRecordReq,
  getPayRecordByIdReq,
  getRefundByIdReq,
  postAftersalePayRecordByIdReq,
  getAftersalePayRecordByIdReq,
  getAftersaleRefundByIdReq,
} from '@/services/Payment.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
const namespace = 'payment';
const model = {
  namespace,
  state: {
    paypatterns: [],
    payRecord: {},
    payRefund: {},
    aftersaleRecord: {},
    aftersaleRefund: {},
  },
  effects: {
    *getPayPatterns({ payload }, { call, put }) {
      const res = yield call(getPayPatternsReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          paypatterns: data,
        },
      });
    },
    *postPayRecord({ payload }, { call, put }) {
      const res = yield call(postPayRecordReq, payload);
    },
    *getPayRecordById({ payload }, { call, put }) {
      const res = yield call(getPayRecordByIdReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          payRecord: data,
        },
      });
    },
    *getRefundById({ payload }, { call, put }) {
      const res = yield call(getRefundByIdReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          payRefund: data,
        },
      });
    },
    *postAftersalePayRecordById({ payload }, { call, put }) {
      const res = yield call(postAftersalePayRecordByIdReq, payload);
    },
    *getAftersalePayRecordById({ payload }, { call, put }) {
      const res = yield call(getAftersalePayRecordByIdReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          aftersaleRecord: data,
        },
      });
    },
    *getAftersaleRefundById({ payload }, { call, put }) {
      const res = yield call(getAftersaleRefundByIdReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          aftersaleRefund: data,
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
