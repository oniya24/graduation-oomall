import {
  getOrderByIdReq,
  postOrderReq,
  getAllOrderReq,
  deleteOrderByIdReq,
  putOrderByIdReq,
  putOrderConfirmByIdReq,
  putOrder2NormalByIdReq,
} from '@/services/Order.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
const namespace = 'order';
const model = {
  namespace,
  state: {
    rawOrderList: [],
    orderDetail: {},
  },
  effects: {
    *getOrderById({ payload }, { call, put }) {
      console.log('call');
      const res = yield call(getOrderByIdReq, payload);
      console.log('call');
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          orderDetail: data,
        },
      });
    },
    *postOrder({ payload }, { call, put }) {
      const res = yield call(postOrderReq, payload);
    },
    *getAllOrder({ payload }, { call, put }) {
      const res = yield call(getAllOrderReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'saveRawOrderList',
        payload: list,
      });
    },
    *deleteOrderById({ payload }, { call, put }) {
      const res = yield call(deleteOrderByIdReq, payload);
    },
    *putOrderById({ payload }, { call, put }) {
      const res = yield call(putOrderByIdReq, payload);
    },
    *putOrderConfirmById({ payload }, { call, put }) {
      const res = yield call(putOrderConfirmByIdReq, payload);
    },
    *putOrder2NormalById({ payload }, { call, put }) {
      const res = yield call(putOrder2NormalByIdReq, payload);
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    saveRawOrderList(state, action) {
      return {
        ...state,
        rawOrderList: [...state.rawOrderList, ...action.payload],
      };
    },
  },
};

export const mapStateToProps = defaultMapStateToProps(model);
export const mapDispatchToProps = defaultMapDispatchToProps(model);
export default model;
