import {
  getAftersaleStateReq,
  postAftersaleReq,
  getAllAftersaleReq,
  getAftersaleByIdReq,
  putAftersaleByIdReq,
  deleteAftersaleByIdReq,
  putAftersaleSendbackReq,
  putAftersaleConfirmReq,
} from '@/services/Aftersale.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
const namespace = 'aftersale';

// export const mapStateToProps = ({ aftersale, loading }) => {
//   const { rawAftersaleList } = aftersale;
//   return {
//     rawAftersaleList
//   }
// }

const aftersale = {
  namespace,
  state: {
    rawAftersaleList: [],
    aftersaleDetail: {},
  },
  effects: {
    *postAftersale({ payload }, { call, put }) {
      const res = yield call(postAftersaleReq, payload);
    },
    *getAllAftersale({ payload }, { call, put }) {
      const res = yield call(getAllAftersaleReq, payload);
      const { data } = res;
      const { list } = data;
      yield put({
        type: 'saveRawAftersaleList',
        payload: list,
      });
    },
    *getAftersaleById({ payload }, { call, put }) {
      const res = yield call(getAftersaleByIdReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          aftersaleDetail: data,
        },
      });
    },
    *putAftersaleById({ payload }, { call, put }) {
      const res = yield call(putAftersaleByIdReq, payload);
    },
    *deleteAftersaleById({ payload }, { call, put }) {
      const res = yield call(deleteAftersaleByIdReq, payload);
    },
    *putAftersaleSendback({ payload }, { call, put }) {
      const res = yield call(putAftersaleSendbackReq, payload);
    },
    *putAftersaleConfirm({ payload }, { call, put }) {
      const res = yield call(putAftersaleConfirmReq, payload);
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    saveRawAftersaleList(state, action) {
      return {
        ...state,
        rawAftersaleList: [...state.rawAftersaleList, ...action.payload],
      };
    },
  },
};

export const mapStateToProps = defaultMapStateToProps(aftersale);
export const mapDispatchToProps = defaultMapDispatchToProps(aftersale);

export default aftersale;
