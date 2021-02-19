import { history, RequestConfig } from 'umi';
import { addAuth2Header } from './utilReq/requestInterceptor';
import { handleErrorMsg } from './utilReq/responseInterceptor';
import { message } from 'antd';
import { errorHandler } from './utilReq/errorHandler';
// import 'antd/dist/antd.css';

export function render(oldRender) {
  oldRender();
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
