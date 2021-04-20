import {
  getUserFavoriteReq,
  postGoods2FavoriteReq,
  deleteGoodsByIdReq,
} from '@/services/Favorite.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';
import { Toast } from 'antd-mobile';
const namespace = 'favorite';
const model = {
  namespace: namespace,
  state: {
    rawFavoriteList: [],
    favoriteList: [],
  },
  effects: {
    *getUserFavorite({ payload }, { call, put }) {
      const res = yield call(getUserFavoriteReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'saveFavoriteList',
        payload: list || [],
      });
    },
    *deleteGoodsById({ payload }, { call, put }) {
      const res = yield call(deleteGoodsByIdReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        Toast.success('删除成功');
      }
    },
    *refreshFavoriteList({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          favoriteList: [],
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
    saveFavoriteList(state, action) {
      return {
        ...state,
        favoriteList: [...action.payload, ...state.favoriteList],
      };
    },
  },
};

export const mapStateToProps = defaultMapStateToProps(model);
export const mapDispatchToProps = defaultMapDispatchToProps(model);
export default model;
