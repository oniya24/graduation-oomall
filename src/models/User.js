import {
  postUserReq,
  getUserReq,
  putUserReq,
  putUserPasswordReq,
  getUserPasswordAuthCodeReq,
  postUserLoginReq,
  getUserLogoutReq,
} from '@/services/User.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
const namespace = 'user';
const model = {
  namespace,
  state: {
    userInfo: {
      id: 0,
      userName: 'string',
      realName: 'string',
      mobile: 'string',
      email: 'string',
      gender: '0',
      birthday: '2021-06-03',
      state: 0,
      point: 0,
      gmtCreate: 'string',
      gmtModified: 'string',
    },
  },
  effects: {
    *postUser({ payload }, { call, put }) {
      const res = yield call(postUserReq, payload);
    },
    *getUser({ payload }, { call, put }) {
      const res = yield call(getUserReq, payload);
      const { data } = res;
      yield put({
        type: 'save',
        payload: {
          userInfo: data,
        },
      });
    },
    *putUser({ payload }, { call, put }) {
      const res = yield call(putUserReq, payload);
    },
    *putUserPassword({ payload }, { call, put }) {
      const res = yield call(putUserPasswordReq, payload);
    },
    *getUserPasswordAuthCode({ payload }, { call, put }) {
      const res = yield call(getUserPasswordAuthCodeReq, payload);
    },
    *postUserLogin({ payload }, { call, put }) {
      const res = yield call(postUserLoginReq, payload);
    },
    *getUserLogout({ payload }, { call, put }) {
      const res = yield call(getUserLogoutReq, payload);
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
