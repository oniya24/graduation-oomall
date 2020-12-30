import { mapStateToProps, mapDispatchToProps } from '@/models/Address';
import { connect } from 'umi';
import { createForm } from 'rc-form';
import {
  List,
  Picker,
  Button,
  InputItem,
  TextareaItem,
  Switch,
  Modal,
} from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
import { useEffect } from 'react';
const address_edit = ({
  form,
  addressDetail,
  putAddressById,
  putDefaultAddress,
}) => {
  const {
    getFieldProps,
    validateFields,
    setFieldsInitialValue,
    getFieldError,
    setFieldsValue,
  } = form;
  const { consignee, mobile, regionId, detail, id, isDefault } = addressDetail;
  const submit = () => {
    validateFields((error, value) => {
      if (error !== null) {
        const errMsg = error[Object.keys(error)[0]].errors[0].message;
        console.log('error', errMsg);
        Modal.alert('', errMsg, [
          {
            text: '好的',
            style: { color: 'GrayText' },
          },
        ]);
      } else {
        const { isDefault, ...params } = value;
        isDefault && putDefaultAddress(id); // 设置为默认地址
        putAddressById({ ...params, id });
      }
    });
  };
  return (
    <div>
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <InputItem
          {...getFieldProps('consignee', {
            initialValue: consignee,
            rules: [{ required: true, message: '需要输入收件人' }],
          })}
          placeholder={'填写收件人'}
        >
          收件人
        </InputItem>

        <InputItem
          {...getFieldProps('mobile', {
            initialValue: mobile,
            rules: [{ required: true, message: '需要输入联系方式' }],
          })}
          type="phone"
          placeholder="填写联系方式"
        >
          联系方式
        </InputItem>
        <Picker
          extra="请选择(可选)"
          data={district}
          title="Areas"
          {...getFieldProps('regionId', {
            initialValue: regionId,
            rules: [{ required: true, message: '需要选择省市' }],
          })}
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal">选择省市</List.Item>
        </Picker>
        <TextareaItem
          title="具体地址"
          {...getFieldProps('detail', {
            initialValue: detail,
            rules: [{ required: true }],
          })}
          rows={3}
          placeholder="输入详细地址"
        />
        <List.Item
          extra={
            <Switch
              {...getFieldProps('isDefault', {
                initialValue: isDefault,
                valuePropName: 'checked',
              })}
            />
          }
        >
          是否是默认地址
        </List.Item>
        <List.Item>
          <Button inline type="primary" onClick={submit}>
            提交
          </Button>
        </List.Item>
      </List>
    </div>
  );
};
const wrapper_address_edit = createForm()(address_edit);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(wrapper_address_edit);
