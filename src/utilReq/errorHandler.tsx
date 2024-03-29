import { Toast } from 'antd-mobile';
import { history } from 'umi';

export const errorHandler = (error: any) => {
  const { status } = error.response || {};
  const RequestErrorCodeMap: any = {
    401: '接口无权限访问',
    404: '无接口资源',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
    500: '服务器错误',
  };
  Toast.fail(status ? RequestErrorCodeMap[status] : '请求出现异常');
  return {
    errmsg: '请求失败',
    errno: -1,
    data: {},
  };
};
