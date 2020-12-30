import {
  getUserCartsReq,
  deleteUserCartsReq,
  putUserCartsByIdReq,
  deleteUserCartsByIdReq,
} from '@/services/Cart.tsx';
const namespace = 'cart';

export const mapStateToProps = ({ cart, loading }) => {
  const { rawCartList } = cart;
  return {
    rawCartList,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    getUserCarts: payload =>
      dispatch({ type: `${namespace}/getUserCarts`, payload }),
    putUserCartsById: payload =>
      dispatch({ type: `${namespace}/putUserCartsById`, payload }),
    deleteUserCarts: payload =>
      dispatch({ type: `${namespace}/deleteUserCarts`, payload }),
    deleteUserCartsById: payload =>
      dispatch({ type: `${namespace}/deleteUserCartsById`, payload }),
  };
};

export default {
  namespace: namespace,
  state: {
    rawCartList: [],
  },
  effects: {
    *getUserCarts({ payload }, { call, put }) {
      console.log('req three ');
      const res = yield call(getUserCartsReq, payload);
      const { data } = res;
      yield put({
        type: 'saveCartList',
        payload: data,
      });
    },
    *putUserCartsById({ payload }, { call, put }) {
      const res = yield call(putUserCartsByIdReq, payload);
    },
    *deleteUserCarts({ payload }, { call, put }) {
      const res = yield call(deleteUserCartsReq, payload);
    },
    *deleteUserCartsById({ payload }, { call, put }) {
      const res = yield call(deleteUserCartsByIdReq, payload);
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    saveCartList(state, action) {
      return {
        ...state,
        rawCartList: [...action.payload, ...state.rawCartList],
      };
    },
  },
};
