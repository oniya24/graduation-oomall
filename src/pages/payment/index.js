import { mapStateToProps, mapDispatchToProps } from '@/models/Payment';
import { connect, useLocation } from 'umi';
import { useEffect, useState } from 'react';
import { Card, Button, ActionSheet } from 'antd-mobile';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(
  window.navigator.userAgent,
);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
const payment = ({
  paypatterns,
  getPayPatterns,
  postPayRecord,
  postAftersalePayRecordById,
}) => {
  const { query } = useLocation(); // 根据模式判断是售后 还是 正常订单
  const { mode } = query; // 根据模式判断是售后 还是 正常订单
  const [curPayPattern, setCurPayPattern] = useState(0);
  const hanldePaymentSubmit = async () => {
    postPayRecord();
    postAftersalePayRecordById();
  };
  const handlePaymentActionSheet = () => {
    const BUTTONS = ['支付', '取消', 'Delete'];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        // destructiveButtonIndex: BUTTONS.length - 2,
        // title: 'title',
        message: <Card>39.9</Card>,
        maskClosable: true,
        'data-seed': 'logId',
        wrapProps,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          hanldePaymentSubmit();
        }
      },
    );
  };
  useEffect(() => {
    getPayPatterns(); // 获取支付模式
  }, []);
  return (
    <Card>
      131313 这是支付的内容
      <Card>
        这里是弹窗，显示支付模式，和支付金额信息等
        <Button onClick={handlePaymentActionSheet}>支付</Button>
      </Card>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(payment);
