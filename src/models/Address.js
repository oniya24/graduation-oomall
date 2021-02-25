import {
  getAllAddressReq,
  postAddressReq,
  putDefaultAddressReq,
  putAddressByIdReq,
  deleteAddressByIdReq,
  getParentRegionReq,
  getDescendantRegionReq,
} from '@/services/Address.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';
import { Toast } from 'antd-mobile';
import { history } from 'umi';
const namespace = 'address';

const model = {
  namespace: namespace,
  state: {
    addressList: [],
    addressDetail: {},
    curParentRegion: [],
  },
  effects: {
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
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        Toast.success('修改成功', 1);
        history.push('/address');
      }
    },
    *deleteAddressById({ payload }, { call, put }) {
      const res = yield call(deleteAddressByIdReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        Toast.success('删除成功', 1);
        history.push('/address');
      }
    },
    *getParentRegion({ payload }, { call, put }) {
      const res = yield call(getParentRegionReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          curParentRegion: data,
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
