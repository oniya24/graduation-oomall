import { request } from 'umi';

interface registerData {
  mobile: string;
  email: string;
  userName: string;
  password: string;
  realName: string;
  gender: number;
  birthday: string;
}
// 用户注册
export const postUserReq = (data: registerData) => {
  return request('/users', {
    method: 'post',
    data: data,
  });
};

// 买家查看自己信息
export const getUserReq = () => {
  return request('/users');
};

interface modifyData {
  realName: string;
  gender: number;
  birthday: string;
}
// 买家修改自己的信息
export const putUserReq = (data: modifyData) => {
  return request('/users', {
    method: 'put',
    data: data,
  });
};

//summary: 用户修改密码
// description: |-
// - 密码长度为6，且至少包含大写字母，小写字母，数字和特殊符号
// - 验证码只能使用一次，验证码有效期5分钟
interface resetPassword {
  captcha: string;
  newPassword: string;
}
export const putUserPasswordReq = (data: resetPassword) => {
  return request('/users/password', {
    method: 'put',
    data: data,
  });
};

// 用户获取验证码
interface authData {
  userName: string;
  email: string;
}
export const getUserPasswordAuthCodeReq = (data: authData) => {
  return request('/users/password/reset', {
    method: 'put',
    data: data,
  });
};

interface loginData {
  userName: string;
  password: string;
}
export const postUserLoginReq = (data: loginData) => {
  return request('/users/login', {
    method: 'post',
    data: data,
  });
};

// 用户登出
export const getUserLogoutReq = () => {
  return request('/users/logout');
};
