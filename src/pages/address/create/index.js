import { mapStateToProps, mapDispatchToProps } from '@/models/Address';
import { connect } from 'umi';
import { createForm } from 'rc-form';
import { List, Picker, Button, InputItem, TextareaItem } from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
import { useEffect } from 'react';
import { validateFormError } from '@/utils/validate';
const address_edit = ({ form, postAddress }) => {
  const { getFieldProps, validateFields } = form;
  const submit = () => {
    validateFields((error, value) => {
      if (!validateFormError(error)) {
        postAddress({ value });
      }
    });
  };
  return (
    <form>
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <InputItem
          {...getFieldProps('consignee', {
            initialValue: '',
            rules: [{ required: true }],
          })}
          placeholder="填写收件人"
        >
          收件人
        </InputItem>
        <InputItem
          {...getFieldProps('mobile', {
            initialValue: '',
            rules: [{ required: true }],
          })}
          type="phone"
          placeholder="填写手机号码"
        >
          手机号码
        </InputItem>
        <Picker
          extra="请选择(可选)"
          data={district}
          title="Areas"
          {...getFieldProps('regionId', {
            initialValue: '',
            rules: [{ required: true }],
          })}
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal">选择省市</List.Item>
        </Picker>
        <TextareaItem
          title="具体地址"
          {...getFieldProps('detail', {
            initialValue: '',
            rules: [{ required: true }],
          })}
          rows={3}
          placeholder="输入详细地址"
        />
        <List.Item>
          <Button inline type="primary" onClick={submit}>
            提交
          </Button>
        </List.Item>
      </List>
    </form>
  );
};
const wrapper_address_create = createForm()(address_edit);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(wrapper_address_create);
