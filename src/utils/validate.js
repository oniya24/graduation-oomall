import { Modal } from 'antd-mobile';
export const validateFormError = error => {
  if (error !== null) {
    const errMsg = error[Object.keys(error)[0]].errors[0].message;
    Modal.alert('', errMsg, [
      {
        text: '好的',
        style: { color: 'GrayText' },
      },
    ]);
    return false;
  }
  return true;
};

export const isErrnoEqual0 = res => {
  const { errno } = res;
  return Number(errno) === 0;
};

export const isCodeEqualOk = res => {
  const { code } = res;
  return code === 'OK';
};
