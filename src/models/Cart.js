import {
  getUserCartsReq,
  deleteUserCartsReq,
  putUserCartsByIdReq,
  deleteUserCartsByIdReq,
} from '@/services/Cart.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';
import { Toast } from 'antd-mobile';
const namespace = 'cart';

const model = {
  namespace: namespace,
  state: {
    rawCartList: [],
  },
  effects: {
    *getUserCarts({ payload }, { call, put }) {
      const res = yield call(getUserCartsReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'saveCartList',
        payload: list,
      });
    },
    *putUserCartsById({ payload }, { call, put }) {
      const res = yield call(putUserCartsByIdReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        Toast.success('修改成功');
      }
    },
    *deleteUserCarts({ payload }, { call, put }) {
      const res = yield call(deleteUserCartsReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        Toast.success('清空购物车成功');
      }
    },
    *deleteUserCartsById({ payload }, { call, put }) {
      const res = yield call(deleteUserCartsByIdReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        Toast.success('删除成功');
      }
    },
    *refreshCartList({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          rawCartList: [],
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
    saveCartList(state, action) {
      return {
        ...state,
        rawCartList: [...action.payload, ...state.rawCartList],
      };
    },
  },
};

export const mapStateToProps = defaultMapStateToProps(model);
export const mapDispatchToProps = defaultMapDispatchToProps(model);
export default model;
