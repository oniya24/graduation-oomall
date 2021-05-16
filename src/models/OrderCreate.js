import { postOrderReq } from '@/services/Order.tsx';
import { getSkuByIdReq } from '@/services/Goods.tsx';
import { getAllAddressReq } from '@/services/Address.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';
import { Toast } from 'antd-mobile';
import { history } from 'umi';

const namespace = 'orderCreate';
const model = {
  namespace,
  state: {
    buyingSku: {},
    addressList: [],
  },
  effects: {
    *postOrder({ payload }, { call, put }) {
      const res = yield call(postOrderReq, payload);
      // console.log(res);
      // Toast.success('订单创建成功，正在跳转到支付页');
      // history.push(`/payment/?orderId=${res}`);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        const { data } = res;
        Toast.success('订单创建成功，正在跳转到支付页');
        history.push(`/payment/?orderId=${data}`);
        // 创建成功后跳转到支付页
      }
    },
    *getSkuById({ payload }, { call, put }) {
      const res = yield call(getSkuByIdReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        const { data } = res;
        yield put({
          type: 'save',
          payload: {
            buyingSku: data,
          },
        });
      }
    },
    *getAllAddress({ payload }, { call, put }) {
      const res = yield call(getAllAddressReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        const { data } = res;
        const { list } = data;
        yield put({
          type: 'save',
          payload: {
            addressList: list,
          },
        });
      }
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
