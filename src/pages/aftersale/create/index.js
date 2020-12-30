import { mapStateToProps, mapDispatchToProps } from '@/models/Aftersale';
import { connect } from 'umi';
import { createForm } from 'rc-form';
import {
  List,
  Stepper,
  TextareaItem,
  Picker,
  Card,
  Button,
  Modal,
} from 'antd-mobile';
import { aftersaleTypes } from '@/consts/mall';

const aftersale_create = ({ postAftersale, form }) => {
  const {
    getFieldProps,
    validateFields,
    setFieldsInitialValue,
    getFieldError,
    setFieldsValue,
  } = form;
  // "type": 0,
  // "quantity": 0,
  // "reason": "string",
  // "regionId": 0,
  // "detail": "string",
  // "consignee": "string",
  // "mobile": "string"
  const submit = () => {
    validateFields((error, value) => {
      console.log(value);
      if (error !== null) {
        const errMsg = error[Object.keys(error)[0]].errors[0].message;
        Modal.alert('', errMsg, [
          {
            text: '好的',
            style: { color: 'GrayText' },
          },
        ]);
      } else {
        postAftersale(value);
      }
    });
  };
  return (
    <Card>
      <List>
        <Picker
          extra="请选择售后类型"
          data={aftersaleTypes}
          title="售后类型"
          cols={1}
          {...getFieldProps('type', {
            // initialValue: regionId,
            rules: [{ required: true, message: '需要选择售后类型' }],
          })}
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal">选择售后</List.Item>
        </Picker>
        <List.Item
          wrap
          extra={
            <Stepper
              {...getFieldProps('quantity', {
                // initialValue: regionId,
                rules: [{ required: true, message: '选择数量' }],
              })}
              style={{ width: '100%', minWidth: '100px' }}
              showNumber
              max={10}
              min={1}
              defaultValue={2}
            />
          }
        >
          产品数量
        </List.Item>
        <TextareaItem
          title="售后问题"
          {...getFieldProps('reason', {
            rules: [{ required: true }],
          })}
          rows={3}
          placeholder="输入售后问题"
        />
        <List.Item>
          <Button inline type="primary" size="small" onClick={submit}>
            提交售后单
          </Button>
        </List.Item>
      </List>
    </Card>
  );
};

const wrapper_aftersale_create = createForm()(aftersale_create);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(wrapper_aftersale_create);
