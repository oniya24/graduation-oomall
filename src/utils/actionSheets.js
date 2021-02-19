import { ActionSheet } from 'antd-mobile';
import React from 'react';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(
  window.navigator.userAgent,
);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
export const paymentActionSheet = props => {
  const { paymentPattern, price } = props;
  const BUTTONS = ['支付', '取消'];
  ActionSheet.showActionSheetWithOptions(
    {
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      title: 'title',
      message: <h1>39.9</h1>,
      maskClosable: true,
      wrapProps,
    },
    buttonIndex => {
      console.log(buttonIndex);
    },
  );
};
