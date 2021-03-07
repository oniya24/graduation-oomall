import {
  getAllSkuReq,
  getSkuByIdReq,
  getSubCategoryByIdReq,
  getGoodSpuByIdReq,
  getShareGoodSkuByIdReq,
  getAllBrandReq,
  getAllSpuListReq,
} from '@/services/Goods.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
const namespace = 'good';
const model = {
  namespace,
  state: {
    spuList: [],
    skuList: [],
    goodSku: {},
    goodSpu: {},
    shareGoodSku: [],
    brandList: [],
    subcategories: [],
  },
  effects: {
    *getAllSku({ payload }, { call, put }) {
      const res = yield call(getAllSkuReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          skuList: list,
        },
      });
    },
    *getAllSpuList({ payload }, { call, put }) {
      const res = yield call(getAllSpuListReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          spuList: list,
        },
      });
    },
    *getSkuById({ payload }, { call, put }) {
      const res = yield call(getSkuByIdReq, payload);
      yield put({
        type: 'save',
        payload: {
          goodSku: data,
        },
      });
    },
    *getSubCategoryById({ payload }, { call, put }) {
      const res = yield call(getSubCategoryByIdReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          subcategories: data,
        },
      });
    },
    *getGoodSpuById({ payload }, { call, put }) {
      const res = yield call(getGoodSpuByIdReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          goodSpu: data,
        },
      });
    },
    *getShareGoodSkuById({ payload }, { call, put }) {
      const res = yield call(getShareGoodSkuByIdReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          shareGoodSku: data,
        },
      });
    },
    *getAllBrand({ payload }, { call, put }) {
      const res = yield call(getAllBrandReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'save',
        payload: {
          brandList: list,
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
