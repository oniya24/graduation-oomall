import {
  getUserFavoriteReq,
  postGoods2FavoriteReq,
  deleteGoodsByIdReq,
} from '@/services/Favorite.tsx';
const namespace = 'favorite';
export const mapStateToProps = ({ favorite, loading }) => {
  const { rawFavoriteList } = favorite;
  console.log(loading);
  return {
    rawFavoriteList,
    getUserFavoriteLoading: loading.effects[`${namespace}/getUserFavorite`],
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    getUserFavorite: payload =>
      dispatch({ type: `${namespace}/getUserFavorite`, payload }),
    deleteGoodsById: payload =>
      dispatch({ type: `${namespace}/deleteGoodsById`, payload }),
  };
};

export default {
  namespace: namespace,
  state: {
    rawFavoriteList: [],
  },
  effects: {
    *getUserFavorite({ payload }, { call, put }) {
      const res = yield call(getUserFavoriteReq, payload);
      const { data } = res;
      yield put({
        type: 'saveFavoriteList',
        payload: data,
      });
    },
    *deleteGoodsById({ payload }, { call, put }) {
      const res = yield call(deleteGoodsByIdReq, payload);
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
        rawFavoriteList: [...action.payload, ...state.rawFavoriteList],
      };
    },
  },
};
