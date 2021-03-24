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
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';
import { Toast } from 'antd-mobile';
import { history } from 'umi';
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
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        Toast.success('创建成功');
      }
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
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        Toast.success('修改成功');
      }
    },
    *putUserPassword({ payload }, { call, put }) {
      const res = yield call(putUserPasswordReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        Toast.success('修改密码成功');
      }
    },
    *getUserPasswordAuthCode({ payload }, { call, put }) {
      const res = yield call(getUserPasswordAuthCodeReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        const { data } = res;
        Toast.success('验证码为: ' + data);
      }
    },
    *postUserLogin({ payload }, { call, put }) {
      const res = yield call(postUserLoginReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        const { data } = res;
        Toast.success('登录成功');
        localStorage.setItem('authorization', data);
        history.push('/home');
      }
    },
    *getUserLogout({ payload }, { call, put }) {
      const res = yield call(getUserLogoutReq, payload);
      if (isCodeEqualOk(res) || isErrnoEqual0(res)) {
        Toast.success('登出成功');
        history.push('/user');
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
