import {
  getAllAddressReq,
  postAddressReq,
  putDefaultAddressReq,
  putAddressByIdReq,
  deleteAddressByIdReq,
  getParentRegionReq,
} from '@/services/Address.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';
import { Toast } from 'antd-mobile';
import { history } from 'umi';
const namespace = 'address';

// export const mapStateToProps = ({ address }) => {
//   const { addressList } = address;
//   return {
//     addressList,

//   }
// }
// export const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllAddress: (payload) => dispatch({ type: `${namespace}/getAllAddress`, payload }),
//     postAddress: (payload) => dispatch({ type: `${namespace}/postAddress`, payload }),
//     putDefaultAddress: (payload) => dispatch({ type: `${namespace}/putDefaultAddress`, payload }),
//     deleteAddressByIdReq: (payload) => dispatch({ type: `${namespace}/deleteAddressByIdReq`, payload }),
//     getParentRegion: (payload) => dispatch({ type: `${namespace}/getParentRegion`, payload }),
//     putAddressById: (payload) => dispatch({ type: `${namespace}/putAddressById`, payload }),
//   }
// }

const model = {
  namespace: namespace,
  state: {
    addressList: [],
    addressDetail: {},
  },
  effects: {
    *getAllAddress({ payload }, { call, put }) {
      const res = yield call(getAllAddressReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          addressList: list,
        },
      });
    },
    *saveDetail({ payload }, { put }) {
      yield put({
        type: 'save',
        payload: {
          addressDetail: payload,
        },
      });
    },
    *postAddress({ payload }, { call, put }) {
      const res = yield call(postAddressReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        Toast.success('创建成功', 1);
        history.push('/address');
      }
    },
    *putDefaultAddress({ payload }, { call, put }) {
      const res = yield call(putDefaultAddressReq, payload);
    },
    *putAddressById({ payload }, { call, put }) {
      const res = yield call(putAddressByIdReq, payload);
    },
    *deleteAddressByIdReq({ payload }, { call, put }) {
      const res = yield call(deleteAddressByIdReq, payload);
    },
    *getParentRegion({ payload }, { call, put }) {
      const res = yield call(getParentRegionReq, payload);
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
