import {
  getChildrenCategoryReq,
  getParentCategoryReq,
} from '@/services/Category.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
const namespace = 'Category';
const model = {
  namespace,
  state: {
    parentCategoryList: [],
    childrenCategoryList: [],
  },
  effects: {
    *getParentCategory({ payload }, { call, put }) {
      const res = yield call(getParentCategoryReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          parentCategoryList: data,
        },
      });
    },
    *getChildrenCategory({ payload }, { call, put }) {
      const res = yield call(getChildrenCategoryReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          childrenCategoryList: data,
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
