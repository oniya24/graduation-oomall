import { postOrderReq } from '@/services/Order.tsx';
import { getSkuByIdReq } from '@/services/Goods.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';
import { Toast } from 'antd-mobile';
const namespace = 'orderCreate';
const model = {
  namespace,
  state: {
    buyingSku: {},
  },
  effects: {
    *postOrder({ payload }, { call, put }) {
      const res = yield call(postOrderReq, payload);
      if (isCodeEqualOk(res) || isCodeEqualOk(res)) {
        Toast.success('订单创建成功，正在跳转到支付页');
      }
    },
    *getSkuById({ payload }, { call, put }) {
      const res = yield call(getSkuByIdReq, payload);
      if (isCodeEqualOk(res) || isCodeEqualOk(res)) {
        const { data } = res;
        yield put({
          type: 'save',
          payload: {
            buyingSku: data,
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
