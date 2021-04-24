import {
  getPayPatternsReq,
  postPayRecordReq,
  getPayRecordByIdReq,
  getRefundByIdReq,
  postAftersalePayRecordByIdReq,
  getAftersalePayRecordByIdReq,
  getAftersaleRefundByIdReq,
  getOrderByIdReq,
} from '@/services/Payment.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';
import { Toast } from 'antd-mobile';
import { history } from 'umi';
const namespace = 'payment';
const model = {
  namespace,
  state: {
    paypatterns: [],
    payRecord: {},
    payRefund: {},
    aftersaleRecord: {},
    aftersaleRefund: {},
    orderDetail: {},
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
      if (isErrnoEqual0(res) || isCodeEqualOk(res)) {
        Toast.success('支付成功');
        history.push('/my');
      }
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
      if (isErrnoEqual0(res) || isCodeEqualOk(res)) {
        Toast.success('支付成功');
      }
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
    *getOrderById({ payload }, { call, put }) {
      const res = yield call(getOrderByIdReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          orderDetail: data,
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
