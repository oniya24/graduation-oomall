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
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';
import { Toast } from 'antd-mobile';
import { history } from 'umi';
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
      if (isErrnoEqual0(res) || isCodeEqualOk(res)) {
        Toast.success('创建成功', 1);
      }
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
      if (isErrnoEqual0(res) || isCodeEqualOk(res)) {
        Toast.success('修改成功', 1);
      }
    },
    *deleteAftersaleById({ payload }, { call, put }) {
      const res = yield call(deleteAftersaleByIdReq, payload);
      if (isErrnoEqual0(res) || isCodeEqualOk(res)) {
        Toast.success('删除成功', 1);
      }
    },
    *putAftersaleSendback({ payload }, { call, put }) {
      const res = yield call(putAftersaleSendbackReq, payload);
      if (isErrnoEqual0(res) || isCodeEqualOk(res)) {
        Toast.success('反馈成功', 1);
      }
    },
    *putAftersaleConfirm({ payload }, { call, put }) {
      const res = yield call(putAftersaleConfirmReq, payload);
      if (isErrnoEqual0(res) || isCodeEqualOk(res)) {
        Toast.success('确认成功', 1);
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
    saveRawAftersaleList(state, action) {
      return {
        ...state,
        // rawAftersaleList: [...state.rawAftersaleList, ...action.payload],
        rawAftersaleList: [...action.payload],
      };
    },
  },
};

export const mapStateToProps = defaultMapStateToProps(aftersale);
export const mapDispatchToProps = defaultMapDispatchToProps(aftersale);

export default aftersale;
