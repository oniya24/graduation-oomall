import { history, RequestConfig, useLocation } from 'umi';
import { addAuth2Header } from './utilReq/requestInterceptor';
import { handleErrorMsg } from './utilReq/responseInterceptor';
import { Toast } from 'antd-mobile';
import { errorHandler } from './utilReq/errorHandler';
import { getUserReq } from './services/User';
// import 'antd/dist/antd.css';

export function render(oldRender) {
  return oldRender();
  if (history.location.pathname === '/') {
    history.push('/user');
  }
  try {
    getUserReq()
      .then(() => {
        oldRender();
      })
      .catch(e => {
        Toast.fail('请先登录');
        history.push('user');
      });
  } catch (e) {
    Toast.fail('请先登录');
    history.push('user');
  }
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
