import { history, RequestConfig, useLocation } from 'umi';
import { addAuth2Header } from './utilReq/requestInterceptor';
import { handleErrorMsg } from './utilReq/responseInterceptor';
import { Toast } from 'antd-mobile';
import { errorHandler } from './utilReq/errorHandler';
import { getUserReq } from './services/User';
import { orderPrefix } from '@/consts/routers';
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';
// import 'antd/dist/antd.css';

export function render(oldRender) {
  if (history.location.pathname === '/') {
    history.push('/user');
    return oldRender();
  }
  if (history.location.pathname === '/user') {
    return oldRender();
  }
  let auth_Token = localStorage.getItem('authorization');
  fetch(`${orderPrefix}/users`, {
    headers: {
      Accept: '*/*',
      authorization: auth_Token,
    },
  })
    .then(response => {
      return response.json();
    })
    .then(res => {
      console.log(res, 'res');
      if (isErrnoEqual0(res) || isCodeEqualOk(res)) {
        console.log('rs', res);
        const { data } = res;
        sessionStorage.setItem('userInfo', JSON.stringify(data));
      } else {
        Toast.fail('请先登录');
        history.push('user');
      }
      oldRender();
    });
}

export const request = {
  timeout: 5000,
  mode: 'cors',
  errorHandler,
  errorConfig: {
    adaptor: resData => {
      return {
        ...resData,
        success: resData.ok,
        errorMessage: resData.message,
      };
    },
  },
  requestInterceptors: [
    // addBaseUrl,
    addAuth2Header,
  ],
  responseInterceptors: [handleErrorMsg],
};
